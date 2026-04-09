import QueueStatCard from './QueueStatCard';

export interface QueueStatusProps {
  status: 'OPEN' | 'CLOSED';
  songsInQueue: number;
  bumpedSongs: number;
  songsPlayed: number;
  beanBumps: number;
  channelPointBumps: number;
}

export function QueueStatus({
  status,
  songsInQueue,
  bumpedSongs,
  songsPlayed,
  beanBumps,
  channelPointBumps
}: QueueStatusProps) {
  return (
    <section className='grid grid-cols-1 md:grid-cols-5 gap-4 mb-8'>
      <QueueStatCard
        title='Queue Status'
        value={status}
        subtitle={status === 'OPEN' ? 'Accepting requests' : ''}
        color={status === 'OPEN' ? 'text-green-500' : 'text-red-500'}
      />
      <QueueStatCard
        title='Songs in Queue'
        value={songsInQueue}
        subtitle={bumpedSongs ? `${bumpedSongs} Bumped` : ''}
      />
      <QueueStatCard
        title='Songs Played'
        value={songsPlayed}
        subtitle='This Stream'
      />

      <QueueStatCard
        title='Bean Bumps'
        value={beanBumps > 0 ? beanBumps : 'Sold Out'}
        subtitle={beanBumps > 0 ? 'Available' : ''}
      />
      <QueueStatCard
        title='Channel Point Bumps'
        value={channelPointBumps > 0 ? channelPointBumps : 'Sold Out'}
        subtitle={channelPointBumps > 0 ? 'Available' : ''}
      />
    </section>
  );
}
