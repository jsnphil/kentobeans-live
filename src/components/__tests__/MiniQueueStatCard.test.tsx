import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MiniQueueStatCard } from '../MiniQueueStatCard';

describe('MiniQueueStatCard', () => {
  it('renders the title', () => {
    render(<MiniQueueStatCard title='Bean Bumps' value={7} />);
    expect(screen.getAllByText('Bean Bumps').length).toBeGreaterThan(0);
  });

  it('renders a numeric value', () => {
    render(<MiniQueueStatCard title='Point Bumps' value={3} />);
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('renders a string value', () => {
    render(<MiniQueueStatCard title='Status' value='OPEN' />);
    expect(screen.getByText('OPEN')).toBeInTheDocument();
  });
});
