import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

describe('brand logo assets', () => {
  it('embeds text styling so the header logo renders correctly as an image', () => {
    const logo = readFileSync(resolve(__dirname, '../assets/logo.svg'), 'utf8');

    expect(logo).toContain('font-family=');
    expect(logo).toContain('fill="#201515"');
    expect(logo).toContain('fill="#ff4f00"');
    expect(logo).toContain('viewBox="0 0 176 64"');
    expect(logo).toContain('cx="150"');
  });
});
