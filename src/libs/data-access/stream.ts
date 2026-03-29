import type { StreamInfo, Song } from '@/types/domain';

export async function getStreamInformation(): Promise<StreamInfo> {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // Mock queue data with Mistborn characters
  const mockQueue: Song[] = [
    {
      id: 'hT_nvWreIhg',
      title: 'Counting Stars',
      requestedBy: 'VinVenture',
      duration: 258,
      bumped: true
    },
    {
      id: 'ZmDBbnmKpqQ',
      title: 'Heroes',
      requestedBy: 'ElendVenture',
      duration: 312,
      winner: true
    },
    {
      id: 'ktvTqknDobU',
      title: 'Radioactive',
      requestedBy: 'KelsierTheSurvivor',
      duration: 186
    },
    {
      id: 'v2AC41dglnM',
      title: 'Thunder',
      requestedBy: 'OreSeur',
      duration: 187,
      bumped: true
    },
    {
      id: 'IhP3J0j9JmY',
      title: 'Believers',
      requestedBy: 'Sazed',
      duration: 203
    },
    {
      id: 'D_5LnkN_aqw',
      title: 'Enemy',
      requestedBy: 'MarshInquisitor',
      duration: 174,
      winner: true
    },
    {
      id: 'g8PrTzLaLHc',
      title: 'On Top of the World',
      requestedBy: 'Spook',
      duration: 192
    }
  ];

  // Mock song history with Stormlight and Mistborn characters
  const mockSongsPlayed: Song[] = [
    {
      id: 'ojydNb3Lrrs',
      title: 'Warriors',
      requestedBy: 'KaladinStormblessed',
      duration: 226
    },
    {
      id: 'aAkMkVFwAoo',
      title: 'Natural',
      requestedBy: 'ShallanDavar',
      duration: 189
    },
    {
      id: 'LBr7kECsjcQ',
      title: 'Centuries',
      requestedBy: 'AdolinKholin',
      duration: 232
    },
    {
      id: 'w8KQmps-Sog',
      title: 'The Resistance',
      requestedBy: 'DalinarKholin',
      duration: 346
    },
    {
      id: 'Sk8xspJPmEU',
      title: 'Stronger',
      requestedBy: 'NavaniKholin',
      duration: 231
    },
    {
      id: 'ALZHF5UqnU4',
      title: 'Born for This',
      requestedBy: 'SzethSonSonVallano',
      duration: 199
    },
    {
      id: '90WznJFdONs',
      title: 'Demons',
      requestedBy: 'JasnahKholin',
      duration: 177
    },
    {
      id: 'tAp9BKosZXs',
      title: 'Legends',
      requestedBy: 'WaxilliumLadrian',
      duration: 168
    },
    {
      id: 'OPf0YbXqDm0',
      title: 'Uptown Funk',
      requestedBy: 'WayneTheWild',
      duration: 269
    },
    {
      id: 'JBnV3gKbaPk',
      title: 'Titanium',
      requestedBy: 'SterisHarms',
      duration: 245
    }
  ];

  const data = await fetch(
    'https://h5pb2lum12.execute-api.us-east-1.amazonaws.com/dev/streams/current/queue',
    {
      headers: {
        Accept: 'application/json',
        'X-API-Key': process.env.API_KEY || ''
      }
    }
  );
  const streamInfo = await data.json();

  //   console.log('Stream Info:', JSON.stringify(streamInfo, null, 2));
  console.log('Stream Info:', streamInfo);

  return {
    status: 'CLOSED',
    currentSong: {
      id: 'ojydNb3Lrrs',
      title: 'Warriors',
      requestedBy: 'KaladinStormblessed',
      duration: 226,
      winner: true
    },
    ...streamInfo,
    // songs: [],
    bumpedSongs: mockQueue.filter((song) => song.bumped).length,
    beanBumpsAvailable: 3,
    channelPointBumpsAvailable: 3,
    songsPlayed: mockSongsPlayed
  } as StreamInfo;
}
