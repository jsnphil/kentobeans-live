import type { Song } from '@/types/domain';
import { formatDuration } from '@/utils/utils';
import { Shuffle, Star } from 'lucide-react';

export interface SongQueueEntryProps {
  rank: number;
  songRequest: Song;
}

export function SongQueueEntry({ rank, songRequest }: SongQueueEntryProps) {
  return (
    <div className='group flex items-center gap-4 p-4 bg-background hover:bg-kento-light-blue transition'>
      {songRequest.bumped ? (
        <>
          <span className='text-slate-600 font-mono w-8'>{rank}</span>
          <Star size={16} className='text-kento-green' />
        </>
      ) : songRequest.winner ? (
        <Shuffle size={16} className='text-kento-orange' />
      ) : (
        <div className='w-4' />
      )}
      <div className='flex-1'>
        <a
          href={`https://youtu.be/${songRequest.id}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          {songRequest.title}
        </a>
        <p className='text-xs text-text-secondary group-hover:text-text-primary'>
          Requested by: {songRequest.requestedBy}
        </p>
      </div>

      <span className='text-xs text-text-secondary group-hover:text-text-primary'>
        {formatDuration(songRequest.duration)}
      </span>
    </div>
  );
}
