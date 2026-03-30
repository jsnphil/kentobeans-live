import type { QueueStatCardProps } from '@/types/components';
import { Card, Label, Heading, Text } from '@/components/ui';

export default function QueueStatCard({
  title,
  value,
  subtitle,
  color = 'text-white'
}: QueueStatCardProps) {
  return (
    <Card variant='dark' size='md' className='text-center'>
      <Label>{title}</Label>
      <Heading
        level={3}
        align='center'
        className={`my-1 text-3xl font-black ${color}`}
      >
        {value}
      </Heading>
      {subtitle && (
        <Text size='xs' color='muted' align='center'>
          {subtitle}
        </Text>
      )}
    </Card>
  );
}
