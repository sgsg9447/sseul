import { useEffect } from 'react';

const revealSelector = [
  '.section-intro',
  '.problem-card',
  '.approach-card',
  '.project-card',
  '.case-card',
  '.skill-row',
  '.cs-summary-card',
  // NOTE: 거대한 .cs-chapter 블록(~2000px)은 reveal 대상에서 제외한다.
  // 통째로 opacity+transform 합성을 돌리면 스크롤과 겹쳐 버벅임이 생김.
].join(', ');

export function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));

    elements.forEach((element, index) => {
      element.classList.add('reveal-item');
      element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 55}ms`);
    });

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.12,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}
