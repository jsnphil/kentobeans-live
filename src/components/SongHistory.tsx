'use client';
import { Song } from '@/types';
import { History } from 'lucide-react';

export interface SongHistoryProps {
  songs: Song[];
}

export interface PlayedSong {
  title: string;
  requestedBy: string;
}

export function SongHistory({ songs }: SongHistoryProps) {
  return (
    <>
      <h3 className='text-sm font-bold mb-4 flex items-center gap-2'>
        <History size={16} /> Previously played
      </h3>
      <div className='text-xs space-y-3 text-slate-400'>
        {songs.map((song, index) => (
          <div
            key={index}
            className='flex justify-between hover:bg-slate-800/30 transition'
          >
            <span>
              <a
                href={`https://youtu.be/${song.id}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                {song.title}
              </a>
            </span>
            <span>{song.requestedBy}</span>
          </div>
        ))}
      </div>
    </>
  );
}
