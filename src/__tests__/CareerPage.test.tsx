import { cleanup, render, screen, within } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { afterEach, describe, expect, it } from 'vitest';
import { CareerPage } from '../pages/CareerPage';

const styles = readFileSync(`${process.cwd()}/src/styles.css`, 'utf8');

const lastMarginTopFor = (selector: string) => {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const matches = Array.from(
    styles.matchAll(new RegExp(`${escapedSelector}\\s*{\\s*margin-top:\\s*(\\d+)px;`, 'g')),
  );

  return matches.at(-1)?.[1];
};

afterEach(() => {
  cleanup();
});

describe('CareerPage', () => {
  it('groups career companies into three print pages for PDF export', () => {
    const { container } = render(<CareerPage />);
    const pages = container.querySelectorAll('.career-print-page');

    expect(pages).toHaveLength(3);

    const firstPage = within(pages[0] as HTMLElement);
    expect(firstPage.getByText('GenON')).toBeInTheDocument();
    expect(firstPage.getByText('슬링 (Sling)')).toBeInTheDocument();
    expect(firstPage.queryByText('당근')).not.toBeInTheDocument();

    const secondPage = within(pages[1] as HTMLElement);
    expect(secondPage.getByText('당근')).toBeInTheDocument();
    expect(secondPage.getByText('목공 직업훈련기관 리뉴얼')).toBeInTheDocument();
    expect(secondPage.queryByText('GenON')).not.toBeInTheDocument();
    expect(secondPage.queryByText('Waitroom')).not.toBeInTheDocument();

    const thirdPage = within(pages[2] as HTMLElement);
    expect(thirdPage.getByText('Waitroom')).toBeInTheDocument();
    expect(thirdPage.queryByText('당근')).not.toBeInTheDocument();

    expect(screen.getByText('보유 역량')).toBeInTheDocument();
  });

  it('places skills directly after Waitroom on the last print page', () => {
    const { container } = render(<CareerPage />);
    const lastPageBody = container.querySelector(
      '.career-print-page:last-child .career-print-page-body',
    );
    const lastPageItems = Array.from(lastPageBody?.children ?? []);

    expect(lastPageItems).toHaveLength(2);
    expect(lastPageItems[0]).toHaveTextContent('Waitroom');
    expect(lastPageItems[1]).toHaveClass('career-skills');
    expect(lastPageItems[1]).toHaveTextContent('보유 역량');
  });

  it('keeps a larger print gap between companies than between projects', () => {
    expect(lastMarginTopFor('.career-company + .career-company')).toBe('90');
    expect(lastMarginTopFor('.career-proj + .career-proj')).toBe('18');
  });
});
