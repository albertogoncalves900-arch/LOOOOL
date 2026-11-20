import React, { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Crown, Shield, Swords } from 'lucide-react';
import { motion } from 'motion/react';
import { getChampionLanes, getRankedCountersForChampion } from '../data/lolMatchups';
import { DDragonChampionSummary, LaneTag } from '../utils/ddragon';
import { ChampionImage } from './ChampionImage';
import { CounterItemsBar } from './CounterItemsBar';
import { SkillCooldownsBar } from './SkillCooldownsBar';

interface CounterResultsViewProps {
  enemyChampion: DDragonChampionSummary;
  allChampions: DDragonChampionSummary[];
  version: string;
  onSelectChampion: (champ: DDragonChampionSummary) => void;
  onBackToPicker: () => void;
}

const LANE_LABEL: Record<LaneTag, string> = {
  TOP: 'Top',
  JUNGLE: 'Jungle',
  MID: 'Mid',
  ADC: 'ADC',
  SUPORTE: 'Suporte',
};

const RANK_STYLES: Record<
  1 | 2 | 3,
  { label: string; border: string; badgeBg: string; accentText: string }
> = {
  1: {
    label: '#1 Melhor Counter',
    border: 'border-[#A855F7] shadow-lg shadow-[#A855F7]/15',
    badgeBg: 'bg-[#A855F7] text-[#F8FAFC]',
    accentText: 'text-[#A855F7]',
  },
  2: {
    label: '#2 Counter Forte',
    border: 'border-[#38BDF8]/70',
    badgeBg: 'bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/50',
    accentText: 'text-[#38BDF8]',
  },
  3: {
    label: '#3 Opção Sólida',
    border: 'border-[#273449] hover:border-[#22C55E]/70',
    badgeBg: 'bg-[#22C55E]/15 text-[#22C55E] border border-[#22C55E]/40',
    accentText: 'text-[#22C55E]',
  },
};

export const CounterResultsView: React.FC<CounterResultsViewProps> = ({
  enemyChampion,
  allChampions,
  version,
  onSelectChampion,
  onBackToPicker,
}) => {
  const availableLanes = useMemo(
    () => getChampionLanes(enemyChampion),
    [enemyChampion]
  );

  const [selectedLane, setSelectedLane] = useState<LaneTag>(availableLanes[0] ?? 'MID');

  useEffect(() => {
    setSelectedLane(availableLanes[0] ?? 'MID');
  }, [enemyChampion.id, availableLanes]);

  const rankedCounters = useMemo(
    () => getRankedCountersForChampion(enemyChampion, selectedLane),
    [enemyChampion, selectedLane]
  );

  const championsById = useMemo(() => {
    const map = new Map<string, DDragonChampionSummary>();
    for (const c of allChampions) {
      map.set(c.id, c);
    }
    return map;
  }, [allChampions]);

  return (
    <motion.div
      key={enemyChampion.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-6"
    >
      {/* Navigation back */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBackToPicker}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#151E30] border border-[#273449] hover:border-[#38BDF8] text-sm font-medium text-[#F8FAFC] transition-colors whitespace-nowrap"
        >
          <ArrowLeft className="w-4 h-4 text-[#38BDF8]" />
          <span>Todos os campeões</span>
        </button>

        {availableLanes.length > 1 && (
          <div className="flex items-center gap-1 p-1 rounded-xl bg-[#101626] border border-[#273449]">
            {availableLanes.map((lane) => (
              <button
                key={lane}
                type="button"
                onClick={() => setSelectedLane(lane)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                  selectedLane === lane
                    ? 'bg-[#A855F7] text-[#F8FAFC]'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                }`}
              >
                {LANE_LABEL[lane]}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Selected Enemy Champion Hero + Skill Cooldowns */}
      <section className="rounded-2xl bg-[#151E30] border border-[#273449] overflow-hidden">
        <div className="relative h-44 sm:h-56">
          <ChampionImage
            championId={enemyChampion.id}
            name={enemyChampion.name}
            version={version}
            variant="splash"
            priority
            className="w-full h-full"
            imgClassName="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151E30] via-[#151E30]/60 to-transparent" />

          <div className="absolute bottom-4 left-5 right-5 flex flex-wrap items-end justify-between gap-4">
            <div className="flex items-center gap-4 min-w-0">
              <ChampionImage
                championId={enemyChampion.id}
                name={enemyChampion.name}
                version={version}
                priority
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl border-2 border-[#38BDF8] shadow-xl shrink-0"
              />
              <div className="min-w-0">
                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#38BDF8]">
                  <Swords className="w-3.5 h-3.5" />
                  <span>Adversário em {LANE_LABEL[selectedLane]}</span>
                </div>
                <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#F8FAFC] truncate">
                  {enemyChampion.name}
                </h2>
                <p className="text-xs sm:text-sm text-[#94A3B8] capitalize truncate">
                  {enemyChampion.title}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-6 border-t border-[#273449] space-y-5">
          <SkillCooldownsBar championId={enemyChampion.id} version={version} />
          <CounterItemsBar enemyChampion={enemyChampion} version={version} />
        </div>
      </section>

      {/* Ranked Top 3 Counters */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="font-display font-bold text-xl text-[#F8FAFC]">
              Ranking de Counters contra {enemyChampion.name}
            </h3>
            <p className="text-sm text-[#94A3B8]">
              Melhores escolhas para {LANE_LABEL[selectedLane]} e suas janelas de recarga.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {rankedCounters.map((pick, idx) => {
            const counterChamp = championsById.get(pick.championId) ?? {
              id: pick.championId,
              key: '',
              name: pick.championId,
              title: '',
              tags: [],
            };
            const style = RANK_STYLES[pick.rank];

            return (
              <motion.article
                key={`${enemyChampion.id}-${selectedLane}-${pick.championId}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.22,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`rounded-2xl bg-[#151E30] border overflow-hidden flex flex-col justify-between transition-colors ${style.border}`}
              >
                <div>
                  {/* Splash & Rank Header */}
                  <div className="relative h-36">
                    <ChampionImage
                      championId={counterChamp.id}
                      name={counterChamp.name}
                      version={version}
                      variant="splash"
                      priority
                      className="w-full h-full"
                      imgClassName="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151E30] via-[#151E30]/45 to-transparent" />

                    <div className="absolute top-3 left-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono-tabular font-bold ${style.badgeBg}`}
                      >
                        {pick.rank === 1 && <Crown className="w-3.5 h-3.5" />}
                        <span>{style.label}</span>
                      </span>
                    </div>
                  </div>

                  {/* Champion Info + Reason */}
                  <div className="p-5 pt-2 space-y-4">
                    <div className="flex items-center gap-3">
                      <ChampionImage
                        championId={counterChamp.id}
                        name={counterChamp.name}
                        version={version}
                        className="w-12 h-12 rounded-xl border border-[#273449] shrink-0"
                      />
                      <div className="min-w-0">
                        <h4 className="font-display font-bold text-xl text-[#F8FAFC] truncate">
                          {counterChamp.name}
                        </h4>
                        {counterChamp.title && (
                          <p className="text-xs text-[#94A3B8] capitalize truncate">
                            {counterChamp.title}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#101626] border border-[#273449] text-sm text-[#F8FAFC]/90 leading-relaxed flex items-start gap-2.5">
                      <Shield className={`w-4 h-4 shrink-0 mt-0.5 ${style.accentText}`} />
                      <span>{pick.reason}</span>
                    </div>

                    {/* Counter's Q/W/E/R Cooldowns */}
                    <SkillCooldownsBar
                      championId={counterChamp.id}
                      version={version}
                      compact
                    />
                  </div>
                </div>

                {/* Pivot Action */}
                <div className="px-5 pb-5 pt-1">
                  <button
                    type="button"
                    onClick={() => onSelectChampion(counterChamp)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#101626] border border-[#273449] hover:border-[#38BDF8] text-xs font-semibold text-[#F8FAFC] transition-colors"
                  >
                    <span>Ver counters de {counterChamp.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#38BDF8]" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
};
