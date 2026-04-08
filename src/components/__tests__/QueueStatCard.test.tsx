import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import QueueStatCard from '../QueueStatCard';

describe('QueueStatCard', () => {
  it('renders the title and value', () => {
    render(<QueueStatCard title='Queue Status' value='OPEN' />);
    expect(screen.getByText('Queue Status')).toBeInTheDocument();
    expect(screen.getByText('OPEN')).toBeInTheDocument();
  });

  it('renders a numeric value', () => {
    render(<QueueStatCard title='Songs in Queue' value={18} />);
    expect(screen.getByText('Songs in Queue')).toBeInTheDocument();
    expect(screen.getByText('18')).toBeInTheDocument();
  });

  it('renders the subtitle when provided', () => {
    render(
      <QueueStatCard title='Queue Status' value='OPEN' subtitle='Accepting requests' />
    );
    expect(screen.getByText('Accepting requests')).toBeInTheDocument();
  });

  it('does not render a subtitle element when subtitle is omitted', () => {
    render(<QueueStatCard title='Bean Bumps' value={3} />);
    expect(screen.queryByText(/subtitle/i)).not.toBeInTheDocument();
  });

  it('applies a custom color class to the value', () => {
    render(
      <QueueStatCard title='Queue Status' value='OPEN' color='text-green-500' />
    );
    const valueEl = screen.getByText('OPEN');
    expect(valueEl.className).toContain('text-green-500');
  });

  it('defaults value color to text-white when no color is provided', () => {
    render(<QueueStatCard title='Songs Played' value={45} />);
    const valueEl = screen.getByText('45');
    expect(valueEl.className).toContain('text-white');
  });
});
