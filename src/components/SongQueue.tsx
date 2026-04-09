'use client';
import { useEffect, useState } from 'react';
import { ListMusic, Shuffle, Star, Ticket } from 'lucide-react';
import { CurrentSong } from './CurrentSong';
import { SongQueueEntry } from './SongQueueEntry';
import RequestRulesModal from './RequestRulesModal';
import { Button, Heading } from '@/components/ui';
import type { Song } from '@/types/domain';

export interface SongQueueProps {
  currentSong?: Song;
  songs: Song[];
  showRules: boolean;
}

export function SongQueue({ currentSong, songs, showRules }: SongQueueProps) {
  const [rulesOpen, setRulesOpen] = useState(false);

  useEffect(() => {
    if (showRules) {
      setRulesOpen(true);
    }
  }, [showRules]);

  return (
    <>
      <RequestRulesModal
        isOpen={rulesOpen}
        onClose={() => setRulesOpen(false)}
      />

      <CurrentSong song={currentSong} />
      {/* Request Queue */}
      <div className='bg-surface-primary rounded-xl border border-border-primary'>
        <div className='p-4 border-b border-border-primary flex justify-between items-center'>
          <Heading level={5} className='flex items-center gap-2'>
            <ListMusic size={18} /> Request Queue
          </Heading>
          <Button
            variant='secondary'
            size='sm'
            onClick={() => setRulesOpen(true)}
          >
            Request rules
          </Button>
        </div>
        <div className='divide-y divide-kento-dark-blue'>
          {songs.map((song, index) => (
            <SongQueueEntry key={song.id} songRequest={song} rank={index + 1} />
          ))}
        </div>
        <div className='flex items-center gap-6 px-6 py-3 bg-kento-dark-blue rounded-b-xl border-t border-border-primary text-xs uppercase tracking-wider font-bold text-text-tertiary'>
          <div className='flex items-center gap-2'>
            <Star size={14} className='text-kento-green' />
            <span>Bumped</span>
          </div>
          <div className='flex items-center gap-2'>
            <Shuffle size={14} className='text-kento-orange' />
            <span>Shuffle Winner</span>
          </div>
          <div className='flex items-center gap-2'>
            {/* <div className='rotate-45 border-t-2 border-r-2 border-slate-500 w-2 h-2 mr-1'></div> */}
            <Ticket size={14} className='text-kento-purple' />
            <span>Shuffle Entrant</span>
          </div>
        </div>
      </div>
    </>
  );
}
