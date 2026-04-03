import songRequestData from '@/data/songRequest.json';
import soundEffectsData from '@/data/soundEffects.json';
import rewardRedemptionsData from '@/data/rewardRedemptions.json';
import otherCommandsData from '@/data/otherCommands.json';

export type Command = {
  command: string;
  description: string;
};

export type CommandCategory =
  | 'songRequest'
  | 'soundEffects'
  | 'rewardRedemptions'
  | 'other';

export type CommandCatalog = Record<CommandCategory, Command[]>;

/** Normalise a raw JSON entry — handles both camelCase and PascalCase keys. */
function normalise(raw: Record<string, string>): Command {
  return {
    command: raw.command ?? raw.Command ?? '',
    description: raw.description ?? raw.Description ?? ''
  };
}

export function getSongRequestCommands(): Command[] {
  return (songRequestData as Record<string, string>[]).map(normalise);
}

export function getSoundEffectsCommands(): Command[] {
  return (soundEffectsData as Record<string, string>[]).map(normalise);
}

export function getRewardRedemptionCommands(): Command[] {
  return (rewardRedemptionsData as Record<string, string>[]).map(normalise);
}

export function getOtherCommands(): Command[] {
  return (otherCommandsData as Record<string, string>[]).map(normalise);
}

/** Returns all commands grouped by category. */
export function getAllCommands(): CommandCatalog {
  return {
    songRequest: getSongRequestCommands(),
    soundEffects: getSoundEffectsCommands(),
    rewardRedemptions: getRewardRedemptionCommands(),
    other: getOtherCommands()
  };
}

/** Returns commands for a specific category. */
export function getCommandsByCategory(category: CommandCategory): Command[] {
  const catalog = getAllCommands();
  return catalog[category];
}
