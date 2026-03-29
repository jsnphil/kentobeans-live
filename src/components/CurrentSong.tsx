'use client';
import { Song } from '@/types';
import { Play } from 'lucide-react';

export function CurrentSong({ song }: { song?: Song }) {
  return (
    <>
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
            {!song && <p className='text-slate-400'>Nothing playing</p>}

            {song && (
              <>
                <h2 className='text-2xl font-bold'>{song.title}</h2>
                <p className='text-slate-400'>
                  Requested by:{' '}
                  <span className='text-purple-400 font-semibold'>
                    {song.requestedBy}
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
