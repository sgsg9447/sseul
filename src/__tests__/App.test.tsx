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
        name: /그냥 지나칠 수 있는 불편에서\s+서비스의 시작점을 찾습니다/i,
      }),
    ).toBeInTheDocument();
  });

  it('presents the three projects as one connected flow', () => {
    render(<App />);

    expect(screen.getAllByText('EnrollOps').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Waitroom').length).toBeGreaterThan(0);
    expect(screen.getAllByText('ZERO100').length).toBeGreaterThan(0);
  });

  it('shows concrete project artifacts instead of abstract cards', () => {
    render(<App />);

    expect(screen.getByText('ZERO100 live screen')).toBeInTheDocument();
    expect(screen.getByText('Waitroom live screen')).toBeInTheDocument();
    expect(screen.getByText('EnrollOps live screen')).toBeInTheDocument();
  });

  it('summarizes each project as before flow and impact', () => {
    render(<App />);

    expect(screen.getAllByText('Before').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Flow').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Impact').length).toBeGreaterThan(0);
  });
});
