'use client';
import { ListMusic, Play, Shuffle, Star, Ticket } from 'lucide-react';
import { CurrentSong } from './CurrentSong';
import { SongQueueEntry } from './SongQueueEntry';
import type { Song } from '@/types/domain';

export interface SongQueueProps {
  currentSong?: Song;
  songs: Song[];
}

export function SongQueue({ currentSong, songs }: SongQueueProps) {
  return (
    <>
      <CurrentSong song={currentSong} />
      {/* Request Queue */}
      <div className='bg-[#1a1a24] rounded-xl border border-slate-800'>
        <div className='p-4 border-b border-slate-800 flex justify-between items-center'>
          <h3 className='font-bold flex items-center gap-2'>
            <ListMusic size={18} /> Request Queue
          </h3>
          <button
            type='button'
            className='text-xs bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded text-white transition-colors'
          >
            Request rules
          </button>
        </div>
        <div className='divide-y divide-slate-800'>
          {songs.map((song, index) => (
            <SongQueueEntry key={index} songRequest={song} rank={index + 1} />
          ))}
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
    </>
  );
}
