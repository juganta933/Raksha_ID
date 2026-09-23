"use client";

import {
  ArrowLeft,
  ArrowUpRight,
  Compass,
  Home,
  Search,
  ShieldCheck,
} from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[15%] top-[15%] h-96 w-96 rounded-full bg-orange-500/[0.06] blur-[140px]" />

        <div className="absolute bottom-[10%] right-[10%] h-96 w-96 rounded-full bg-white/[0.025] blur-[140px]" />

      </div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Main */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">

        <div className="w-full max-w-2xl">

          {/* Top branding */}

          <div className="mb-12 flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">

                <ShieldCheck
                  size={18}
                  className="text-orange-400"
                />

              </div>

              <span className="text-sm font-semibold tracking-tight">
                Raksa ID
              </span>

            </div>

            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/25">
              Secure Identity Infrastructure
            </div>

          </div>


          {/* Main Card */}

          <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.035] p-8 shadow-2xl backdrop-blur-2xl sm:p-12">

            {/* Top line */}

            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent" />


            {/* Status */}

            <div className="mb-10 flex items-center gap-2">

              <span className="h-2 w-2 rounded-full bg-orange-400" />

              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/35">
                404 • Resource unavailable
              </span>

            </div>


            {/* 404 */}

            <div className="relative">

              <h1 className="select-none text-[8rem] font-semibold leading-none tracking-[-0.08em] text-white/[0.09] sm:text-[11rem]">

                404

              </h1>

              <div className="absolute left-1 top-1/2 flex -translate-y-1/2 items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl">

                  <Compass
                    size={25}
                    strokeWidth={1.5}
                    className="text-orange-400"
                  />

                </div>

                <div>

                  <div className="text-sm font-medium text-white/80">
                    Unknown location
                  </div>

                  <div className="mt-1 text-xs text-white/30">
                    This resource could not be found
                  </div>

                </div>

              </div>

            </div>


            {/* Heading */}

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">

              This page doesn't exist.

            </h2>


            <p className="mt-4 max-w-lg text-sm leading-7 text-white/40">

              The route you're trying to access isn't available in the
              Raksa ID environment. It may have been moved, removed,
              or never existed.

            </p>


            {/* Route box */}

            <div className="mt-8 rounded-2xl border border-white/[0.07] bg-black/30 p-4">

              <div className="mb-3 flex items-center gap-2">

                <Search
                  size={13}
                  className="text-white/25"
                />

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
                  Requested route
                </span>

              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3">

                <span className="font-mono text-xs text-orange-400">
                  →
                </span>

                <span className="truncate font-mono text-xs text-white/40">
                  /unknown/resource
                </span>

                <span className="ml-auto font-mono text-[10px] text-red-400/70">
                  404
                </span>

              </div>

            </div>


            {/* Buttons */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <button
                onClick={() => window.history.back()}
                className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white/60 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >

                <ArrowLeft
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />

                Go back

              </button>


              <button
                onClick={() => (window.location.href = "/")}
                className="group flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-orange-400"
              >

                <Home size={16} />

                Return home

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />

              </button>

            </div>


            {/* Bottom */}

            <div className="mt-10 border-t border-white/[0.07] pt-5">

              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-white/20">

                <span>
                  Raksa ID
                </span>

                <span>
                  Identity • Access • Assets
                </span>

              </div>

            </div>

          </div>


          {/* Footer */}

          <div className="mt-6 text-center">

            <span className="font-mono text-[10px] tracking-widest text-white/15">
              DECENTRALIZED IDENTITY INFRASTRUCTURE
            </span>

          </div>

        </div>

      </div>

    </main>
  );
}