'use client';
import { useEffect, useState } from 'react';
import { ListMusic, Shuffle, Star, Ticket } from 'lucide-react';
import { SongQueueEntry } from './SongQueueEntry';
import RequestRulesModal from './RequestRulesModal';
import { Button, Heading } from '@/components/ui';
import type { Song } from '@/types/domain';

export interface SongQueueProps {
  currentSong?: Song;
  songs: Song[];
  showRules: boolean;
  headerButton?: 'request-rules' | 'toggle-queue';
}

async function setQueueStatus(open: boolean): Promise<void> {
  // TODO: replace with WSS broadcast or server action once decided
  console.log('[SongQueue] queue status changed:', open ? 'OPEN' : 'CLOSED');
}

export function SongQueue({
  songs,
  showRules,
  headerButton = 'request-rules'
}: SongQueueProps) {
  const [rulesOpen, setRulesOpen] = useState(false);
  const [queueOpen, setQueueOpen] = useState(true);

  useEffect(() => {
    if (showRules) {
      setRulesOpen(true);
    }
  }, [showRules]);

  const handleToggleQueue = async () => {
    const next = !queueOpen;
    setQueueOpen(next);
    await setQueueStatus(next);
  };

  return (
    <>
      <RequestRulesModal
        isOpen={rulesOpen}
        onClose={() => setRulesOpen(false)}
      />

      {/* Request Queue */}
      <div className='bg-surface-primary rounded-xl border border-border-primary'>
        <div className='p-4 border-b border-border-primary flex justify-between items-center'>
          <Heading level={5} className='flex items-center gap-2'>
            <ListMusic size={18} /> Request Queue
          </Heading>
          {headerButton === 'request-rules' && (
            <Button
              variant='secondary'
              size='sm'
              onClick={() => setRulesOpen(true)}
            >
              Request rules
            </Button>
          )}
          {headerButton === 'toggle-queue' && (
            <button
              type='button'
              role='switch'
              aria-checked={queueOpen}
              onClick={handleToggleQueue}
              className='flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-kento-light-blue/50 focus:ring-offset-2 rounded-full'
            >
              <span className='text-xs font-semibold uppercase tracking-wider text-text-secondary'>
                {queueOpen ? 'Open' : 'Closed'}
              </span>
              <div
                className={`relative w-10 h-5 rounded-full transition-colors duration-200 ${queueOpen ? 'bg-kento-green' : 'bg-border-primary'}`}
              >
                <div
                  className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${queueOpen ? 'translate-x-5' : 'translate-x-0.5'}`}
                />
              </div>
            </button>
          )}
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
            <Ticket size={14} className='text-kento-purple' />
            <span>Shuffle Entrant</span>
          </div>
        </div>
      </div>
    </>
  );
}
