'use client';

import React, { useEffect } from 'react';
import { RefreshCw, Home, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Veiled Story Route Error:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <div className="max-w-md w-full p-6 sm:p-8 rounded-3xl bg-[#09131f] border border-[#A2C0E6]/30 shadow-2xl text-center space-y-4">
        <div className="w-14 h-14 rounded-2xl bg-[#1E3E62] border border-[#A2C0E6]/40 flex items-center justify-center text-[#A2C0E6] mx-auto">
          <RefreshCw className="w-7 h-7 animate-spin-slow" />
        </div>

        <div className="space-y-1.5">
          <h2 className="text-lg sm:text-xl font-bold text-white">
            Something went wrong
          </h2>
          <p className="text-xs text-slate-300">
            A temporary connection issue occurred. Tap below to reload the section smoothly.
          </p>
        </div>

        <div className="flex flex-col gap-2 pt-2">
          <button
            onClick={() => reset()}
            className="w-full py-3 rounded-xl bg-[#A2C0E6] hover:bg-white text-[#060d16] font-bold text-xs shadow transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="w-full py-2.5 rounded-xl bg-[#060d16] hover:bg-[#102238] border border-[#A2C0E6]/30 text-white text-xs transition flex items-center justify-center gap-2"
          >
            <Home className="w-3.5 h-3.5 text-[#A2C0E6]" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
