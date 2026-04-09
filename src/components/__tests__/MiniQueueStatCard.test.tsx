import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MiniQueueStatCard } from '../MiniQueueStatCard';

describe('MiniQueueStatCard', () => {
  it('renders the title', () => {
    render(<MiniQueueStatCard title='Bean Bumps' value={7} />);
    expect(screen.getByTestId('mini-stat-card-title')).toBeInTheDocument();
    expect(screen.getByTestId('mini-stat-card-title')).toHaveTextContent('Bean Bumps');
  });

  it('renders a numeric value', () => {
    render(<MiniQueueStatCard title='Point Bumps' value={3} />);
    expect(screen.getByTestId('mini-stat-card-value')).toHaveTextContent('3');
  });

  it('renders a string value', () => {
    render(<MiniQueueStatCard title='Status' value='OPEN' />);
    expect(screen.getByTestId('mini-stat-card-value')).toHaveTextContent('OPEN');
  });
});
