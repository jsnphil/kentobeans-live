export interface MiniQueueStatCardProps {
  title: string;
  value: string | number;
}

export function MiniQueueStatCard({ title, value }: MiniQueueStatCardProps) {
  return (
    <div className='bg-[#1a1a24] p-3 rounded-xl border border-slate-800 flex flex-col items-center'>
      <p className='text-xs text-slate-500 uppercase font-semibold'>{title}</p>
      <p className='text-lg font-bold mt-1'>{value}</p>
      <p className='text-[10px] text-slate-500 uppercase'>{title}</p>
    </div>
  );
}
