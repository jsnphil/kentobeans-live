import { Shuffle, Star, Ticket } from 'lucide-react';

export default function QueueLegend() {
  return (
    <div className='flex items-center gap-6 px-6 py-3 bg-[#13131b] rounded-b-xl border-t border-slate-800 text-[10px] uppercase tracking-wider font-bold text-slate-500'>
      <div className='flex items-center gap-2'>
        <Star size={14} className='text-kento-green' />
        <span>Bumped</span>
      </div>
      <div className='flex items-center gap-2'>
        <Shuffle size={14} className='text-kento-orange' />
        <span>Shuffle Winner</span>
      </div>
      <div className='flex items-center gap-2'>
        <Ticket size={14} className='text-purple-400' />
        <span>Shuffle Entrant</span>
      </div>
    </div>
  );
}
