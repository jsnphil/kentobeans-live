'use client';
import { Song } from '@/types';
import { Play } from 'lucide-react';
import { Card, Label, Heading, Text, Flex } from '@/components/ui';

export function CurrentSong({ song }: { song?: Song }) {
  return (
    <Card variant='dark' size='lg'>
      <Label className='mb-4'>Now Playing</Label>

      <Flex align='center' gap='lg'>
        <div className='w-24 h-24 bg-gradient-to-br from-kento-purple to-black rounded-full flex items-center justify-center border-4 border-border-primary'>
          <Play fill='white' />
        </div>

        <div className='flex-1'>
          {!song && <Text color='secondary'>Nothing playing</Text>}

          {song && (
            <>
              <Heading level={2}>{song.title}</Heading>
              <Text color='secondary'>
                Requested by:{' '}
                <span className='text-kento-purple font-semibold'>
                  {song.requestedBy}
                </span>
              </Text>
            </>
          )}
        </div>
      </Flex>
    </Card>
  );
}
