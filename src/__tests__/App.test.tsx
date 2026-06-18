import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import App from '../App';

afterEach(() => {
  cleanup();
  window.history.pushState(null, '', '/');
});

const hasParagraphText =
  (expected: string) =>
  (_content: string, element: Element | null): boolean =>
    element?.tagName.toLowerCase() === 'p' &&
    element.textContent?.replace(/\s+/g, '') === expected.replace(/\s+/g, '');

const nonEmpty = (el: Element | null | undefined): boolean => !!el && (el.textContent ?? '').trim().length > 0;

/**
 * Structural check for a project case-study card. Asserts the card has a
 * non-empty summary, role/detail paragraph, a Before/Decision/Impact board with
 * filled values, and non-empty tags — without pinning the exact Korean prose,
 * which is iterated frequently.
 */
const expectProjectCardCopy = (
  cardEl: Element,
  { boardLabels = ['Before', 'Decision', 'Impact'], minTags = 1 }: { boardLabels?: string[]; minTags?: number } = {},
) => {
  expect(nonEmpty(cardEl.querySelector('.project-title + p'))).toBe(true);
  expect(nonEmpty(cardEl.querySelector('.project-role'))).toBe(true);

  const boardRows = [...cardEl.querySelectorAll('.project-board > div')];
  expect(boardRows.length).toBe(boardLabels.length);
  boardLabels.forEach((label, index) => {
    expect(boardRows[index].querySelector('dt')?.textContent?.trim()).toBe(label);
    expect(nonEmpty(boardRows[index].querySelector('dd'))).toBe(true);
  });

  const tags = [...cardEl.querySelectorAll('.tag-row span')];
  expect(tags.length).toBeGreaterThanOrEqual(minTags);
  tags.forEach((tag) => expect(nonEmpty(tag)).toBe(true));
};

describe('sseul portfolio', () => {
  it('introduces the service planning positioning in the hero', () => {
    render(<App />);

    expect(screen.getByText('SSEUL · SERVICE PLANNING PORTFOLIO')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /그냥 지나칠 수 있는 불편에서\s+서비스의 시작점을 찾습니다/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        hasParagraphText('불편을 구조로 바꾸고, 그 구조가 화면에서 실제로 동작하게 만듭니다.'),
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        hasParagraphText(
          '직업훈련기관 사이트를 문제 정의부터 데이터 구조·화면 설계·구현까지 단독으로 다시 설계했습니다.',
        ),
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /대표 프로젝트 보기/i })).toHaveAttribute('href', '#case-study');
    expect(screen.getByRole('link', { name: /경력 요약 보기/i })).toHaveAttribute('href', '#experience');
    expect(screen.getByText('구현을 아는 서비스기획자')).toBeInTheDocument();
    expect(screen.getByText('Problem → Structure → Build')).toBeInTheDocument();
  });

  it('keeps the hero flow and top navigation aligned to existing sections', () => {
    render(<App />);

    expect(screen.queryByLabelText('Portfolio workflow keywords')).not.toBeInTheDocument();

    const nav = screen.getByRole('navigation', { name: /main navigation/i });
    expect(within(nav).getByRole('link', { name: 'About' })).toHaveAttribute('href', '#top');
    expect(within(nav).getByRole('link', { name: 'Case Study' })).toHaveAttribute(
      'href',
      '#case-study',
    );
    expect(within(nav).queryByRole('link', { name: 'Starting Points' })).not.toBeInTheDocument();
    expect(within(nav).getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#projects');
    expect(within(nav).getByRole('link', { name: 'Capabilities' })).toHaveAttribute('href', '#skills');
    expect(within(nav).getByRole('link', { name: 'Experience' })).toHaveAttribute('href', '#experience');
    expect(within(nav).queryByRole('link', { name: 'Approach' })).not.toBeInTheDocument();
    expect(within(nav).queryByRole('link', { name: 'Problem' })).not.toBeInTheDocument();
    expect(within(nav).queryByRole('link', { name: 'Featured' })).not.toBeInTheDocument();
  });

  it('leads with the woodworking academy case study as the flagship first section', () => {
    const { container } = render(<App />);
    const caseStudySection = container.querySelector('#case-study');
    expect(caseStudySection).toBeInTheDocument();
    const study = within(caseStudySection as HTMLElement);

    expect(study.getByText('01 / MAIN PROJECT · 목공 직업훈련기관 리뉴얼')).toBeInTheDocument();
    expect(
      study.getByRole('heading', {
        level: 2,
        name: /이미지·게시판으로 흩어진 직업훈련기관 사이트를,\s+데이터와 동선으로 다시 설계했습니다\./i,
      }),
    ).toBeInTheDocument();

    // the four root causes are surfaced as data, not images
    ['콘텐츠가 데이터가 아님', '행동·전환 흐름 미설계', '게시판 전용', '정보 우선순위·시각 위계 실패'].forEach(
      (cause) => {
        expect(study.getByText(cause)).toBeInTheDocument();
      },
    );

    // the seven chapters of the case study
    ['PROBLEM', 'USERS', 'GOALS & PRINCIPLES', 'INFORMATION ARCHITECTURE', 'USER FLOW', 'SCREEN DESIGN', 'SCOPE', 'EXPECTED IMPACT'].forEach(
      (chapter) => {
        expect(study.getByText(chapter)).toBeInTheDocument();
      },
    );

    // the starting-points section it replaced is gone
    expect(container.querySelector('#starting-points')).not.toBeInTheDocument();
    expect(study.queryByText('01 / STARTING POINTS')).not.toBeInTheDocument();
  });

  it('removes the approach section so the case study leads into projects', () => {
    const { container } = render(<App />);
    expect(container.querySelector('#approach')).not.toBeInTheDocument();
    expect(container.querySelector('#case')).not.toBeInTheDocument();
    expect(screen.queryByText('02 / APPROACH')).not.toBeInTheDocument();
    expect(screen.queryByText('04 / Featured project')).not.toBeInTheDocument();
  });

  it('introduces selected projects with a concise headline only', () => {
    const { container } = render(<App />);
    const projectsSection = container.querySelector('#flow');
    expect(projectsSection).toBeInTheDocument();
    const intro = projectsSection?.querySelector('.section-intro') as HTMLElement;
    const projectsIntro = within(intro);

    expect(projectsIntro.getByText('02 / OTHER PROJECTS')).toBeInTheDocument();
    expect(intro).toHaveClass('section-intro-compact');
    expect(intro.querySelectorAll('p')).toHaveLength(1);
    expect(
      projectsIntro.getByRole('heading', {
        level: 2,
        name: /편집은 다시 가능하게,\s+반복은 자동화하고,\s+흩어진 정보는\s+한곳에 모았습니다\./i,
      }),
    ).toBeInTheDocument();
    expect(intro.querySelector('h2')?.querySelectorAll('br')).toHaveLength(2);
    expect(projectsIntro.queryByText(/GenA에서는 AI가 만든 슬라이드/)).not.toBeInTheDocument();
    expect(projectsIntro.queryByText(/Orzo에서는/)).not.toBeInTheDocument();
    expect(projectsIntro.queryByText(/Waitroom에서는 매장별 웨이팅/)).not.toBeInTheDocument();
    expect(projectsIntro.queryByText(/EnrollOps|ZERO100/)).not.toBeInTheDocument();
  });

  it('presents capabilities as the third section', () => {
    const { container } = render(<App />);
    const capabilitiesSection = container.querySelector('#skills');
    expect(capabilitiesSection).toBeInTheDocument();
    const capabilities = within(capabilitiesSection as HTMLElement);

    expect(capabilities.getByText('03 / CAPABILITIES')).toBeInTheDocument();
    expect(
      capabilities.getByRole('heading', {
        level: 2,
        name: /요구사항을 구조로 정리하고,\s+실제로 동작하는 화면으로 만듭니다\./i,
      }),
    ).toBeInTheDocument();
    expect(capabilitiesSection?.querySelectorAll('.capability-card')).toHaveLength(4);
    expect(capabilitiesSection?.querySelectorAll('.approach-card')).toHaveLength(4);

    [
      [
        '구현을 고려한 기획',
        '기획 단계에서 화면 흐름, 상태 변화, 예외 상황과 구현 가능성을 함께 검토합니다.',
      ],
      [
        '요구사항 기준화',
        '모호한 요구사항을 화면 상태와 예외까지 정의된 동작 기준으로 정리합니다.',
      ],
      [
        '흐름 구조화',
        '요구사항을 기능, 데이터, 상태, 사용자 흐름으로 나누어 정리합니다.',
      ],
      [
        '반복 작업 자동화',
        '반복되는 작업을 발견하고, 다시 사용할 수 있는 도구와 흐름으로 바꿉니다.',
      ],
    ].forEach(([title, detail]) => {
      expect(capabilities.getByText(title)).toBeInTheDocument();
      expect(capabilities.getByText(hasParagraphText(detail))).toBeInTheDocument();
    });

    expect(capabilities.queryByText(/CAPABILITY 0[1-4]/)).not.toBeInTheDocument();
    expect(capabilities.queryByText('Implementation-Aware Planning')).not.toBeInTheDocument();
    expect(capabilities.queryByText('Product Structure')).not.toBeInTheDocument();
    expect(capabilities.queryByText('Automation')).not.toBeInTheDocument();
    expect(capabilities.queryByText('Collaboration')).not.toBeInTheDocument();
    expect(capabilities.queryByText('GenON')).not.toBeInTheDocument();
  });

  it('restores work experience as the fourth section', () => {
    const { container } = render(<App />);
    const experienceSection = container.querySelector('#experience');
    expect(experienceSection).toBeInTheDocument();
    const intro = experienceSection?.querySelector('.section-intro') as HTMLElement;
    const experience = within(experienceSection as HTMLElement);

    expect(experience.getByText('04 / WORK EXPERIENCE')).toBeInTheDocument();
    expect(intro).toHaveClass('section-intro-compact');
    expect(intro.querySelectorAll('p')).toHaveLength(1);
    expect(
      experience.getByRole('heading', {
        level: 2,
        name: /맡은 자리마다\s+요구사항을 동작하는 결과물까지\s+끌고 갔습니다\./i,
      }),
    ).toBeInTheDocument();
    expect(experience.queryByText('관리자 도구, 편집 기능, 콘텐츠 제작 백오피스처럼')).not.toBeInTheDocument();
    expect(experience.queryByText('운영 흐름이 중요한 기능을 구현해왔습니다.')).not.toBeInTheDocument();
    expect(experienceSection?.querySelectorAll('.skill-row')).toHaveLength(4);

    [
      [
        'Genon',
        'AI 슬라이드 편집기 프론트엔드 개발',
        '편집 화면과 미리보기 영역의 역할을 나누고, 사용자의 편집 동작이 상태와 결과 화면까지 이어지는 편집 흐름을 설계했습니다.',
      ],
      [
        'Sling',
        '콘텐츠 제작 도구와 이미지 자동화 파이프라인',
        '문제 제작·편집·배포 흐름을 백오피스로 통합하고, JSON 데이터를 이미지로 변환하는 자동화 구조를 만들었습니다.',
      ],
      [
        'Daangn',
        '검색 경험 개선과 A/B 테스트 구현',
        '검색 탭 전환 성능을 개선하고, 연관검색어 UI와 데이터 로깅을 구현했습니다.',
      ],
      [
        'KOSSA',
        '교육기획과 운영 프로세스 설계',
        '국방 SW·AI 교육 과정과 해커톤을 기획하고, 기관·참여자·운영진 사이의 요구사항을 조율했습니다.',
      ],
    ].forEach(([company, title, detail]) => {
      expect(experience.getByText(company)).toBeInTheDocument();
      expect(experience.getByText(title)).toBeInTheDocument();
      expect(experience.getByText(hasParagraphText(detail))).toBeInTheDocument();
    });
    expect(experience.queryByText('GenON')).not.toBeInTheDocument();
    expect(experience.queryByText('Danggeun')).not.toBeInTheDocument();
  });

  it('presents the three projects as one connected flow', () => {
    const { container } = render(<App />);
    const projectCards = Array.from(container.querySelectorAll('#projects .project-card'));

    expect(screen.getAllByText('GenA').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Orzo').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Waitroom').length).toBeGreaterThan(0);
    expect(projectCards).toHaveLength(3);
    expect(projectCards.map((card) => card.querySelector('h3')?.textContent)).toEqual([
      'GenA',
      'Orzo',
      'Waitroom',
    ]);
    expect(screen.queryByText('ZERO100')).not.toBeInTheDocument();
  });

  it('presents the first selected project as the GenA slide editor frontend work', () => {
    const { container } = render(<App />);
    const firstProject = container.querySelector('#projects .project-card');
    expect(firstProject).toBeInTheDocument();
    const card = within(firstProject as HTMLElement);

    expect(card.getByText('01')).toBeInTheDocument();
    expect(card.getByText('PROFESSIONAL PROJECT')).toBeInTheDocument();
    expect(card.getByText('@Genon')).toBeInTheDocument();
    expect(card.queryByText('EDITING EXPERIENCE')).not.toBeInTheDocument();
    expect(card.getByRole('heading', { level: 3, name: 'GenA' })).toBeInTheDocument();
    expect(card.getByText('AI Slide Editor')).toBeInTheDocument();
    expect(card.getByText('서비스 보기 ↗')).toHaveAttribute('href', 'https://gena.kr/');
    expect(card.getByText('GenA editor flow')).toBeInTheDocument();
    expect(card.getByAltText('GenA 서비스 화면')).toBeInTheDocument();
    expect(card.getByAltText('GenA 슬라이드 편집 화면')).toBeInTheDocument();
    expect(card.getByRole('button', { name: 'GenA 서비스 화면 크게 보기' })).toHaveClass('screenshot-frame-stack');

    // Case-study copy is iterated frequently — assert structure, not exact prose.
    expectProjectCardCopy(firstProject as Element);

    ['React', 'TypeScript', 'Slide Editor', 'WYSIWYG', 'HTML Editing', 'API Integration'].forEach((tag) => {
      expect(card.queryByText(tag)).not.toBeInTheDocument();
    });

    expect(card.queryByText(/EnrollOps|종이 수강신청서|PDF 저장|운영 개선 프로젝트|B2B SaaS/)).not.toBeInTheDocument();

    fireEvent.click(card.getByRole('button', { name: 'GenA 서비스 화면 크게 보기' }));

    const modal = screen.getByRole('dialog', { name: 'GenA' });
    expect(modal.querySelector('.screenshot-modal-panel')).toHaveClass('wide-modal');
    expect(modal.querySelector('.screenshot-modal-panel')).toHaveClass('image-heavy-modal');
    expect(modal.querySelector('.screenshot-modal-pair')).toHaveClass('screenshot-modal-spread');
  });

  it('presents the second selected project as a content image automation pipeline', () => {
    const { container } = render(<App />);
    const projectCards = container.querySelectorAll('#projects .project-card');
    const secondProject = projectCards[1];
    expect(secondProject).toBeInTheDocument();
    const card = within(secondProject as HTMLElement);

    expect(card.getByText('02')).toBeInTheDocument();
    expect(card.getByText('PROFESSIONAL PROJECT')).toBeInTheDocument();
    expect(card.getByText('@Sling')).toBeInTheDocument();
    expect(card.queryByText('AUTOMATION SYSTEM')).not.toBeInTheDocument();
    expect(
      card.getByRole('heading', { level: 3, name: 'Orzo' }),
    ).toBeInTheDocument();
    expect(card.getByText('Content Image Automation')).toBeInTheDocument();

    // Case-study copy is iterated frequently — assert structure, not exact prose.
    expectProjectCardCopy(secondProject as Element);
    expect(card.queryByText('프로젝트 보기 ↗')).not.toBeInTheDocument();

    ['프론트엔드 구현', '자동화 파이프라인', '콘텐츠 배포', '백오피스 도구'].forEach((tag) => {
      expect(card.getByText(tag)).toBeInTheDocument();
    });
    ['html2canvas', 'Puppeteer'].forEach((tag) => {
      expect(card.queryByText(tag)).not.toBeInTheDocument();
    });

    ['자동화 흐름', 'JSON 업로드', '웹 렌더링', 'PNG 변환', 'DB 저장', '앱 반영'].forEach((label) => {
      expect(card.getByText(label)).toBeInTheDocument();
    });
    expect(card.getByText('앱 릴리즈 없이 반영')).toBeInTheDocument();
    expect(secondProject?.querySelector('.pipeline-code')?.textContent).toContain('"type": "question"');
    expect(card.queryByRole('button')).not.toBeInTheDocument();
    expect(card.queryByText(/Waitroom|ZERO100|이미지 없음|캡처 없음/)).not.toBeInTheDocument();
  });

  it('moves Waitroom to the third selected project as a personal project', () => {
    const { container } = render(<App />);
    const thirdProject = container.querySelectorAll('#projects .project-card')[2];
    expect(thirdProject).toBeInTheDocument();
    const card = within(thirdProject as HTMLElement);

    expect(card.getByText('03')).toBeInTheDocument();
    expect(card.getByText('PERSONAL PROJECT')).toBeInTheDocument();
    expect(card.getByRole('heading', { level: 3, name: 'Waitroom' })).toBeInTheDocument();
    expect(card.getByText('Waitroom live screen')).toBeInTheDocument();
    expect(card.queryByText('Execution structure')).not.toBeInTheDocument();
  });

  it('shows concrete project artifacts instead of abstract cards', () => {
    render(<App />);

    expect(screen.getByText('GenA editor flow')).toBeInTheDocument();
    expect(screen.getByText('자동화 흐름')).toBeInTheDocument();
    expect(screen.getByText('Waitroom live screen')).toBeInTheDocument();
  });

  it('closes with the current service planning positioning in contact', () => {
    const { container } = render(<App />);
    const contactSection = container.querySelector('#contact');
    expect(contactSection).toBeInTheDocument();
    const contact = within(contactSection as HTMLElement);

    expect(contact.getByText('05 / CONTACT')).toBeInTheDocument();
    expect(
      contact.getByRole('heading', {
        level: 2,
        name: /시작은 작은 질문에서,\s+끝은 달라진 경험에서\./i,
      }),
    ).toBeInTheDocument();
    expect(
      contact.getByText(
        hasParagraphText('흩어진 요구사항을 기능과 흐름으로 구조화하고, 그 흐름이 실제로 동작하는 화면이 되게 만듭니다.'),
      ),
    ).toBeInTheDocument();
    expect(contact.getByRole('link', { name: /메일 보내기/i })).toBeInTheDocument();
    expect(contact.getByRole('link', { name: /이력서/i })).toHaveAttribute('href', '/resume');
    expect(contact.getByRole('link', { name: /경력기술서/i })).toHaveAttribute('href', '/career');
    expect(contact.getByRole('link', { name: /포트폴리오 PDF/i })).toHaveAttribute('href', '/portfolio-pdf');
    expect(contact.queryByRole('link', { name: /프로젝트 다시 보기/i })).not.toBeInTheDocument();

    expect(contact.getByText('ROLE FIT')).toBeInTheDocument();
    ['서비스기획 / 프로덕트 기획', '데이터·화면 설계', '프로덕트 운영·자동화', 'Seoul, Korea'].forEach((role) => {
      expect(contact.getByText(role)).toBeInTheDocument();
    });
    ['EnrollOps', 'Z100', 'AX 기획 / 업무 개선', '서비스기획 / PM / PO', '주니어 PO', 'Frontend Engineer', 'B2B SaaS · 백오피스'].forEach(
      (oldText) => {
        expect(contact.queryByText(oldText)).not.toBeInTheDocument();
      },
    );
    expect(contact.getByText('sgsg9447@gmail.com')).toHaveAttribute(
      'href',
      'https://mail.google.com/mail/?view=cm&fs=1&to=sgsg9447@gmail.com',
    );
    expect(contact.getByText('Seoul, Korea')).toBeInTheDocument();
  });

  it('summarizes each project as before decision and impact', () => {
    render(<App />);

    expect(screen.getAllByText('Before').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Decision').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Impact').length).toBeGreaterThan(0);
  });

  it('keeps the portfolio PDF route aligned with the main case study', () => {
    window.history.pushState(null, '', '/portfolio-pdf');
    const { container } = render(<App />);

    expect(container.querySelector('.portfolio-pdf-page')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('SSEUL · SERVICE PLANNING PORTFOLIO')).toBeInTheDocument();
    expect(screen.getAllByText('sseul.me').length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByRole('link', { name: 'sseul.me' })[0]).toHaveAttribute('href', 'https://sseul.me/');
    expect(screen.getByText('구현을 아는 서비스기획자')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /01\s+Main Project/i })).toBeInTheDocument();
    expect(screen.getByText('있는데, 제 역할을 못 하던 사이트')).toBeInTheDocument();
    expect(screen.getByText('데이터로 모델링하고, 동선으로 설계')).toBeInTheDocument();
    expect(screen.getByText('보여주기가 아니라 업무 도구')).toBeInTheDocument();
    expect(container.textContent).toContain('이미지·게시판으로 흩어진 직업훈련기관 사이트를');
    expect(container.textContent).toContain('콘텐츠가 데이터가 아닌 이미지·게시글');

    // full case study chapters + images now live in the PDF
    ['PROBLEM', 'USERS', 'INFORMATION ARCHITECTURE', 'SCREEN DESIGN', 'EXPECTED IMPACT'].forEach((chapter) => {
      expect(screen.getByText(chapter)).toBeInTheDocument();
    });
    expect(container.querySelector('.pf-cs-shots img')).toBeInTheDocument();
    expect(container.querySelector('.pf-cs-screens img')).toBeInTheDocument();
    expect(container.querySelectorAll('.pf-cs-figs img').length).toBeGreaterThanOrEqual(4);
    expect(container.querySelectorAll('.pf-cs-table-symptoms tbody tr')).toHaveLength(20);

    // other projects still present, flagship (목공) excluded from that list
    expect(screen.getByRole('heading', { level: 3, name: 'GenA' })).toBeInTheDocument();
    expect(screen.queryByText('Starting Points')).not.toBeInTheDocument();
  });
});
