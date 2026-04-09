import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import QueueLegend from '../QueueLegend';

describe('QueueLegend', () => {
  it('renders the Bumped legend item', () => {
    render(<QueueLegend />);
    expect(screen.getByTestId('legend-bumped')).toBeInTheDocument();
  });

  it('renders the Shuffle Winner legend item', () => {
    render(<QueueLegend />);
    expect(screen.getByTestId('legend-shuffle-winner')).toBeInTheDocument();
  });

  it('renders the Shuffle Entrant legend item', () => {
    render(<QueueLegend />);
    expect(screen.getByTestId('legend-shuffle-entrant')).toBeInTheDocument();
  });
});
