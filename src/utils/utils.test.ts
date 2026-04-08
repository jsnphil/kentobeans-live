import { describe, it, expect } from 'vitest';
import { formatDuration } from './utils';

describe('formatDuration', () => {
  it('formats zero seconds as 0:00', () => {
    expect(formatDuration(0)).toBe('0:00');
  });

  it('formats seconds below one minute', () => {
    expect(formatDuration(5)).toBe('0:05');
    expect(formatDuration(9)).toBe('0:09');
    expect(formatDuration(59)).toBe('0:59');
  });

  it('formats exactly one minute', () => {
    expect(formatDuration(60)).toBe('1:00');
  });

  it('formats minutes and seconds', () => {
    expect(formatDuration(65)).toBe('1:05');
    expect(formatDuration(90)).toBe('1:30');
    expect(formatDuration(125)).toBe('2:05');
  });

  it('pads single-digit seconds with a leading zero', () => {
    expect(formatDuration(61)).toBe('1:01');
    expect(formatDuration(301)).toBe('5:01');
  });

  it('does not pad minutes', () => {
    expect(formatDuration(600)).toBe('10:00');
    expect(formatDuration(3600)).toBe('60:00');
  });

  it('formats a typical song duration', () => {
    expect(formatDuration(210)).toBe('3:30');
    expect(formatDuration(195)).toBe('3:15');
    expect(formatDuration(180)).toBe('3:00');
  });
});
