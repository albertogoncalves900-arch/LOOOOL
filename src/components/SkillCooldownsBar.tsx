import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import {
  DDragonChampionDetail,
  fetchChampionDetail,
  getPassiveIconUrl,
  getSpellIconUrl,
  stripDDragonHtml,
} from '../utils/ddragon';

interface SkillCooldownsBarProps {
  championId: string;
  version: string;
  compact?: boolean;
}

const SPELL_KEYS = ['Q', 'W', 'E', 'R'] as const;

export const SkillCooldownsBar: React.FC<SkillCooldownsBarProps> = ({
  championId,
  version,
  compact = false,
}) => {
  const [detail, setDetail] = useState<DDragonChampionDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSkillIdx, setSelectedSkillIdx] = useState<number | null>(null);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setSelectedSkillIdx(null);

    fetchChampionDetail(championId, version).then((data) => {
      if (active) {
        setDetail(data);
        setLoading(false);
      }
    });

    return () => {
      active = false;
    };
  }, [championId, version]);

  if (loading) {
    return (
      <div className="space-y-2">
        <div className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
          <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span>Carregando cooldowns das skills...</span>
        </div>
        <div className={`grid gap-2 ${compact ? 'grid-cols-4' : 'grid-cols-2 sm:grid-cols-5'}`}>
          {Array.from({ length: compact ? 4 : 5 }).map((_, i) => (
            <div
              key={i}
              className="h-14 rounded-lg bg-[#101626] border border-[#273449] animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  if (!detail) {
    return (
      <p className="text-xs text-[#94A3B8]">
        Cooldowns indisponíveis no momento para este campeão.
      </p>
    );
  }

  const skills = [
    ...(!compact
      ? [
          {
            keyLabel: 'P',
            name: detail.passive.name,
            iconUrl: getPassiveIconUrl(detail.passive.image.full, version),
            cooldown: 'Passiva',
            cost: '',
            description: stripDDragonHtml(detail.passive.description),
          },
        ]
      : []),
    ...detail.spells.slice(0, 4).map((spell, idx) => ({
      keyLabel: SPELL_KEYS[idx] ?? '?',
      name: spell.name,
      iconUrl: getSpellIconUrl(spell.image.full, version),
      cooldown: spell.cooldownBurn && spell.cooldownBurn !== '0' ? `${spell.cooldownBurn}s` : '—',
      cost: spell.costBurn && spell.costBurn !== '0' ? `${spell.costBurn} custo` : 'Sem custo',
      description: stripDDragonHtml(spell.description),
    })),
  ];

  const activeSkill = selectedSkillIdx !== null ? skills[selectedSkillIdx] : null;

  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between gap-2 text-xs text-[#94A3B8]">
        <span className="inline-flex items-center gap-1.5 font-medium text-[#F8FAFC]">
          <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span>Cooldowns das Skills</span>
        </span>
        <span className="text-[11px] text-[#94A3B8]">
          Clique em uma skill para ver detalhes
        </span>
      </div>

      <div
        className={`grid gap-2 ${
          compact ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-2 sm:grid-cols-5'
        }`}
      >
        {skills.map((skill, idx) => {
          const isSelected = selectedSkillIdx === idx;
          return (
            <button
              key={`${championId}-${skill.keyLabel}-${idx}`}
              type="button"
              onClick={() =>
                setSelectedSkillIdx((prev) => (prev === idx ? null : idx))
              }
              className={`flex items-center gap-2.5 p-2 rounded-lg border text-left transition-colors ${
                isSelected
                  ? 'bg-[#A855F7]/15 border-[#A855F7]'
                  : 'bg-[#101626] border-[#273449] hover:border-[#38BDF8]'
              }`}
            >
              <div className="relative w-9 h-9 rounded-md overflow-hidden border border-[#273449] shrink-0 bg-[#080B14]">
                <img
                  src={skill.iconUrl}
                  alt={skill.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 right-0 px-1 text-[10px] font-mono-tabular font-bold bg-[#080B14]/90 text-[#F8FAFC] leading-tight">
                  {skill.keyLabel}
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <div className="text-[11px] font-medium text-[#94A3B8] truncate">
                  {skill.name}
                </div>
                <div className="font-mono-tabular text-xs font-semibold text-[#38BDF8] truncate">
                  {skill.cooldown}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {activeSkill && (
        <div className="p-3 rounded-lg bg-[#101626] border border-[#273449] text-xs space-y-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-display font-bold text-sm text-[#F8FAFC]">
              {activeSkill.keyLabel} · {activeSkill.name}
            </span>
            <span className="font-mono-tabular text-[#38BDF8]">
              Recarga: {activeSkill.cooldown}
              {activeSkill.cost ? ` · ${activeSkill.cost}` : ''}
            </span>
          </div>
          <p className="text-[#94A3B8] leading-relaxed">{activeSkill.description}</p>
        </div>
      )}
    </div>
  );
};
