import { formatDuration } from '@/utils/utils';
import { Shuffle, Star } from 'lucide-react';

export interface SongQueueEntryProps {
  rank: number;
  title: string;
  requestedBy: string;
  duration: number;
  bumped?: boolean;
  winner?: boolean;
}

export function SongQueueEntry({
  rank,
  title,
  requestedBy,
  duration,
  bumped,
  winner
}: SongQueueEntryProps) {
  return (
    <div className='flex items-center gap-4 p-4 hover:bg-slate-800/30 transition'>
      {bumped ? (
        <>
          <span className='text-slate-600 font-mono w-8'>{rank}</span>
          <Star size={16} className='text-kento-green' />
        </>
      ) : winner ? (
        <Shuffle size={16} className='text-kento-orange' />
      ) : (
        <div className='w-4' />
      )}
      <div className='flex-1'>
        <p className='font-semibold text-sm'>{title}</p>
        <p className='text-xs text-slate-500'>Requested by: {requestedBy}</p>
      </div>

      <span className='text-xs text-slate-400'>{formatDuration(duration)}</span>
    </div>
  );
}
