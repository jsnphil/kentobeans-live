// Component prop interfaces

export interface QueueStatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  color?: string;
}

export interface QueueStatCardSkeletonProps {
  title: string;
  subtitle?: string;
}

// export interface SongQueueEntryProps {
//   rank: number;
//   title: string;
//   requestedBy: string;
//   duration: number;
//   bumped?: boolean;
//   winner?: boolean;
//   id: string;
// }
