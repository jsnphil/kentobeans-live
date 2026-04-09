import { QueueStatus } from '@/components/QueueStatus';
import { SongHistory } from '@/components/SongHistory';
import { SongQueue } from '@/components/SongQueue';
import { getStreamInformation } from '@/libs/data-access/stream';
import SongPlayer from './SongPlayer';

export async function StreamSongPlayer() {
  const streamInfo = await getStreamInformation();

  console.log('Stream Info in Component:', JSON.stringify(streamInfo, null, 2));

  return (
    <>
      {/* Header Stats */}
      <QueueStatus
        status={streamInfo.status}
        songsInQueue={streamInfo.songs.length || 0}
        bumpedSongs={streamInfo.bumpedSongs || 0}
        songsPlayed={streamInfo.songsPlayed.length || 0}
        beanBumps={streamInfo.beanBumpsAvailable}
        channelPointBumps={streamInfo.channelPointBumpsAvailable}
      />

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* Left Column: Now Playing & Queue */}
        <div className='lg:col-span-2 space-y-6'>
          <SongPlayer
            currentSong={streamInfo.currentSong}
            queue={streamInfo.songs}
          />

          <SongQueue
            songs={streamInfo.songs}
            showRules={false}
            headerButton='toggle-queue'
          />
        </div>

        {/* Right Column: Contender & History */}
        <div className='space-y-6'>
          <SongHistory songs={streamInfo.songsPlayed} />

          {/* <div className='bg-[#1a1a24] rounded-xl p-4 border border-blue-900/30'>
            <h3 className='text-sm font-bold text-blue-400 mb-4'>
              Contender for Song of the Night
            </h3>
            <div className='space-y-3'>
              <div className='p-3 bg-blue-900/10 rounded-lg border border-blue-900/20'>
                <p className='font-bold'>1. Nebula Grooves</p>
                <p className='text-xs text-slate-400'>14 votes</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
