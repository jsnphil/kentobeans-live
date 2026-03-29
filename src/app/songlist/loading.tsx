import QueueStatCardSkeleton from '@/components/QueueStatCardSkeleton';

export default function Loading() {
  return (
    <>
      {/* Main Content */}
      <main className='flex-1 p-6 overflow-y-auto'>
        <section className='grid grid-cols-1 md:grid-cols-5 gap-4 mb-8'>
          <QueueStatCardSkeleton title='Queue Status' />
          <QueueStatCardSkeleton title='Songs in Queue' />
          <QueueStatCardSkeleton title='Songs Played' />
          <QueueStatCardSkeleton title='Bean Bumps' subtitle='Available' />

          <QueueStatCardSkeleton
            title='Channel Point Bumps'
            subtitle='Available'
          />
        </section>
      </main>
    </>
  );
}
