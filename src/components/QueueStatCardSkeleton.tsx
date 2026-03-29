import type { QueueStatCardSkeletonProps } from '@/types/components';

export default function QueueStatCardSkeleton({
  title,
  subtitle
}: QueueStatCardSkeletonProps) {
  return (
    <div className='bg-[#1a1a24] p-5 rounded-xl border border-slate-800 text-center'>
      {/* Title */}
      <p className='text-xs text-slate-500 uppercase font-semibold'>{title}</p>

      {/* Value skeleton */}
      <div className='h-9 bg-slate-600/50 rounded w-12 mx-auto animate-pulse my-1'></div>

      {/* Subtitle */}
      {subtitle && <p className='text-xs text-slate-500'>{subtitle}</p>}
    </div>
  );
}
