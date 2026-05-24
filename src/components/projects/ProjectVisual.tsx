import type { ProjectVisualType } from '../../types/portfolio';
import enrollOpsScreen from '../../assets/enrollops-screen.png';
import waitroomScreen from '../../assets/waitroom-screen.png';
import zero100Screen from '../../assets/zero100-screen.png';

type ProjectVisualProps = {
  type: ProjectVisualType;
  onOpen: () => void;
};

export function getProjectScreenshot(type: ProjectVisualType) {
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
  const screenshot = getProjectScreenshot(type);

  return (
    <div className={`artifact-stack screenshot-stack ${screenshot.frame}-shot`}>
      <span className="artifact-label">{screenshot.label}</span>
      <button
        className={`screenshot-frame screenshot-frame-${screenshot.frame}`}
        type="button"
        onClick={onOpen}
        aria-label={`${screenshot.alt} 크게 보기`}
      >
        <img src={screenshot.src} alt={screenshot.alt} />
        <span className="screenshot-zoom">크게 보기</span>
      </button>
    </div>
  );
}
