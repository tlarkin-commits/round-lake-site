"use client";

import { useState, useEffect } from "react";

interface ChatLauncherProps {
  onOpen: () => void;
  isOpen: boolean;
}

export default function ChatLauncher({ onOpen, isOpen }: ChatLauncherProps) {
  const [showPulse, setShowPulse] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Start pulse animation after 3 seconds to draw attention
    const timer = setTimeout(() => setShowPulse(true), 3000);
    // Stop pulse after 8 seconds
    const stopTimer = setTimeout(() => setShowPulse(false), 8000);
    return () => { clearTimeout(timer); clearTimeout(stopTimer); };
  }, []);

  if (isOpen || hidden) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Label bubble */}
      {showPulse && (
        <div className="bg-white text-stone-800 text-sm font-medium px-3 py-2 rounded-full shadow-lg border border-stone-200 animate-fade-in whitespace-nowrap">
          Chat with Sarah →
        </div>
      )}
      
      {/* Main button */}
      <div className="relative">
        {showPulse && (
          <span className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-75" />
        )}
        <button
          onClick={onOpen}
          aria-label="Chat with Sarah, our leasing assistant"
          className="relative bg-amber-500 hover:bg-amber-400 text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
