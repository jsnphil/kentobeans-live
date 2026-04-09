import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CommandTabs from '../CommandTabs';

const songRequestCmds = [
  { command: 'sr [link]', description: 'Requests a song', aliases: ['request'] },
  { command: 'wrongsong', description: 'Removes your song from the queue' }
];

const soundEffectCmds = [
  { command: 'applause', description: "Plays the 'applause' sound effect in stream" },
  { command: 'bummer', description: "Plays the 'bummer' sound effect in stream" }
];

const rewardRedemptionCmds = [
  { command: 'livelearn', description: 'Unlocks a live learn request' }
];

const otherCmds = [
  { command: 'discord', description: 'Displays a link in chat to the Discord server' },
  { command: 'beans', description: 'Display the amount of beans you have' }
];

const defaultProps = {
  songRequestCmds,
  soundEffectCmds,
  rewardRedemptionCmds,
  otherCmds
};

describe('CommandTabs', () => {
  it('renders the commands table', () => {
    render(<CommandTabs {...defaultProps} />);
    expect(screen.getByTestId('commands-table')).toBeInTheDocument();
  });

  it('shows Song Request commands by default', () => {
    render(<CommandTabs {...defaultProps} />);
    const table = screen.getByTestId('commands-table');
    expect(table).toHaveTextContent('sr [link]');
  });

  it('renders the mobile dropdown', () => {
    render(<CommandTabs {...defaultProps} />);
    expect(screen.getByTestId('commands-dropdown')).toBeInTheDocument();
  });

  it('switching to Sound Effects via dropdown shows sound effect commands', () => {
    render(<CommandTabs {...defaultProps} />);
    fireEvent.change(screen.getByTestId('commands-dropdown'), {
      target: { value: 'soundEffectCmds' }
    });
    expect(screen.getByTestId('commands-table')).toHaveTextContent('applause');
  });

  it('shows the sound effects info banner when Sound Effects tab is active', () => {
    render(<CommandTabs {...defaultProps} />);
    fireEvent.change(screen.getByTestId('commands-dropdown'), {
      target: { value: 'soundEffectCmds' }
    });
    expect(screen.getByTestId('sound-effects-info')).toBeInTheDocument();
  });

  it('does not show the sound effects banner on other tabs', () => {
    render(<CommandTabs {...defaultProps} />);
    expect(screen.queryByTestId('sound-effects-info')).not.toBeInTheDocument();
  });

  it('switching to Reward Redemption shows redemption commands', () => {
    render(<CommandTabs {...defaultProps} />);
    fireEvent.change(screen.getByTestId('commands-dropdown'), {
      target: { value: 'rewardRedemptionCmds' }
    });
    expect(screen.getByTestId('commands-table')).toHaveTextContent('livelearn');
  });

  it('switching to Other shows other commands', () => {
    render(<CommandTabs {...defaultProps} />);
    fireEvent.change(screen.getByTestId('commands-dropdown'), {
      target: { value: 'otherCmds' }
    });
    expect(screen.getByTestId('commands-table')).toHaveTextContent('discord');
  });

  it('renders command aliases when present', () => {
    render(<CommandTabs {...defaultProps} />);
    expect(screen.getByTestId('commands-table')).toHaveTextContent('request');
  });

  it('switching back to Song Requests hides the sound effects banner', () => {
    render(<CommandTabs {...defaultProps} />);
    const dropdown = screen.getByTestId('commands-dropdown');
    fireEvent.change(dropdown, { target: { value: 'soundEffectCmds' } });
    fireEvent.change(dropdown, { target: { value: 'songRequestCmds' } });
    expect(screen.queryByTestId('sound-effects-info')).not.toBeInTheDocument();
    expect(screen.getByTestId('commands-table')).toHaveTextContent('sr [link]');
  });
});
