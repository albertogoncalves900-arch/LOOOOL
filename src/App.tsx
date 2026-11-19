import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import {
  DDragonChampionSummary,
  DEFAULT_DDRAGON_VERSION,
  fetchAllDDragonChampions,
  fetchLatestDDragonVersion,
  LaneTag,
  normalizeSearchText,
} from './utils/ddragon';
import { getChampionLanes } from './data/lolMatchups';
import { ChampionImage } from './components/ChampionImage';
import { CounterResultsView } from './components/CounterResultsView';

const LANE_FILTERS: Array<{ id: LaneTag | 'ALL'; label: string }> = [
  { id: 'ALL', label: 'Todos' },
  { id: 'TOP', label: 'Top' },
  { id: 'JUNGLE', label: 'Jungle' },
  { id: 'MID', label: 'Mid' },
  { id: 'ADC', label: 'ADC' },
  { id: 'SUPORTE', label: 'Suporte' },
];

export default function App() {
  const [version, setVersion] = useState<string>(DEFAULT_DDRAGON_VERSION);
  const [champions, setChampions] = useState<DDragonChampionSummary[]>([]);
  const [loadingRoster, setLoadingRoster] = useState(true);
  const [rosterError, setRosterError] = useState<string | null>(null);

  const [query, setQuery] = useState('');
  const [laneFilter, setLaneFilter] = useState<LaneTag | 'ALL'>('ALL');
  const [selectedChampion, setSelectedChampion] = useState<DDragonChampionSummary | null>(null);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        setLoadingRoster(true);
        const latest = await fetchLatestDDragonVersion();
        const list = await fetchAllDDragonChampions(latest);
        if (active) {
          setVersion(latest);
          setChampions(list);
          setRosterError(null);
        }
      } catch {
        if (active) {
          setRosterError(
            'Não foi possível carregar os campeões do Riot Data Dragon no momento.'
          );
        }
      } finally {
        if (active) setLoadingRoster(false);
      }
    }
    void load();
    return () => {
      active = false;
    };
  }, []);

  const filteredChampions = useMemo(() => {
    const q = normalizeSearchText(query);

    const list = champions.filter((champ) => {
      if (laneFilter !== 'ALL') {
        const lanes = getChampionLanes(champ);
        if (!lanes.includes(laneFilter)) return false;
      }

      if (!q) return true;
      const normName = normalizeSearchText(champ.name);
      const normId = normalizeSearchText(champ.id);
      const strippedName = normName.replace(/[^a-z0-9]/g, '');
      const strippedQuery = q.replace(/[^a-z0-9]/g, '');

      return (
        normName.includes(q) ||
        normId.includes(q) ||
        (strippedQuery.length > 0 && strippedName.includes(strippedQuery))
      );
    });

    if (!q) return list;

    // Prioritize exact and prefix matches when typing
    return [...list].sort((a, b) => {
      const aNorm = normalizeSearchText(a.name);
      const bNorm = normalizeSearchText(b.name);
      const aStarts = aNorm.startsWith(q) ? 1 : 0;
      const bStarts = bNorm.startsWith(q) ? 1 : 0;
      if (aStarts !== bStarts) return bStarts - aStarts;
      return a.name.localeCompare(b.name, 'pt-BR', { sensitivity: 'base' });
    });
  }, [champions, query, laneFilter]);

  useEffect(() => {
    setHighlightedIndex(0);
  }, [query, laneFilter]);

  const handleSelectChampion = (champ: DDragonChampionSummary) => {
    setSelectedChampion(champ);
    setQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown' && filteredChampions.length > 0) {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev + 1) % filteredChampions.length);
    } else if (e.key === 'ArrowUp' && filteredChampions.length > 0) {
      e.preventDefault();
      setHighlightedIndex(
        (prev) => (prev - 1 + filteredChampions.length) % filteredChampions.length
      );
    } else if (e.key === 'Enter' && filteredChampions.length > 0) {
      e.preventDefault();
      const target = filteredChampions[highlightedIndex] ?? filteredChampions[0];
      if (target) handleSelectChampion(target);
    } else if (e.key === 'Escape') {
      setQuery('');
      searchInputRef.current?.blur();
    }
  };

  return (
    <div className="min-h-screen bg-[#080B14] text-[#F8FAFC]">
      {/* Minimal Clean Top Bar */}
      <header className="sticky top-0 z-30 h-16 bg-[#080B14]/90 backdrop-blur-md border-b border-[#273449]">
        <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => {
              setSelectedChampion(null);
              setQuery('');
            }}
            className="flex items-center gap-3 text-left shrink-0 group"
          >
            <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8" aria-hidden="true">
              <defs>
                <linearGradient id="cLogo" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#38BDF8" />
                </linearGradient>
              </defs>
              <rect
                x="1.5"
                y="1.5"
                width="33"
                height="33"
                rx="9"
                fill="#101626"
                stroke="url(#cLogo)"
                strokeWidth="2"
              />
              <path
                d="M11.5 11.5L18 7.5L24.5 11.5V18.5C24.5 22.8 21.6 26.5 18 28.2C14.4 26.5 11.5 22.8 11.5 18.5V11.5Z"
                fill="url(#cLogo)"
                fillOpacity="0.22"
                stroke="url(#cLogo)"
                strokeWidth="1.8"
              />
              <path d="M14.5 17.5L18 14L21.5 17.5L18 21L14.5 17.5Z" fill="#F8FAFC" />
            </svg>
            <div>
              <span className="font-display font-extrabold text-lg tracking-wider text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                COUNTERS
              </span>
              <span className="hidden sm:inline-block ml-2.5 text-xs text-[#94A3B8]">
                Know Your Enemy. Win Your Lane.
              </span>
            </div>
          </button>

          <div className="flex items-center gap-3 shrink-0">
            <span className="font-mono-tabular text-xs text-[#94A3B8]">
              Patch {version}
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
        {/* Search Spotlight (Always instantly accessible) */}
        <section className="rounded-2xl bg-[#101626] border border-[#273449] p-5 sm:p-7 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F8FAFC] text-balance">
                Encontre o Counter Perfeito
              </h1>
              <p className="text-sm text-[#94A3B8] mt-1">
                Selecione o campeão pela foto abaixo ou comece a digitar o nome para ver
                ranking e cooldowns das skills.
              </p>
            </div>
            {champions.length > 0 && (
              <span className="font-mono-tabular text-xs text-[#38BDF8] shrink-0">
                {champions.length} campeões do LoL
              </span>
            )}
          </div>

          <div className="relative">
            <div className="flex items-center h-13 px-4 rounded-xl bg-[#080B14] border border-[#273449] focus-within:border-[#A855F7] focus-within:ring-2 focus-within:ring-[#A855F7]/20 transition-all">
              <Search className="w-5 h-5 text-[#94A3B8] mr-3 shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  if (selectedChampion && e.target.value.trim().length > 0) {
                    // Keep results visible until Enter/click, or filter suggestions live below
                  }
                }}
                onKeyDown={handleSearchKeyDown}
                placeholder="Digite o nome de um campeão... (ex: Yasuo, Aatrox, Lux, Jinx)"
                aria-label="Pesquisar campeão pelo nome"
                className="w-full bg-transparent text-base text-[#F8FAFC] placeholder-[#94A3B8]/65 focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery('');
                    searchInputRef.current?.focus();
                  }}
                  aria-label="Limpar busca"
                  className="p-1.5 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Instant dropdown suggestions when typing while viewing a selected champion */}
            {selectedChampion && query.trim().length > 0 && (
              <div className="mt-2 rounded-xl bg-[#151E30] border border-[#273449] shadow-2xl overflow-hidden max-h-72 overflow-y-auto">
                {filteredChampions.length === 0 ? (
                  <div className="p-4 text-sm text-[#94A3B8] text-center">
                    Nenhum campeão encontrado para &ldquo;{query}&rdquo;.
                  </div>
                ) : (
                  filteredChampions.slice(0, 8).map((champ, idx) => (
                    <button
                      key={champ.id}
                      type="button"
                      onClick={() => handleSelectChampion(champ)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                        idx === highlightedIndex
                          ? 'bg-[#A855F7]/20 text-[#F8FAFC]'
                          : 'hover:bg-[#101626]'
                      }`}
                    >
                      <ChampionImage
                        championId={champ.id}
                        name={champ.name}
                        version={version}
                        className="w-9 h-9 rounded-lg border border-[#273449] shrink-0"
                      />
                      <div className="min-w-0">
                        <div className="font-display font-semibold text-sm text-[#F8FAFC] truncate">
                          {champ.name}
                        </div>
                        <div className="text-xs text-[#94A3B8] capitalize truncate">
                          {champ.title}
                        </div>
                      </div>
                    </button>
                  ))
                )}
              </div>
            )}
          </div>
        </section>

        {/* Active Counter Results & Skill Cooldowns */}
        {selectedChampion ? (
          <CounterResultsView
            enemyChampion={selectedChampion}
            allChampions={champions}
            version={version}
            onSelectChampion={handleSelectChampion}
            onBackToPicker={() => setSelectedChampion(null)}
          />
        ) : (
          /* Full LoL Champion Photo Picker */
          <section className="space-y-4">
            {/* Lane Filters */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-1.5">
                {LANE_FILTERS.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setLaneFilter(tab.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                      laneFilter === tab.id
                        ? 'bg-[#A855F7] text-[#F8FAFC]'
                        : 'bg-[#151E30] border border-[#273449] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#38BDF8]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <span className="font-mono-tabular text-xs text-[#94A3B8]">
                {filteredChampions.length} exibidos
              </span>
            </div>

            {rosterError ? (
              <div className="p-8 rounded-2xl bg-[#151E30] border border-red-500/40 text-center space-y-2">
                <p className="text-sm font-semibold text-red-200">{rosterError}</p>
                <button
                  type="button"
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 rounded-lg bg-[#101626] border border-[#273449] text-xs font-semibold text-[#F8FAFC]"
                >
                  Tentar novamente
                </button>
              </div>
            ) : loadingRoster ? (
              <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-3">
                {Array.from({ length: 27 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl bg-[#151E30] border border-[#273449] animate-pulse"
                  />
                ))}
              </div>
            ) : filteredChampions.length === 0 ? (
              <div className="p-10 rounded-2xl bg-[#101626] border border-[#273449] text-center">
                <p className="text-sm font-semibold text-[#F8FAFC]">
                  Nenhum campeão encontrado para &ldquo;{query}&rdquo;.
                </p>
                <p className="text-xs text-[#94A3B8] mt-1">
                  Limpe a busca ou selecione outra rota para visualizar todos os campeões.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-2.5 sm:gap-3">
                {filteredChampions.map((champ, idx) => {
                  const isKeyboardFocus = query.trim().length > 0 && idx === highlightedIndex;
                  return (
                    <button
                      key={champ.id}
                      type="button"
                      onClick={() => handleSelectChampion(champ)}
                      className={`group rounded-xl p-1.5 bg-[#151E30] border text-center transition-all duration-150 hover:-translate-y-0.5 ${
                        isKeyboardFocus
                          ? 'border-[#A855F7] ring-2 ring-[#A855F7]/30'
                          : 'border-[#273449] hover:border-[#38BDF8]'
                      }`}
                    >
                      <div className="aspect-square w-full rounded-lg overflow-hidden">
                        <ChampionImage
                          championId={champ.id}
                          name={champ.name}
                          version={version}
                          className="w-full h-full"
                          imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                      <div className="mt-1.5 px-0.5 font-display font-semibold text-xs text-[#F8FAFC] group-hover:text-[#38BDF8] truncate transition-colors">
                        {champ.name}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}
