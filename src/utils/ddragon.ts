// Centralized Riot Games Data Dragon Service
// Fetches live patch versions, all LoL champions (pt_BR), and skill cooldowns.

export const DEFAULT_DDRAGON_VERSION = '16.23.1';
const DDRAGON_BASE = 'https://ddragon.leagueoflegends.com';

export type LaneTag = 'TOP' | 'JUNGLE' | 'MID' | 'ADC' | 'SUPORTE';

export interface DDragonChampionSummary {
  id: string;
  key: string;
  name: string;
  title: string;
  tags: string[];
}

export interface DDragonSpell {
  id: string;
  name: string;
  description: string;
  cooldownBurn: string;
  costBurn: string;
  rangeBurn: string;
  image: {
    full: string;
  };
}

export interface DDragonPassive {
  name: string;
  description: string;
  image: {
    full: string;
  };
}

export interface DDragonChampionDetail extends DDragonChampionSummary {
  passive: DDragonPassive;
  spells: DDragonSpell[];
}

const detailCache = new Map<string, DDragonChampionDetail>();
let cachedVersion: string | null = null;
let cachedChampionsList: DDragonChampionSummary[] | null = null;

export async function fetchLatestDDragonVersion(): Promise<string> {
  if (cachedVersion) return cachedVersion;
  try {
    const res = await fetch(`${DDRAGON_BASE}/api/versions.json`);
    if (!res.ok) return DEFAULT_DDRAGON_VERSION;
    const versions = (await res.json()) as string[];
    if (Array.isArray(versions) && typeof versions[0] === 'string') {
      cachedVersion = versions[0];
      return cachedVersion;
    }
  } catch {
    // Fallback silently
  }
  return DEFAULT_DDRAGON_VERSION;
}

export async function fetchAllDDragonChampions(
  version: string = DEFAULT_DDRAGON_VERSION
): Promise<DDragonChampionSummary[]> {
  if (cachedChampionsList) return cachedChampionsList;
  const res = await fetch(`${DDRAGON_BASE}/cdn/${version}/data/pt_BR/champion.json`);
  if (!res.ok) {
    throw new Error('Falha ao carregar lista de campeões do Data Dragon');
  }
  const json = (await res.json()) as {
    data: Record<string, DDragonChampionSummary>;
  };
  const list = Object.values(json.data).sort((a, b) =>
    a.name.localeCompare(b.name, 'pt-BR', { sensitivity: 'base' })
  );
  cachedChampionsList = list;
  return list;
}

export async function fetchChampionDetail(
  championId: string,
  version: string = DEFAULT_DDRAGON_VERSION
): Promise<DDragonChampionDetail | null> {
  const cacheKey = `${version}:${championId}`;
  const cached = detailCache.get(cacheKey);
  if (cached) return cached;

  try {
    const res = await fetch(
      `${DDRAGON_BASE}/cdn/${version}/data/pt_BR/champion/${championId}.json`
    );
    if (!res.ok) return null;
    const json = (await res.json()) as {
      data: Record<string, DDragonChampionDetail>;
    };
    const detail = json.data[championId] ?? Object.values(json.data)[0] ?? null;
    if (detail) {
      detailCache.set(cacheKey, detail);
    }
    return detail;
  } catch {
    return null;
  }
}

export function getChampionSquareUrl(
  championId: string,
  version: string = DEFAULT_DDRAGON_VERSION
): string {
  return `${DDRAGON_BASE}/cdn/${version}/img/champion/${championId}.png`;
}

export function getChampionSplashUrl(championId: string): string {
  return `${DDRAGON_BASE}/cdn/img/champion/splash/${championId}_0.jpg`;
}

export function getSpellIconUrl(
  imageFull: string,
  version: string = DEFAULT_DDRAGON_VERSION
): string {
  return `${DDRAGON_BASE}/cdn/${version}/img/spell/${imageFull}`;
}

export function getPassiveIconUrl(
  imageFull: string,
  version: string = DEFAULT_DDRAGON_VERSION
): string {
  return `${DDRAGON_BASE}/cdn/${version}/img/passive/${imageFull}`;
}

export function getItemIconUrl(
  itemId: string,
  version: string = DEFAULT_DDRAGON_VERSION
): string {
  return `${DDRAGON_BASE}/cdn/${version}/img/item/${itemId}.png`;
}

export function stripDDragonHtml(raw: string): string {
  return raw
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function normalizeSearchText(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}
