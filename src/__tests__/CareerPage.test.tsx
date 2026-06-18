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
  it('groups only career companies into two print pages for PDF export', () => {
    const { container } = render(<CareerPage />);
    const pages = container.querySelectorAll('.career-print-page');

    expect(pages).toHaveLength(2);

    const firstPage = within(pages[0] as HTMLElement);
    expect(firstPage.getByText('제논')).toBeInTheDocument();
    expect(firstPage.getByText('슬링')).toBeInTheDocument();
    expect(firstPage.queryByText('당근')).not.toBeInTheDocument();

    const secondPage = within(pages[1] as HTMLElement);
    expect(secondPage.getByText('당근')).toBeInTheDocument();
    expect(secondPage.getByText('KOSSA')).toBeInTheDocument();
    expect(secondPage.queryByText('제논')).not.toBeInTheDocument();
    expect(secondPage.queryByText('Waitroom')).not.toBeInTheDocument();
    expect(secondPage.queryByText('목공 직업훈련기관 리뉴얼')).not.toBeInTheDocument();

    expect(screen.getByText('보유 역량')).toBeInTheDocument();
    expect(screen.queryByText('Waitroom')).not.toBeInTheDocument();
    expect(screen.queryByText('이미지·게시판으로 흩어진 사이트를 데이터·동선으로 재설계')).not.toBeInTheDocument();
    expect(screen.queryByText(/직업훈련기관 리뉴얼에서는/)).not.toBeInTheDocument();
  });

  it('places skills directly after the last career company on the second print page', () => {
    const { container } = render(<CareerPage />);
    const lastPageBody = container.querySelector(
      '.career-print-page:last-child .career-print-page-body',
    );
    const lastPageItems = Array.from(lastPageBody?.children ?? []);

    expect(lastPageItems).toHaveLength(3);
    expect(lastPageItems[0]).toHaveTextContent('당근');
    expect(lastPageItems[1]).toHaveTextContent('KOSSA');
    expect(lastPageItems[2]).toHaveClass('career-skills');
    expect(lastPageItems[2]).toHaveTextContent('보유 역량');
  });

  it('keeps a larger print gap between companies than between projects', () => {
    expect(lastMarginTopFor('.career-company + .career-company')).toBe('90');
    expect(lastMarginTopFor('.career-proj + .career-proj')).toBe('18');
  });
});
