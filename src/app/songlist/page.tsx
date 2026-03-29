import { StreamSongList } from './StreamSongList';

export default function SongListPage() {
  // TODO Call Kentobot-Core API for initial load

  return (
    <>
      {/* Main Content */}
      <main className='flex-1 p-6 overflow-y-auto'>
        <StreamSongList />
      </main>
    </>
  );
}
