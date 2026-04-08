import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SongQueueEntry } from '../SongQueueEntry';

describe('SongQueueEntry', () => {
  const baseProps = {
    rank: 1,
    title: 'Midnight Drive',
    requestedBy: 'User123',
    duration: 180
  };

  it('renders the song title', () => {
    render(<SongQueueEntry {...baseProps} />);
    expect(screen.getByText('Midnight Drive')).toBeInTheDocument();
  });

  it('renders the requester name', () => {
    render(<SongQueueEntry {...baseProps} />);
    expect(screen.getByText(/User123/)).toBeInTheDocument();
  });

  it('renders the formatted duration', () => {
    render(<SongQueueEntry {...baseProps} />);
    expect(screen.getByText('3:00')).toBeInTheDocument();
  });

  it('renders the rank when bumped is true', () => {
    render(<SongQueueEntry {...baseProps} bumped />);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('does not render rank text when bumped is false and winner is false', () => {
    render(<SongQueueEntry {...baseProps} rank={5} />);
    expect(screen.queryByText('5')).not.toBeInTheDocument();
  });

  it('formats a two-digit second duration correctly', () => {
    render(<SongQueueEntry {...baseProps} duration={65} />);
    expect(screen.getByText('1:05')).toBeInTheDocument();
  });

  it('renders different durations correctly', () => {
    render(<SongQueueEntry {...baseProps} duration={210} />);
    expect(screen.getByText('3:30')).toBeInTheDocument();
  });
});
