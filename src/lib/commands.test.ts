import { describe, it, expect } from 'vitest';
import {
  getSongRequestCommands,
  getSoundEffectsCommands,
  getRewardRedemptionCommands,
  getOtherCommands,
  getAllCommands,
  getCommandsByCategory,
  type Command,
  type CommandCategory
} from './commands';

describe('getSongRequestCommands', () => {
  it('returns an array of commands', () => {
    const cmds = getSongRequestCommands();
    expect(Array.isArray(cmds)).toBe(true);
    expect(cmds.length).toBeGreaterThan(0);
  });

  it('each command has a command and description string', () => {
    const cmds = getSongRequestCommands();
    for (const cmd of cmds) {
      expect(typeof cmd.command).toBe('string');
      expect(typeof cmd.description).toBe('string');
    }
  });

  it('includes the sr command with aliases', () => {
    const cmds = getSongRequestCommands();
    const sr = cmds.find((c) => c.command === 'sr [link]');
    expect(sr).toBeDefined();
    expect(sr?.aliases).toContain('songrequest');
    expect(sr?.aliases).toContain('request');
  });

  it('commands without aliases do not include the aliases key', () => {
    const cmds = getSongRequestCommands();
    const edit = cmds.find((c) => c.command === 'edit [link]');
    expect(edit).toBeDefined();
    expect(edit?.aliases).toBeUndefined();
  });
});

describe('getSoundEffectsCommands', () => {
  it('returns an array of commands', () => {
    const cmds = getSoundEffectsCommands();
    expect(Array.isArray(cmds)).toBe(true);
    expect(cmds.length).toBeGreaterThan(0);
  });

  it('each sound effect has a command and description', () => {
    const cmds = getSoundEffectsCommands();
    for (const cmd of cmds) {
      expect(typeof cmd.command).toBe('string');
      expect(typeof cmd.description).toBe('string');
    }
  });

  it('includes the applause command', () => {
    const cmds = getSoundEffectsCommands();
    expect(cmds.some((c) => c.command === 'applause')).toBe(true);
  });
});

describe('getRewardRedemptionCommands', () => {
  it('returns an array of commands', () => {
    const cmds = getRewardRedemptionCommands();
    expect(Array.isArray(cmds)).toBe(true);
    expect(cmds.length).toBeGreaterThan(0);
  });

  it('includes the livelearn command', () => {
    const cmds = getRewardRedemptionCommands();
    expect(cmds.some((c) => c.command === 'livelearn')).toBe(true);
  });
});

describe('getOtherCommands', () => {
  it('returns an array of commands', () => {
    const cmds = getOtherCommands();
    expect(Array.isArray(cmds)).toBe(true);
    expect(cmds.length).toBeGreaterThan(0);
  });

  it('includes the discord command', () => {
    const cmds = getOtherCommands();
    expect(cmds.some((c) => c.command === 'discord')).toBe(true);
  });
});

describe('getAllCommands', () => {
  it('returns an object with all four categories', () => {
    const catalog = getAllCommands();
    expect(catalog).toHaveProperty('songRequest');
    expect(catalog).toHaveProperty('soundEffects');
    expect(catalog).toHaveProperty('rewardRedemptions');
    expect(catalog).toHaveProperty('other');
  });

  it('each category is a non-empty array', () => {
    const catalog = getAllCommands();
    const categories: CommandCategory[] = [
      'songRequest',
      'soundEffects',
      'rewardRedemptions',
      'other'
    ];
    for (const cat of categories) {
      expect(Array.isArray(catalog[cat])).toBe(true);
      expect(catalog[cat].length).toBeGreaterThan(0);
    }
  });

  it('returned catalog matches individual getter results', () => {
    const catalog = getAllCommands();
    expect(catalog.songRequest).toEqual(getSongRequestCommands());
    expect(catalog.soundEffects).toEqual(getSoundEffectsCommands());
    expect(catalog.rewardRedemptions).toEqual(getRewardRedemptionCommands());
    expect(catalog.other).toEqual(getOtherCommands());
  });
});

describe('getCommandsByCategory', () => {
  it('returns the correct commands for each category', () => {
    const categories: CommandCategory[] = [
      'songRequest',
      'soundEffects',
      'rewardRedemptions',
      'other'
    ];
    const catalog = getAllCommands();
    for (const cat of categories) {
      expect(getCommandsByCategory(cat)).toEqual(catalog[cat]);
    }
  });

  it('returns an array for every supported category', () => {
    const categories: CommandCategory[] = [
      'songRequest',
      'soundEffects',
      'rewardRedemptions',
      'other'
    ];
    for (const cat of categories) {
      expect(Array.isArray(getCommandsByCategory(cat))).toBe(true);
    }
  });
});
