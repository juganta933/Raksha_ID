"use client";

import { useEffect } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  Home,
  RefreshCw,
  ShieldAlert,
  Terminal,
} from "lucide-react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-[15%] h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] h-80 w-80 rounded-full bg-red-500/10 blur-[130px]" />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl">
          {/* Status */}
          <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-orange-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange-400" />
            SYSTEM EXCEPTION DETECTED
          </div>

          {/* Main card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-2xl backdrop-blur-2xl sm:p-12">
            {/* Top line */}
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

            {/* Icon */}
            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-red-400/20 bg-red-500/10">
              <ShieldAlert
                size={38}
                strokeWidth={1.5}
                className="text-red-400"
              />
            </div>

            <div className="mb-3 font-mono text-sm text-white/40">
              ERROR_CODE: 500
            </div>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Something went
              <span className="block text-white/40">off-chain.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/55">
              Raksa ID encountered an unexpected system error while processing
              this request. Your identity and wallet remain untouched.
            </p>

            {/* Technical panel */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-4 font-mono text-xs">
              <div className="mb-3 flex items-center gap-2 text-white/40">
                <Terminal size={14} />
                SYSTEM LOG
              </div>

              <div className="space-y-2 text-white/50">
                <div>
                  <span className="text-orange-400">$</span> raksa.verify()
                </div>

                <div className="text-red-400">
                  ✕ Request could not be completed
                </div>

                <div className="text-white/30">
                  → Please retry the operation
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => reset()}
                className="group flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-orange-400"
              >
                <RefreshCw
                  size={17}
                  className="transition-transform group-hover:rotate-180"
                />
                Try Again
              </button>

              <button
                onClick={() => (window.location.href = "/")}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-white/70 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                <Home size={17} />
                Return Home
              </button>
            </div>

            {/* Footer */}
            <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5 text-xs text-white/25">
              <span>RAKSA ID</span>

              <span className="flex items-center gap-2">
                <AlertTriangle size={13} />
                Secure Identity Infrastructure
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}