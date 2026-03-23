'use client';
import QueueStatCard from '@/components/QueueStatCard';
import { Play, Shuffle, Star, Ticket } from 'lucide-react';
import { ListMusic } from 'lucide-react';
import { History } from 'lucide-react';
import { SongQueueEntry } from '@/components/SongQueueEntry';

export default function SongListPage() {
  // TODO Call Kentobot-Core API for initial load

  return (
    <>
      {/* Main Content */}
      <main className='flex-1 p-6 overflow-y-auto'>
        {/* Header Stats */}
        <section className='grid grid-cols-1 md:grid-cols-5 gap-4 mb-8'>
          <QueueStatCard
            title='Queue Status'
            value='OPEN'
            subtitle='Accepting requests'
            color='text-green-500'
          />
          <QueueStatCard
            title='Songs in Queue'
            value='18'
            subtitle='5 Bumped'
          />
          <QueueStatCard
            title='Songs Played'
            value='45'
            subtitle='This Session'
          />

          <QueueStatCard title='Bean Bumps' value='3' />
          <QueueStatCard title='Channel Point Bumps' value='3' />

          {/* <div className='grid grid-cols-2 gap-4 md:gap-6'>
            <QueueStatCard title='Bean Bumps' value='3' subtitle='Available' />
            <QueueStatCard
              title='Channel Point Bumps'
              value='3'
              subtitle='Available'
            />
            {/* <MiniQueueStatCard title='Bean Bumps' value='7' />
            <MiniQueueStatCard title='Point Bumps' value='3' /> 
          </div> */}
        </section>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Left Column: Now Playing & Queue */}
          <div className='lg:col-span-2 space-y-6'>
            {/* Now Playing Hero */}
            <div className='bg-[#1a1a24] rounded-xl p-6 border border-slate-800'>
              <h3 className='text-sm uppercase tracking-wider text-slate-500 mb-4'>
                Now Playing
              </h3>
              <div className='flex items-center gap-6'>
                <div className='w-24 h-24 bg-gradient-to-br from-purple-900 to-black rounded-full flex items-center justify-center border-4 border-slate-800 animate-spin-slow'>
                  <Play fill='white' />
                </div>
                <div className='flex-1'>
                  <h2 className='text-2xl font-bold'>
                    Ethereal Voyage — Lo-Fi Dreamscape
                  </h2>
                  <p className='text-slate-400'>
                    Requested by:{' '}
                    <span className='text-purple-400 font-semibold'>
                      GalacticPatriot
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* Request Queue */}
            <div className='bg-[#1a1a24] rounded-xl border border-slate-800'>
              <div className='p-4 border-b border-slate-800 flex justify-between items-center'>
                <h3 className='font-bold flex items-center gap-2'>
                  <ListMusic size={18} /> Request Queue
                </h3>
                <button className='text-xs bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded text-white'>
                  View Rules
                </button>
              </div>
              <div className='divide-y divide-slate-800'>
                <SongQueueEntry
                  rank={1}
                  title='Midnight Drive'
                  requestedBy='User123'
                  duration={180}
                  bumped
                />
                <SongQueueEntry
                  rank={2}
                  title='Test Drive'
                  requestedBy='Kaladin'
                  duration={180}
                  bumped
                />
                <SongQueueEntry
                  rank={3}
                  title='Shuffle Winner'
                  requestedBy='LuckyGuy'
                  duration={210}
                  winner
                />
                <SongQueueEntry
                  rank={4}
                  title='Neon Sunset'
                  requestedBy='VaporWave'
                  duration={195}
                />
              </div>
              <div className='flex items-center gap-6 px-6 py-3 bg-[#13131b] rounded-b-xl border-t border-slate-800 text-[10px] uppercase tracking-wider font-bold text-slate-500'>
                <div className='flex items-center gap-2'>
                  <Star size={14} className='text-green-500' />
                  <span>Bumped</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Shuffle size={14} className='text-yellow-400' />
                  <span>Shuffle Winner</span>
                </div>
                <div className='flex items-center gap-2'>
                  {/* <div className='rotate-45 border-t-2 border-r-2 border-slate-500 w-2 h-2 mr-1'></div> */}
                  <Ticket size={14} className='text-purple-400' />
                  <span>Shuffle Entrant</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contender & History */}
          <div className='space-y-6'>
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

            <div className='bg-[#1a1a24] rounded-xl p-4 border border-slate-800'>
              <h3 className='text-sm font-bold mb-4 flex items-center gap-2'>
                <History size={16} /> History
              </h3>
              <div className='text-xs space-y-3 text-slate-400'>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className='flex justify-between'>
                    <span>Previous Track {i}</span>
                    <span>2:37am</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
