import React, { useState } from 'react';
import { Download, Share, X } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  if (isInstalled) {
    return null;
  }

  if (isInstallable) {
    return (
      <button
        type="button"
        onClick={install}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#A855F7] hover:bg-[#9333EA] text-xs font-semibold text-[#F8FAFC] transition-colors whitespace-nowrap shrink-0"
      >
        <Download className="w-3.5 h-3.5" />
        <span>Instalar App</span>
      </button>
    );
  }

  if (isIOS) {
    return (
      <>
        <button
          type="button"
          onClick={() => setShowIOSGuide(true)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#151E30] border border-[#273449] hover:border-[#38BDF8] text-xs font-semibold text-[#F8FAFC] transition-colors whitespace-nowrap shrink-0"
        >
          <Download className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span>Instalar no iOS</span>
        </button>

        {showIOSGuide && (
          <div
            onClick={() => setShowIOSGuide(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              className="w-full max-w-sm rounded-2xl bg-[#101626] border border-[#273449] p-6 shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display font-bold text-lg text-[#F8FAFC]">
                  Instalar no iPhone / iPad
                </h3>
                <button
                  type="button"
                  onClick={() => setShowIOSGuide(false)}
                  aria-label="Fechar"
                  className="p-1.5 rounded-lg text-[#94A3B8] hover:text-[#F8FAFC]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <ol className="space-y-2.5 text-sm text-[#94A3B8] leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="font-mono-tabular font-bold text-[#38BDF8]">1.</span>
                  <span>
                    Toque no botão <strong className="text-[#F8FAFC] inline-flex items-center gap-1"><Share className="w-3.5 h-3.5 text-[#38BDF8]" /> Compartilhar</strong> na barra do Safari.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono-tabular font-bold text-[#38BDF8]">2.</span>
                  <span>
                    Role para baixo e toque em <strong className="text-[#F8FAFC]">Adicionar à Tela de Início</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono-tabular font-bold text-[#38BDF8]">3.</span>
                  <span>
                    Confirme tocando em <strong className="text-[#F8FAFC]">Adicionar</strong> para abrir em tela cheia como app nativo.
                  </span>
                </li>
              </ol>

              <button
                type="button"
                onClick={() => setShowIOSGuide(false)}
                className="w-full py-2.5 rounded-xl bg-[#A855F7] hover:bg-[#9333EA] text-sm font-semibold text-[#F8FAFC] transition-colors"
              >
                Entendi
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
