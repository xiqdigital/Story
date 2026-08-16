'use client';

import React, { useEffect } from 'react';
import { RefreshCw, Home, PhoneCall, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error cleanly in development or production console
    console.error('Veiled Story Global Application Error:', error);
  }, [error]);

  const handleHardRefresh = () => {
    if (typeof window !== 'undefined') {
      // Clear cache and hard reload to fetch fresh chunks
      window.location.reload();
    } else {
      reset();
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[#060d16] text-slate-100 flex items-center justify-center p-4 font-sans" suppressHydrationWarning>
        <div className="max-w-md w-full p-6 sm:p-8 rounded-3xl bg-[#09131f] border border-[#A2C0E6]/30 shadow-2xl text-center space-y-5">
          <div className="w-16 h-16 rounded-2xl bg-[#1E3E62]/80 border border-[#A2C0E6]/40 flex items-center justify-center text-[#A2C0E6] mx-auto shadow-lg">
            <AlertTriangle className="w-8 h-8 text-[#A2C0E6]" />
          </div>

          <div className="space-y-2">
            <h1 className="text-xl sm:text-2xl font-black text-white">
              Page Refresh Required
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We updated some assets to give you the fastest experience. Please tap below to refresh and load the latest version.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 pt-2">
            <button
              onClick={handleHardRefresh}
              className="w-full py-3.5 px-4 rounded-xl bg-[#A2C0E6] hover:bg-white text-[#060d16] font-bold text-xs sm:text-sm shadow-lg shadow-[#A2C0E6]/20 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Refresh Page Now</span>
            </button>

            <Link
              href="/"
              className="w-full py-3 px-4 rounded-xl bg-[#060d16] hover:bg-[#102238] border border-[#A2C0E6]/30 text-white font-medium text-xs transition flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4 text-[#A2C0E6]" />
              <span>Go to Homepage</span>
            </Link>

            <a
              href="https://wa.me/917905403546?text=Hi%20Vishal%20Sahani%2C%20I%20am%20visiting%20veiledstory.com%20and%20need%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] font-semibold text-xs transition flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>WhatsApp Support: +91 79054 03546</span>
            </a>
          </div>

          <div className="text-[10px] text-slate-500 font-mono">
            Error ID: {error?.digest || 'VS-CLIENT-ERR'}
          </div>
        </div>
      </body>
    </html>
  );
}
