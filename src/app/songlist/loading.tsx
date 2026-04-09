import { CurrentSong } from '@/components/CurrentSong';
import QueueStatCardSkeleton from '@/components/QueueStatCardSkeleton';
import { SongHistory } from '@/components/SongHistory';
import { SongQueue } from '@/components/SongQueue';

export default function Loading() {
  return (
    <>
      {/* Main Content */}
      <main className='flex-1 p-6 overflow-y-auto'>
        <section className='grid grid-cols-1 md:grid-cols-5 gap-4 mb-8'>
          <QueueStatCardSkeleton title='Queue Status' />
          <QueueStatCardSkeleton title='Songs in Queue' />
          <QueueStatCardSkeleton title='Songs Played' />
          <QueueStatCardSkeleton title='Bean Bumps' />
          <QueueStatCardSkeleton title='Channel Point Bumps' />
        </section>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <div className='lg:col-span-2 space-y-6'>
            <CurrentSong song={undefined} />
            <SongQueue songs={[]} showRules={false} />
          </div>
          {/* Right Column: Contender & History */}
          <div className='space-y-6'>
            <div className='space-y-6'>
              <SongHistory songs={[]} />
            </div>

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
      </main>
    </>
  );
}
