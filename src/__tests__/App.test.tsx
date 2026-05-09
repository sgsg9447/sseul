import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import App from '../App';

afterEach(() => {
  cleanup();
});

describe('sseul portfolio', () => {
  it('introduces the AX workflow positioning in the hero', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /아이디어를 실행 가능한 명세로 구조화하고, 실제 제품과 운영 워크플로우로 완성합니다/i,
      }),
    ).toBeInTheDocument();
  });

  it('presents the three projects as one connected flow', () => {
    render(<App />);

    expect(screen.getAllByText('0to100').length).toBeGreaterThan(0);
    expect(screen.getAllByText('FoodieCard').length).toBeGreaterThan(0);
    expect(screen.getAllByText('EnrollOps').length).toBeGreaterThan(0);
  });

  it('shows concrete project artifacts instead of abstract cards', () => {
    render(<App />);

    expect(screen.getByText('Generated spec')).toBeInTheDocument();
    expect(screen.getByText('Story card preview')).toBeInTheDocument();
    expect(screen.getByText('Admin + PDF')).toBeInTheDocument();
  });

  it('summarizes each project as input output and automation', () => {
    render(<App />);

    expect(screen.getAllByText('Input').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Output').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Automation').length).toBeGreaterThan(0);
  });
});
