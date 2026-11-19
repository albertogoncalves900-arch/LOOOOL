import React, { useEffect, useState } from 'react';
import { Shield } from 'lucide-react';
import {
  DEFAULT_DDRAGON_VERSION,
  getChampionSplashUrl,
  getChampionSquareUrl,
} from '../utils/ddragon';

interface ChampionImageProps {
  championId: string;
  name: string;
  version?: string;
  variant?: 'square' | 'splash';
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}

export const ChampionImage: React.FC<ChampionImageProps> = ({
  championId,
  name,
  version = DEFAULT_DDRAGON_VERSION,
  variant = 'square',
  className = '',
  imgClassName = 'w-full h-full object-cover',
  priority = false,
}) => {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  const src =
    variant === 'splash'
      ? getChampionSplashUrl(championId)
      : getChampionSquareUrl(championId, version);

  useEffect(() => {
    setStatus('loading');
  }, [src]);

  const initials = name
    .trim()
    .split(/\s+/)
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className={`relative overflow-hidden bg-[#101626] ${className}`}>
      {status === 'loading' && (
        <div
          className="absolute inset-0 animate-pulse bg-gradient-to-br from-[#151E30] via-[#1C2740] to-[#101626]"
          aria-hidden="true"
        />
      )}

      {status === 'error' ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#151E30] to-[#080B14] text-[#94A3B8] select-none p-1.5">
          <Shield className="w-4 h-4 text-[#A855F7]/70 mb-0.5" />
          <span className="font-display font-bold text-[11px] text-[#F8FAFC]">
            {initials || '?'}
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={name}
          loading={priority ? 'eager' : 'lazy'}
          referrerPolicy="no-referrer"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={`${imgClassName} transition-opacity duration-200 ${
            status === 'loaded' ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
};
