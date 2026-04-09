import { Card, Label, Text } from '@/components/ui';

export interface QueueStatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  color?: string;
}

export default function QueueStatCard({
  title,
  value,
  subtitle,
  color = 'text-white'
}: QueueStatCardProps) {
  return (
    <Card variant='dark' size='lg' className='text-center'>
      <Label>{title}</Label>
      <p className={`text-3xl font-black my-1 ${color}`}>{value}</p>
      {subtitle && (
        <Text size='xs' color='muted' align='center'>
          {subtitle}
        </Text>
      )}
    </Card>
  );
}
