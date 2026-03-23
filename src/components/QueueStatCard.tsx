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
    <div className='bg-[#1a1a24] p-5 rounded-xl border border-slate-800 text-center'>
      <p className='text-xs text-slate-500 uppercase font-semibold'>{title}</p>
      <p className={`text-3xl font-black my-1 ${color}`}>{value}</p>
      {subtitle && <p className='text-xs text-slate-500'>{subtitle}</p>}
    </div>
  );
}
