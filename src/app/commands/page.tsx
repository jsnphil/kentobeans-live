import CommandTabs from '@/components/CommandTabs';

// Import data directly on the server
import SongRequestCommands from '@/data/songRequest.json';
import SoundEffectsCommands from '@/data/soundEffects.json';
import RewardRedemptionCommands from '@/data/rewardRedemptions.json';
import OtherCommands from '@/data/otherCommands.json';

export const metadata = {
  title: 'Stream Commands',
  description: 'List of all available chat commands and rewards.'
};

export default function CommandsPage() {
  return (
    <div className='bg-white min-h-screen'>
      <div className='max-w-7xl mx-auto px-6 py-16'>
        {/* You can add a Server-rendered Header here */}
        <header className='mb-12 text-center'>
          <h1 className='text-3xl font-bold text-slate-900'>
            Channel Commands
          </h1>
          <p className='text-slate-500 mt-2'>
            Interact with the stream using the commands below.
          </p>
        </header>

        {/* The Client Component handles the stateful parts */}
        <CommandTabs
          songRequestCmds={SongRequestCommands}
          soundEffectCmds={SoundEffectsCommands}
          rewardRedemptionCmds={RewardRedemptionCommands}
          otherCmds={OtherCommands}
        />
      </div>
    </div>
  );
}
