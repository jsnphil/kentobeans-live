import { Card, Label, Text } from '@/components/ui';
import type { QueueStatCardSkeletonProps } from '@/types/components';

export default function QueueStatCardSkeleton({
  title,
  subtitle
}: QueueStatCardSkeletonProps) {
  return (
    <Card variant='dark' size='md' className='text-center'>
      <Label>{title}</Label>

      {/* Value skeleton */}
      <div className='h-9 bg-border-primary/50 rounded w-12 mx-auto loading-skeleton my-1' />

      {subtitle && (
        <Text size='xs' color='muted' align='center'>
          {subtitle}
        </Text>
      )}
    </Card>
  );
}
