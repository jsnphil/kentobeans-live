export interface MiniQueueStatCardProps {
  title: string;
  value: string | number;
}

export function MiniQueueStatCard({ title, value }: MiniQueueStatCardProps) {
  return (
    <div className='bg-kento-card-dark p-4 rounded-xl border border-slate-800 flex flex-col items-center'>
      <p className='text-xs text-slate-500 uppercase font-semibold' data-testid='mini-stat-card-title'>{title}</p>
      <p className='text-lg font-bold mt-1' data-testid='mini-stat-card-value'>{value}</p>
      {/* Repeated title rendered as a bottom label per design */}
      <p className='text-[10px] text-slate-500 uppercase'>{title}</p>
    </div>
  );
}
