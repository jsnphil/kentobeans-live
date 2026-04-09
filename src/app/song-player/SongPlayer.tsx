'use client';

import { useCallback, useRef, useState } from 'react';
import YouTube, { type YouTubeEvent, type YouTubePlayer } from 'react-youtube';
import { Music2, Pause, Play, SkipForward, Square } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Heading, Text } from '@/components/ui/Typography';
import { IconButton } from '@/components/ui/Button';
import type { Song } from '@/types/domain';
import { formatDuration } from '@/utils/utils';

export interface SongPlayerProps {
  currentSong?: Song;
  queue?: Song[];
}

type PlayerState = 'idle' | 'playing' | 'paused' | 'stopped';

export default function SongPlayer({
  currentSong,
  queue = []
}: SongPlayerProps) {
  const playerRef = useRef<YouTubePlayer | null>(null);
  const [playerState, setPlayerState] = useState<PlayerState>('idle');

  const nextSong = queue[0];

  const onReady = useCallback((event: YouTubeEvent) => {
    playerRef.current = event.target;
  }, []);

  const onPlay = useCallback(() => setPlayerState('playing'), []);
  const onPause = useCallback(() => setPlayerState('paused'), []);
  const onEnd = useCallback(() => setPlayerState('stopped'), []);

  const handlePlay = useCallback(() => {
    playerRef.current?.playVideo();
  }, []);

  const handlePause = useCallback(() => {
    playerRef.current?.pauseVideo();
  }, []);

  const handleStop = useCallback(() => {
    playerRef.current?.stopVideo();
    setPlayerState('stopped');
  }, []);

  const isPlaying = playerState === 'playing';

  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0 as const,
      controls: 0 as const,
      rel: 0 as const,
      modestbranding: 1 as const
    }
  };

  return (
    <div className='bg-surface-primary rounded-xl border border-border-primary overflow-hidden'>
      {/* Header */}
      <div className='p-4 border-b border-border-primary flex items-center gap-2'>
        <Music2 size={18} className='text-kento-light-blue' />
        <Heading level={5}>Song Player</Heading>
      </div>

      {/* Video Area */}
      <div className='relative bg-black' style={{ aspectRatio: '16 / 6.75' }}>
        {currentSong ? (
          <YouTube
            videoId={currentSong.id}
            opts={opts}
            onReady={onReady}
            onPlay={onPlay}
            onPause={onPause}
            onEnd={onEnd}
            className='w-full h-full'
            iframeClassName='w-full h-full'
            title={currentSong.title}
          />
        ) : (
          <div className='absolute inset-0 flex flex-col items-center justify-center gap-3 text-text-secondary'>
            <Music2 size={48} className='opacity-30' />
            <Text color='secondary' size='sm'>
              No song loaded
            </Text>
          </div>
        )}
      </div>

      {/* Song Info */}
      <div className='px-4 pt-4 pb-2'>
        {currentSong ? (
          <>
            <Heading level={5} className='truncate'>
              {currentSong.title}
            </Heading>
            <Text color='secondary' size='sm' className='truncate'>
              Requested by{' '}
              <span className='text-kento-purple font-semibold'>
                {currentSong.requestedBy}
              </span>
              <span className='ml-2 text-text-tertiary'>
                {formatDuration(currentSong.duration)}
              </span>
            </Text>
          </>
        ) : (
          <Text color='secondary' size='sm'>
            Nothing loaded
          </Text>
        )}
      </div>

      {/* Controls */}
      <div className='flex items-center justify-between px-4 py-3'>
        <div className='flex items-center gap-2'>
          {/* Play / Pause toggle */}
          {isPlaying ? (
            <IconButton
              variant='primary'
              size='lg'
              onClick={handlePause}
              aria-label='Pause'
              disabled={!currentSong}
            >
              <Pause size={20} fill='currentColor' />
            </IconButton>
          ) : (
            <IconButton
              variant='primary'
              size='lg'
              onClick={handlePlay}
              aria-label='Play'
              disabled={!currentSong}
            >
              <Play size={20} fill='currentColor' />
            </IconButton>
          )}

          {/* Stop */}
          <IconButton
            variant='secondary'
            size='lg'
            onClick={handleStop}
            aria-label='Stop'
            disabled={!currentSong}
          >
            <Square size={18} fill='currentColor' />
          </IconButton>
        </div>

        {/* Next Song */}
        <div className='flex items-center gap-3'>
          {nextSong && (
            <div className='text-right hidden sm:block'>
              <Text color='muted' size='xs'>
                Up next
              </Text>
              <Text size='sm' className='truncate max-w-[180px]'>
                {nextSong.title}
              </Text>
            </div>
          )}
          <IconButton
            variant='tertiary'
            size='lg'
            aria-label='Skip to next song'
            disabled={!nextSong}
          >
            <SkipForward size={18} />
          </IconButton>
        </div>
      </div>

      {/* Status bar */}
      <div className='px-4 py-2 bg-kento-dark-blue/60 border-t border-border-primary rounded-b-xl'>
        <Text size='xs' color='muted'>
          Status:{' '}
          <span
            className={
              playerState === 'playing'
                ? 'text-kento-green font-semibold uppercase'
                : playerState === 'paused'
                  ? 'text-kento-orange font-semibold uppercase'
                  : 'text-text-tertiary uppercase'
            }
          >
            {playerState}
          </span>
        </Text>
      </div>
    </div>
  );
}
