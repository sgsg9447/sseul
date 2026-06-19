import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import App from '../App';

beforeEach(() => {
  window.history.pushState(null, '', '/work');
});

afterEach(() => {
  cleanup();
  window.history.pushState(null, '', '/');
});

describe('freelance work landing (/work)', () => {
  it('leads with the web-renewal positioning and a contact CTA', () => {
    const { container } = render(<App />);

    expect(container.querySelector('.work-page')).toBeInTheDocument();
    expect(screen.getByText('WEB RENEWAL · 웹사이트 리뉴얼 외주')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 1, name: /안 되던 웹사이트를,\s+다시 일하게 만듭니다\./i }),
    ).toBeInTheDocument();

    const inquiryCtas = screen.getAllByRole('link', { name: /이메일.*문의/i });
    expect(inquiryCtas.length).toBeGreaterThan(0);
    inquiryCtas.forEach((cta) => expect(cta.getAttribute('href')).toMatch(/^mailto:/));
    expect(screen.getByRole('link', { name: /작업 사례 보기/i })).toHaveAttribute('href', '#before-after');
  });

  it('shows the before/after section built from the woodworking screenshots', () => {
    const { container } = render(<App />);
    const section = container.querySelector('#before-after');
    expect(section).toBeInTheDocument();

    expect(within(section as HTMLElement).getByText('같은 화면, 이렇게 달라집니다')).toBeInTheDocument();
    expect(section?.querySelectorAll('.work-ba-pair')).toHaveLength(3);
    expect(within(section as HTMLElement).getAllByText('Before').length).toBe(3);
    expect(within(section as HTMLElement).getAllByText('After').length).toBe(3);
  });

  it('presents the five-step process and a shared progress board', () => {
    const { container } = render(<App />);
    const section = container.querySelector('#process');
    expect(section).toBeInTheDocument();

    expect(section?.querySelectorAll('.work-step')).toHaveLength(5);
    const steps = section?.querySelector('.work-steps') as HTMLElement;
    ['킥오프 미팅', '디자인 시안', '개발', '함께 검토', '완료'].forEach((step) => {
      expect(within(steps).getByText(step)).toBeInTheDocument();
    });
    expect(section?.querySelectorAll('.work-board-col')).toHaveLength(3);
  });

  it('explains the feedback request sheet', () => {
    const { container } = render(<App />);
    const section = container.querySelector('#feedback');
    expect(section).toBeInTheDocument();
    expect(within(section as HTMLElement).getByText('디자인 검수 피드백 요청서')).toBeInTheDocument();
    expect(section?.querySelectorAll('.work-fb-table tbody tr').length).toBeGreaterThanOrEqual(1);
  });

  it('lists the result and deliverable documents with a link to the real deliverables', () => {
    const { container } = render(<App />);
    const section = container.querySelector('#deliverables');
    expect(section).toBeInTheDocument();

    expect(within(section as HTMLElement).getByText('결과물')).toBeInTheDocument();
    expect(within(section as HTMLElement).getByText('산출물')).toBeInTheDocument();
    ['서비스 기획서', '요구사항 정의서', '정보구조도 (IA)', '유저플로우', '화면설계서'].forEach((doc) => {
      expect(within(section as HTMLElement).getByText(doc)).toBeInTheDocument();
    });
    expect(within(section as HTMLElement).getByRole('link', { name: /실제 산출물 보기/i })).toHaveAttribute(
      'href',
      '/work/deliverables',
    );
  });

  it('invites small jobs and closes with an email-first contact', () => {
    const { container } = render(<App />);

    const scope = container.querySelector('#scope');
    expect(within(scope as HTMLElement).getByText('랜딩페이지 한 장')).toBeInTheDocument();

    const contact = container.querySelector('#contact');
    expect(contact).toBeInTheDocument();
    const inquiry = within(contact as HTMLElement).getByRole('link', { name: /이메일로 문의하기/i });
    expect(inquiry.getAttribute('href')).toMatch(/^mailto:sgsg9447@gmail.com/);
    expect(within(contact as HTMLElement).getByText('sgsg9447@gmail.com')).toBeInTheDocument();
  });

  it('emphasises the one-week build with a stats strip', () => {
    const { container } = render(<App />);
    const stats = container.querySelector('.work-case-stats');
    expect(stats).toBeInTheDocument();
    expect(within(stats as HTMLElement).getByText('1주 이내')).toBeInTheDocument();
  });
});

describe('woodworking-only case page (/work/case)', () => {
  afterEach(() => {
    cleanup();
    window.history.pushState(null, '', '/');
  });

  it('shows only the woodworking case study with the 20-problem table, not the company portfolio', () => {
    window.history.pushState(null, '', '/work/case');
    const { container } = render(<App />);

    expect(container.querySelector('.work-case-page')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /작업 소개로/i })).toHaveAttribute('href', '/work');
    expect(container.querySelector('#case-study')).toBeInTheDocument();
    // the 20 recorded problems render as a table
    expect(container.querySelectorAll('.cs-table-symptoms tbody tr')).toHaveLength(20);
    // the deliverables link stays inside the /work universe
    expect(screen.getByRole('link', { name: /산출물 문서 보기/i })).toHaveAttribute('href', '/work/deliverables');
    // the company "other projects" are NOT shown here
    expect(screen.queryByText('GenA')).not.toBeInTheDocument();
    expect(screen.queryByText('Orzo')).not.toBeInTheDocument();
  });
});

describe('scoped deliverables page (/work/deliverables)', () => {
  afterEach(() => {
    cleanup();
    window.history.pushState(null, '', '/');
  });

  it('renders the deliverables and routes its back link to /work', () => {
    window.history.pushState(null, '', '/work/deliverables');
    const { container } = render(<App />);

    expect(container.querySelector('.deliverables-page')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /포트폴리오로/i })).toHaveAttribute('href', '/work');
    expect(screen.getByText('서비스 기획서')).toBeInTheDocument();
  });
});
