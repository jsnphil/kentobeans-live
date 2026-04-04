'use client';
import { Song } from '@/types';
import { History } from 'lucide-react';
import { Heading } from '@/components/ui';

export interface SongHistoryProps {
  songs: Song[];
}

export interface PlayedSong {
  title: string;
  requestedBy: string;
}

export function SongHistory({ songs }: SongHistoryProps) {
  return (
    <div className='bg-surface-primary rounded-xl border border-border-primary overflow-hidden'>
      <div className='px-4 py-3 border-b border-border-primary'>
        <Heading level={5} className='flex items-center gap-2'>
          <History size={16} /> Previously played
        </Heading>
      </div>
      <div className='divide-y divide-kento-dark-blue text-text-secondary'>
        {songs.map((song, index) => (
          <div
            key={index}
            className='flex justify-between items-center px-4 py-2 text-xs bg-background hover:bg-kento-light-blue hover:text-text-primary transition'
          >
            <span className='truncate pr-2'>
              <a
                href={`https://youtu.be/${song.id}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                {song.title}
              </a>
            </span>
            <span className='shrink-0'>{song.requestedBy}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
