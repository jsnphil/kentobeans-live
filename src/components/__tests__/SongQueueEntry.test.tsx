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
    expect(screen.getByTestId('song-entry-title')).toHaveTextContent('Midnight Drive');
  });

  it('renders the requester name', () => {
    render(<SongQueueEntry {...baseProps} />);
    expect(screen.getByTestId('song-entry-requester')).toHaveTextContent('User123');
  });

  it('renders the formatted duration', () => {
    render(<SongQueueEntry {...baseProps} />);
    expect(screen.getByTestId('song-entry-duration')).toHaveTextContent('3:00');
  });

  it('renders the rank when bumped is true', () => {
    render(<SongQueueEntry {...baseProps} bumped />);
    expect(screen.getByTestId('song-entry-rank')).toHaveTextContent('1');
  });

  it('does not render rank element when bumped is false and winner is false', () => {
    render(<SongQueueEntry {...baseProps} rank={5} />);
    expect(screen.queryByTestId('song-entry-rank')).not.toBeInTheDocument();
  });

  it('does not render rank element when winner is true', () => {
    render(<SongQueueEntry {...baseProps} winner />);
    expect(screen.queryByTestId('song-entry-rank')).not.toBeInTheDocument();
  });

  it('formats a two-digit second duration correctly', () => {
    render(<SongQueueEntry {...baseProps} duration={65} />);
    expect(screen.getByTestId('song-entry-duration')).toHaveTextContent('1:05');
  });

  it('renders different durations correctly', () => {
    render(<SongQueueEntry {...baseProps} duration={210} />);
    expect(screen.getByTestId('song-entry-duration')).toHaveTextContent('3:30');
  });
});
