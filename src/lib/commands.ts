import songRequestData from '@/data/songRequest.json';
import soundEffectsData from '@/data/soundEffects.json';
import rewardRedemptionsData from '@/data/rewardRedemptions.json';
import otherCommandsData from '@/data/otherCommands.json';

/** Raw shape of each entry in the command JSON files. */
interface RawCommand {
  command: string;
  description: string;
  aliases?: string[];
}

export type Command = {
  command: string;
  description: string;
  aliases?: string[];
};

export type CommandCategory =
  | 'songRequest'
  | 'soundEffects'
  | 'rewardRedemptions'
  | 'other';

export type CommandCatalog = Record<CommandCategory, Command[]>;

/** Normalise a raw JSON entry into a Command. */
function normalise(raw: RawCommand): Command {
  return {
    command: raw.command,
    description: raw.description,
    ...(raw.aliases ? { aliases: raw.aliases } : {})
  };
}

export function getSongRequestCommands(): Command[] {
  return (songRequestData as RawCommand[]).map(normalise);
}

export function getSoundEffectsCommands(): Command[] {
  return (soundEffectsData as RawCommand[]).map(normalise);
}

export function getRewardRedemptionCommands(): Command[] {
  return (rewardRedemptionsData as RawCommand[]).map(normalise);
}

export function getOtherCommands(): Command[] {
  return (otherCommandsData as RawCommand[]).map(normalise);
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
