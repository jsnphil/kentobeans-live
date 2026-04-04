'use client';

import { useState } from 'react';
import { Info } from 'lucide-react';

interface Command {
  command?: string;
  Command?: string;
  description?: string;
  Description?: string;
  aliases?: string[];
}

interface CommandTabsProps {
  songRequestCmds: Command[];
  soundEffectCmds: Command[];
  rewardRedemptionCmds: Command[];
  otherCmds: Command[];
}

export default function CommandTabs({
  songRequestCmds,
  soundEffectCmds,
  rewardRedemptionCmds,
  otherCmds
}: CommandTabsProps) {
  const [commandState, setCommandState] = useState('songRequestCmds');

  const tabs = [
    { id: 'songRequestCmds', label: 'Song Requests', data: songRequestCmds },
    { id: 'soundEffectCmds', label: 'Sound Effects', data: soundEffectCmds },
    {
      id: 'rewardRedemptionCmds',
      label: 'Reward Redemption',
      data: rewardRedemptionCmds
    },
    { id: 'otherCmds', label: 'Other', data: otherCmds }
  ];

  const activeTab = tabs.find((t) => t.id === commandState);

  return (
    <>
      {/* Mobile Dropdown */}
      <div className='xl:hidden mb-8'>
        <select
          value={commandState}
          onChange={(e) => setCommandState(e.target.value)}
          className='w-full p-3 bg-white border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-indigo-500'
        >
          {tabs.map((tab) => (
            <option key={tab.id} value={tab.id}>
              {tab.label}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop Navigation */}
      <div className='hidden xl:flex justify-center mb-12'>
        <div className='inline-flex border border-slate-900 rounded-md overflow-hidden shadow-sm'>
          {tabs.map((tab) => (
            <button
              type='button'
              key={tab.id}
              onClick={() => setCommandState(tab.id)}
              className={`px-8 py-2 text-sm font-medium transition-colors border-r last:border-r-0 border-slate-900
                ${
                  commandState === tab.id
                    ? 'bg-[#1a237e] text-white'
                    : 'bg-white text-slate-900 hover:bg-gray-50'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Table Content */}
      <div className='min-h-[400px]'>
        <div className='overflow-x-auto'>
          <table className='w-full text-left border-collapse table-fixed'>
            <thead>
              <tr className='text-gray-500 uppercase text-xs tracking-wider border-b'>
                <th className='py-4 px-2 w-1/4 font-semibold'>Command</th>
                <th className='py-4 px-2 w-3/4 font-semibold'>Description</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-100'>
              {activeTab?.data.map((cmd, index) => (
                <tr
                  key={index}
                  className='hover:bg-gray-50/50 transition-colors'
                >
                  <td className='py-4 px-2 font-mono text-sm font-bold text-slate-700 overflow-hidden truncate'>
                    !{cmd.command}
                  </td>
                  <td className='py-4 px-2 text-sm text-slate-600 leading-relaxed overflow-hidden'>
                    {cmd.description}
                    {cmd.aliases && cmd.aliases.length > 0 && (
                      <div className='mt-1 text-xs text-slate-400'>
                        Aliases: {cmd.aliases.map((a) => `!${a}`).join(', ')}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Conditional Footer Info */}
        {commandState === 'soundEffectCmds' && (
          <div className='mt-8 p-4 bg-blue-50 rounded-lg flex items-center gap-3 text-blue-800 text-sm'>
            <Info />
            <p>
              All sound effects cost <strong>20 beans</strong> to redeem.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
