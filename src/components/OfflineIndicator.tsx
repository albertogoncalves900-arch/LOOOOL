import React from 'react';
import { WifiOff } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div
      role="status"
      className="fixed bottom-4 left-4 right-4 sm:right-auto z-50 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#151E30] border border-amber-500/50 text-xs font-medium text-amber-200 shadow-xl"
    >
      <WifiOff className="w-4 h-4 text-amber-400 shrink-0" />
      <span>Sem conexão — exibindo dados salvos em cache.</span>
    </div>
  );
};
