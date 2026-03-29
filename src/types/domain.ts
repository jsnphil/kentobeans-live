// Core data models for the streaming application

export interface Song {
  id: string;
  title: string;
  requestedBy: string;
  duration: number;
  bumped?: boolean;
  winner?: boolean;
}

export interface PlayedSong {
  title: string;
  requestedBy: string;
}

export interface StreamInfo {
  status: 'OPEN' | 'CLOSED';
  songs: Song[];
  bumpedSongs: number;
  currentSong?: Song;
  beanBumpsAvailable: number;
  channelPointBumpsAvailable: number;
  songsPlayed: Song[];
}
