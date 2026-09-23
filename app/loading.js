
"use client";

import { useEffect, useState } from "react";

export default function LoadingPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-white text-black">
      <div className="flex w-full max-w-sm flex-col items-center px-6">

        {/* Logo */}
        <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl border border-black/10 bg-white shadow-sm">
          <div className="h-5 w-5 rounded-md bg-black" />
        </div>

        {/* Brand */}
        <h1 className="text-xl font-semibold tracking-tight">
          Raksa ID
        </h1>

        <p className="mt-2 text-sm text-black/40">
          Secure identity infrastructure
        </p>

        {/* Loading */}
        <div className="mt-10 w-full">
          <div className="h-[2px] w-full overflow-hidden rounded-full bg-black/[0.06]">
            <div
              className="h-full rounded-full bg-black transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-[11px] text-black/35">
              Initializing
            </span>

            <span className="font-mono text-[11px] text-black/35">
              {progress}%
            </span>
          </div>
        </div>

        {/* Bottom text */}
        <p className="mt-16 text-[11px] text-black/25">
          Identity • Access • Assets
        </p>

      </div>
    </main>
  );
}

