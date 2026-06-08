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
  it('groups career companies into two print pages for PDF export', () => {
    const { container } = render(<CareerPage />);
    const pages = container.querySelectorAll('.career-print-page');

    expect(pages).toHaveLength(2);

    const firstPage = within(pages[0] as HTMLElement);
    expect(firstPage.getByText('GenON')).toBeInTheDocument();
    expect(firstPage.getByText('슬링 (Sling)')).toBeInTheDocument();
    expect(firstPage.queryByText('당근')).not.toBeInTheDocument();
    expect(firstPage.queryByText('Waitroom')).not.toBeInTheDocument();

    const secondPage = within(pages[1] as HTMLElement);
    expect(secondPage.getByText('당근')).toBeInTheDocument();
    expect(secondPage.getByText('Waitroom')).toBeInTheDocument();
    expect(secondPage.queryByText('GenON')).not.toBeInTheDocument();
    expect(secondPage.queryByText('슬링 (Sling)')).not.toBeInTheDocument();

    expect(screen.getByText('보유 역량')).toBeInTheDocument();
  });

  it('places skills directly after Waitroom on the second print page', () => {
    const { container } = render(<CareerPage />);
    const secondPageBody = container.querySelector('.career-print-page-second .career-print-page-body');
    const secondPageItems = Array.from(secondPageBody?.children ?? []);

    expect(secondPageItems).toHaveLength(3);
    expect(secondPageItems[1]).toHaveTextContent('Waitroom');
    expect(secondPageItems[2]).toHaveClass('career-skills');
    expect(secondPageItems[2]).toHaveTextContent('보유 역량');
  });

  it('keeps a larger print gap between companies than between projects', () => {
    expect(lastMarginTopFor('.career-company + .career-company')).toBe('90');
    expect(lastMarginTopFor('.career-proj + .career-proj')).toBe('18');
  });
});
