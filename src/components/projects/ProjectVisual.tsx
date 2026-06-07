import type { ProjectVisualType } from '../../types/portfolio';
import enrollOpsScreen from '../../assets/enrollops-screen.png';
import genaEditor from '../../assets/gena-editor.png';
import genaOverview from '../../assets/gena-overview.png';
import waitroomScreen from '../../assets/waitroom-screen.png';
import zero100Screen from '../../assets/zero100-screen.png';

type ProjectScreenshot = {
  src: string;
  label: string;
  alt: string;
  frame: 'desktop' | 'mobile';
  secondarySrc?: string;
  secondaryAlt?: string;
};

type ProjectVisualProps = {
  type: ProjectVisualType;
  onOpen: () => void;
};

export function getProjectScreenshot(type: ProjectVisualType): ProjectScreenshot {
  if (type === 'gena') {
    return {
      src: genaOverview,
      secondarySrc: genaEditor,
      label: 'GenA editor flow',
      alt: 'GenA 서비스 화면',
      secondaryAlt: 'GenA 슬라이드 편집 화면',
      frame: 'desktop',
    };
  }

  if (type === 'spec') {
    return {
      src: zero100Screen,
      label: 'ZERO100 live screen',
      alt: 'ZERO100 서비스 화면',
      frame: 'desktop',
    };
  }

  if (type === 'meal') {
    return {
      src: waitroomScreen,
      label: 'Waitroom live screen',
      alt: 'Waitroom 서비스 화면',
      frame: 'mobile',
    };
  }

  return {
    src: enrollOpsScreen,
    label: 'EnrollOps live screen',
    alt: 'EnrollOps 서비스 화면',
    frame: 'mobile',
  };
}

export function ProjectVisual({ type, onOpen }: ProjectVisualProps) {
  if (type === 'pipeline') {
    const steps = ['JSON Upload', 'Hidden Web Render', 'PNG Export', 'DB Save', 'iOS / Android App'];

    return (
      <div className="artifact-stack pipeline-artifact">
        <span className="artifact-label">AUTOMATION FLOW</span>
        <div className="pipeline-board" aria-label="Content image automation flow">
          <div className="pipeline-steps">
            {steps.map((step, index) => (
              <div className="pipeline-step-wrap" key={step}>
                <span className="pipeline-step">{step}</span>
                {index < steps.length - 1 ? <span className="pipeline-arrow">→</span> : null}
              </div>
            ))}
          </div>
          <p className="pipeline-note">No app release needed</p>
          <pre className="pipeline-code" aria-label="Sample JSON payload">{`{
  "type": "question",
  "subject": "math",
  "layout": "card"
}`}</pre>
        </div>
      </div>
    );
  }

  const screenshot = getProjectScreenshot(type);

  return (
    <div className={`artifact-stack screenshot-stack ${screenshot.frame}-shot`}>
      <span className="artifact-label">{screenshot.label}</span>
      <button
        className={`screenshot-frame screenshot-frame-${screenshot.frame}${
          screenshot.secondarySrc ? ' screenshot-frame-stack' : ''
        }`}
        type="button"
        onClick={onOpen}
        aria-label={`${screenshot.alt} 크게 보기`}
      >
        {screenshot.secondarySrc ? (
          <>
            <img className="screenshot-primary" src={screenshot.src} alt={screenshot.alt} />
            <img
              className="screenshot-secondary"
              src={screenshot.secondarySrc}
              alt={screenshot.secondaryAlt ?? screenshot.alt}
            />
          </>
        ) : (
          <img src={screenshot.src} alt={screenshot.alt} />
        )}
        <span className="screenshot-zoom">크게 보기</span>
      </button>
    </div>
  );
}
