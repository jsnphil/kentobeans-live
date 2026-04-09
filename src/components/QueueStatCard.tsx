export interface QueueStatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  color?: string;
  testId?: string;
}

export default function QueueStatCard({
  title,
  value,
  subtitle,
  color = 'text-white',
  testId
}: QueueStatCardProps) {
  return (
    <div className='bg-kento-card-dark p-6 rounded-xl border border-slate-800 text-center' data-testid={testId}>
      <p className='text-xs text-slate-500 uppercase font-semibold' data-testid='queue-stat-card-title'>{title}</p>
      <p className={`text-3xl font-black my-1 ${color}`} data-testid='queue-stat-card-value'>{value}</p>
      {subtitle && <p className='text-xs text-slate-500' data-testid='queue-stat-card-subtitle'>{subtitle}</p>}
    </div>
  );
}
