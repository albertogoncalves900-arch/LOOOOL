import React, { useMemo } from 'react';
import { ShieldCheck } from 'lucide-react';
import { getCounterItemsForChampion } from '../data/counterItems';
import { DDragonChampionSummary, getItemIconUrl } from '../utils/ddragon';

interface CounterItemsBarProps {
  enemyChampion: DDragonChampionSummary;
  version: string;
}

export const CounterItemsBar: React.FC<CounterItemsBarProps> = ({
  enemyChampion,
  version,
}) => {
  const items = useMemo(
    () => getCounterItemsForChampion(enemyChampion),
    [enemyChampion]
  );

  return (
    <div className="space-y-2.5 pt-4 border-t border-[#273449]">
      <div className="flex items-center justify-between gap-2 text-xs text-[#94A3B8]">
        <span className="inline-flex items-center gap-1.5 font-medium text-[#F8FAFC]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
          <span>3 Melhores Itens contra {enemyChampion.name}</span>
        </span>
        <span className="text-[11px] text-[#94A3B8]">Build situacional</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
        {items.map((item, idx) => (
          <div
            key={`${enemyChampion.id}-${item.id}`}
            className="flex items-start gap-3 p-3 rounded-xl bg-[#101626] border border-[#273449] hover:border-[#22C55E]/60 transition-colors"
          >
            <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-[#273449] shrink-0 bg-[#080B14]">
              <img
                src={getItemIconUrl(item.id, version)}
                alt={item.name}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-0 right-0 px-1 text-[10px] font-mono-tabular font-bold bg-[#080B14]/90 text-[#22C55E] leading-tight">
                #{idx + 1}
              </span>
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="font-display font-semibold text-xs text-[#F8FAFC] truncate">
                  {item.name}
                </span>
                <span className="font-mono-tabular text-[11px] text-amber-400 shrink-0">
                  {item.gold}g
                </span>
              </div>
              <p className="text-[11px] text-[#94A3B8] mt-0.5 leading-snug">
                {item.reason}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
