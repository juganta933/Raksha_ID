"use client";

import { useEffect, useState } from "react";
import Router from "next/router";
import { useRouter } from "next/navigation";

import {
  ArrowRight,
  ArrowUpRight,
  Wallet,
  Shield,
  UserRound,
  Box,
  LockKeyhole,
  Sun,
  Moon,
  CheckCircle2,
  Fingerprint,
  Sparkles,
} from "lucide-react";

export default function Home() {
  const router=useRouter();
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load saved Raksa theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("raksa-theme");

    if (savedTheme === "dark") {
      setDark(true);
    } else {
      setDark(false);
    }

    const timer = setTimeout(() => {
      setMounted(true);
    }, 80);

    return () => clearTimeout(timer);
  }, []);

  // Save theme whenever it changes
  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem(
      "raksa-theme",
      dark ? "dark" : "light"
    );
  }, [dark, mounted]);

  return (
    <>
      {/* GLOBAL SMOOTH SCROLL + MOTION */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          scroll-behavior: smooth;
        }
        ::selection {
          background: rgba(0, 0, 0, 0.12);
        }
        @media (prefers-reduced-motion: reduce) {
          html,
          body {
            scroll-behavior: auto;
          }
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <main
        className={`min-h-screen overflow-hidden transition-all duration-[1000ms] ease-out ${
          mounted
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0"
        } ${
          dark
            ? "bg-[#111111] text-white"
            : "bg-[#fafafa] text-[#171717]"
        }`}
      >
        {/* =========================================================
            BACKGROUND
        ========================================================= */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          {/* Top glow */}
          <div
            className={`absolute left-1/2 top-[-250px] h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-3xl transition-all duration-700 ${
              dark ? "bg-white/[0.025]" : "bg-black/[0.025]"
            }`}
          />

          {/* Left glow */}
          <div
            className={`absolute left-[-200px] top-[500px] h-[450px] w-[450px] rounded-full blur-3xl ${
              dark
                ? "bg-blue-500/[0.025]"
                : "bg-blue-500/[0.035]"
            }`}
          />

          {/* Right glow */}
          <div
            className={`absolute right-[-200px] top-[350px] h-[450px] w-[450px] rounded-full blur-3xl ${
              dark
                ? "bg-purple-500/[0.025]"
                : "bg-purple-500/[0.025]"
            }`}
          />

          {/* Subtle grid */}
          <div
            className={`absolute inset-0 opacity-[0.025] ${
              dark ? "invert" : ""
            }`}
            style={{
              backgroundImage:
                "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        {/* =========================================================
            NAVBAR
        ========================================================= */}
        <nav
          className={`mx-auto flex h-[72px] max-w-[1250px] items-center justify-between border-b px-5 transition-colors duration-500 ${
            dark
              ? "border-white/10"
              : "border-black/[0.07]"
          }`}
        >
          {/* LOGO */}
          <a
            href="#home"
            className="group flex items-center gap-3"
          >
            <div
              className={`relative flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 group-hover:-rotate-3 group-hover:scale-105 ${
                dark
                  ? "border-white/15 bg-white/[0.04]"
                  : "border-black/10 bg-white"
              }`}
            >
              <svg
                viewBox="0 0 48 48"
                className="h-7 w-7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 4L39 12V29L24 44L9 29V12L24 4Z"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 32V16H24.5C29 16 31.5 18.1 31.5 21.4C31.5 24.2 29.8 26 27.2 26.7L33 32"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="35"
                  cy="13"
                  r="2.5"
                  fill="currentColor"
                />
                <path
                  d="M28 26L35 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="flex items-baseline gap-1">
              <span className="text-[20px] font-semibold tracking-[-0.04em]">
                Raksa
              </span>

              <span
                className={`text-[20px] font-medium tracking-[-0.04em] ${
                  dark
                    ? "text-white/50"
                    : "text-black/40"
                }`}
              >
                ID
              </span>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="group relative text-sm transition-opacity hover:opacity-60"
            >
              Home
              <span className="absolute -bottom-2 left-0 h-[1px] w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
            </a>

            <a
              href="#features"
              className="group relative text-sm opacity-60 transition-opacity hover:opacity-100"
            >
              Features
              <span className="absolute -bottom-2 left-0 h-[1px] w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
            </a>

            <a
              href="#about"
              className="group relative text-sm opacity-60 transition-opacity hover:opacity-100"
            >
              About
              <span className="absolute -bottom-2 left-0 h-[1px] w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          </div>

          {/* NAV RIGHT */}
          <div className="flex items-center gap-2">
            <button
            onClick={()=>router.push("/connection")}
            
              className={`hidden items-center gap-2 rounded-xl border px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 md:flex ${
                dark
                  ? "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
                  : "border-black/10 bg-white hover:bg-black/[0.025]"
              }`}
            >
              <Wallet size={15} />
              Connect Wallet
            </button>

            <button
              onClick={() => setDark((prev) => !prev)}
              aria-label="Toggle theme"
              className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 hover:-translate-y-0.5 ${
                dark
                  ? "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
                  : "border-black/10 bg-white hover:bg-black/[0.025]"
              }`}
            >
              {dark ? (
                <Sun size={16} />
              ) : (
                <Moon size={16} />
              )}
            </button>
          </div>
        </nav>

        {/* =========================================================
            HERO
        ========================================================= */}
        <section
          id="home"
          className={`relative mx-auto flex max-w-[1250px] flex-col items-center px-5 pb-20 pt-24 text-center transition-all duration-[1000ms] ease-out md:pt-32 ${
            mounted
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {/* LEFT FLOATING IDENTITY CARD */}
          <div
            className={`absolute left-[2%] top-[170px] hidden w-[190px] -rotate-6 rounded-2xl border p-5 text-left shadow-xl transition-all duration-500 hover:rotate-0 hover:-translate-y-2 lg:block ${
              dark
                ? "border-white/10 bg-white/[0.035] shadow-black/20"
                : "border-black/[0.08] bg-white/80 shadow-black/[0.04]"
            }`}
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white">
                <Fingerprint size={18} />
              </div>

              <span className="h-2 w-2 rounded-full bg-emerald-500" />
            </div>

            <p className="text-xs opacity-45">
              DIGITAL IDENTITY
            </p>

            <p className="mt-2 text-sm font-medium">
              Verified on-chain
            </p>

            <div className="mt-4 h-1 overflow-hidden rounded-full bg-current opacity-10">
              <div className="h-full w-[85%] rounded-full bg-current opacity-60" />
            </div>
          </div>

          {/* RIGHT FLOATING ASSET CARD */}
          <div
            className={`absolute right-[2%] top-[190px] hidden w-[205px] rotate-6 rounded-2xl border p-5 text-left shadow-xl transition-all duration-500 hover:rotate-0 hover:-translate-y-2 lg:block ${
              dark
                ? "border-white/10 bg-white/[0.035] shadow-black/20"
                : "border-black/[0.08] bg-white/80 shadow-black/[0.04]"
            }`}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs opacity-45">
                DIGITAL ASSETS
              </span>

              <Box size={16} className="opacity-50" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                  <Box size={15} />
                </div>

                <span className="text-xs">
                  NFT Assets
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <Shield size={15} />
                </div>

                <span className="text-xs">
                  Certificates
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                  <LockKeyhole size={15} />
                </div>

                <span className="text-xs">
                  Access Rights
                </span>
              </div>
            </div>
          </div>

          {/* MAIN LOGO */}
          <div className="mb-7 flex flex-col items-center">
            <div
              className={`group relative mb-6 flex h-[92px] w-[92px] items-center justify-center rounded-[28px] border shadow-sm transition-all duration-700 ease-out hover:-translate-y-2 hover:rotate-2 ${
                mounted
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-6 scale-90 opacity-0"
              } ${
                dark
                  ? "border-white/10 bg-white/[0.04]"
                  : "border-black/[0.08] bg-white"
              }`}
            >
              <svg
                viewBox="0 0 48 48"
                className="h-14 w-14 transition-transform duration-500 group-hover:scale-110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 4L39 12V29L24 44L9 29V12L24 4Z"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinejoin="round"
                />

                <path
                  d="M17 32V16H24.5C29 16 31.5 18.1 31.5 21.4C31.5 24.2 29.8 26 27.2 26.7L33 32"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <circle
                  cx="35"
                  cy="13"
                  r="2.5"
                  fill="currentColor"
                />

                <path
                  d="M28 26L35 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              <span className="absolute inset-0 rounded-[28px] ring-1 ring-black/0 transition-all duration-500 group-hover:ring-black/10" />
            </div>

            <p
              className={`mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] transition-all duration-700 delay-100 ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              } ${
                dark
                  ? "text-white/40"
                  : "text-black/35"
              }`}
            >
              RAKSA ID
            </p>

            {/* MAIN HEADING */}
            <h1
              className={`max-w-[850px] text-4xl font-semibold leading-[1.08] tracking-[-0.055em] transition-all duration-[900ms] delay-150 ease-out sm:text-5xl md:text-6xl ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              Blockchain-Based Identity
              <br />

              <span
                className={
                  dark
                    ? "text-white/50"
                    : "text-black/40"
                }
              >
                & Digital Asset Management
              </span>
            </h1>

            <p
              className={`mt-7 max-w-[570px] text-base leading-7 transition-all duration-[900ms] delay-200 md:text-lg ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              } ${
                dark
                  ? "text-white/45"
                  : "text-black/45"
              }`}
            >
              A secure platform for managing digital
              identity, permissions, and assets through a
              trusted blockchain infrastructure.
            </p>
          </div>

          {/* KEYWORDS */}
          <div
            className={`mb-10 flex flex-wrap items-center justify-center gap-2 text-xs transition-all duration-[900ms] delay-300 ${
              mounted
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            } ${
              dark
                ? "text-white/40"
                : "text-black/40"
            }`}
          >
            <span className="rounded-full border border-current/10 px-3 py-1.5">
              Secure Identity
            </span>

            <span>•</span>

            <span className="rounded-full border border-current/10 px-3 py-1.5">
              Access Control
            </span>

            <span>•</span>

            <span className="rounded-full border border-current/10 px-3 py-1.5">
              Digital Assets
            </span>
          </div>

          {/* PORTAL CARDS */}
          <div
            className={`grid w-full max-w-[850px] gap-4 transition-all duration-[900ms] delay-300 ease-out md:grid-cols-2 ${
              mounted
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            {/* ADMIN */}
            <button
            onClick={()=>router.push("connection")}
              className={`group relative overflow-hidden rounded-2xl border p-6 text-left transition-all duration-500 hover:-translate-y-1 ${
                dark
                  ? "border-white/10 bg-white/[0.035] hover:border-white/20 hover:bg-white/[0.06]"
                  : "border-black/[0.09] bg-white hover:border-black/20 hover:shadow-xl hover:shadow-black/[0.04]"
              }`}
            >
              <div className="relative z-10 flex items-center gap-5">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                    dark
                      ? "bg-white text-black"
                      : "bg-[#171717] text-white"
                  }`}
                >
                  <Shield size={23} />
                </div>

                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <h2 className="font-semibold tracking-tight">
                      Admin Portal
                    </h2>

                    <span
                      className={`rounded-full px-2 py-0.5 text-[9px] uppercase tracking-wider ${
                        dark
                          ? "bg-white/10 text-white/50"
                          : "bg-black/5 text-black/40"
                      }`}
                    >
                      Manage
                    </span>
                  </div>

                  <p
                    className={`text-sm leading-5 ${
                      dark
                        ? "text-white/40"
                        : "text-black/40"
                    }`}
                  >
                    Manage employees, assets and
                    permissions securely.
                  </p>
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-current/10 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-black group-hover:text-white">
                  <ArrowRight size={16} />
                </div>
              </div>

              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:scale-[2]" />
            </button>

            {/* EMPLOYEE */}
            <button
             onClick={()=>router.push("connection")}
              className={`group relative overflow-hidden rounded-2xl border p-6 text-left transition-all duration-500 hover:-translate-y-1 ${
                dark
                  ? "border-white/10 bg-white/[0.035] hover:border-white/20 hover:bg-white/[0.06]"
                  : "border-black/[0.09] bg-white hover:border-black/20 hover:shadow-xl hover:shadow-black/[0.04]"
              }`}
            >
              <div className="relative z-10 flex items-center gap-5">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 ${
                    dark
                      ? "bg-white/10 text-white"
                      : "bg-[#f0f0f0] text-[#171717]"
                  }`}
                >
                  <UserRound size={23} />
                </div>

                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <h2 className="font-semibold tracking-tight">
                      Employee Portal
                    </h2>

                    <span
                      className={`rounded-full px-2 py-0.5 text-[9px] uppercase tracking-wider ${
                        dark
                          ? "bg-white/10 text-white/50"
                          : "bg-black/5 text-black/40"
                      }`}
                    >
                      Access
                    </span>
                  </div>

                  <p
                    className={`text-sm leading-5 ${
                      dark
                        ? "text-white/40"
                        : "text-black/40"
                    }`}
                  >
                    View your identity, assets and
                    permissions.
                  </p>
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-current/10 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-black group-hover:text-white">
                  <ArrowRight size={16} />
                </div>
              </div>

              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-purple-500/10 blur-3xl transition-all duration-500 group-hover:scale-[2]" />
            </button>
          </div>

          {/* WALLET */}
          <div
            className={`mt-10 flex items-center gap-4 transition-all duration-[900ms] delay-500 ${
              mounted
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <div
              className={`h-px w-16 sm:w-28 ${
                dark
                  ? "bg-white/10"
                  : "bg-black/10"
              }`}
            />

            <div
              className={`flex items-center gap-2 text-xs ${
                dark
                  ? "text-white/40"
                  : "text-black/40"
              }`}
            >
              <Wallet size={14} />

              <span>
                Connect your wallet securely
              </span>
            </div>

            <div
              className={`h-px w-16 sm:w-28 ${
                dark
                  ? "bg-white/10"
                  : "bg-black/10"
              }`}
            />
          </div>
        </section>

        {/* =========================================================
            FEATURES
        ========================================================= */}
        <section
          id="features"
          className={`border-y ${
            dark
              ? "border-white/10"
              : "border-black/[0.07]"
          }`}
        >
          <div className="mx-auto max-w-[1250px] px-5 py-20">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p
                  className={`mb-3 text-xs font-semibold uppercase tracking-[0.25em] ${
                    dark
                      ? "text-white/35"
                      : "text-black/35"
                  }`}
                >
                  The foundation
                </p>

                <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                  Everything important,
                  <br />
                  in one place.
                </h2>
              </div>

              <p
                className={`max-w-[390px] text-sm leading-6 ${
                  dark
                    ? "text-white/40"
                    : "text-black/40"
                }`}
              >
                Raksa ID brings identity, access control
                and digital assets together into a secure
                ecosystem.
              </p>
            </div>

            <div className="grid gap-0 md:grid-cols-3">
              {/* IDENTITY */}
              <div
                className={`group border-b p-7 transition-all duration-500 md:border-b-0 md:border-r ${
                  dark
                    ? "border-white/10 hover:bg-white/[0.025]"
                    : "border-black/[0.08] hover:bg-black/[0.015]"
                }`}
              >
                <div
                  className={`mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-500 group-hover:-translate-y-1 ${
                    dark
                      ? "border-white/10 bg-white/[0.04]"
                      : "border-black/10 bg-white"
                  }`}
                >
                  <Fingerprint size={20} />
                </div>

                <p
                  className={`mb-2 text-xs uppercase tracking-[0.2em] ${
                    dark
                      ? "text-white/30"
                      : "text-black/30"
                  }`}
                >
                  01
                </p>

                <h3 className="mb-3 text-xl font-semibold tracking-tight">
                  Identity
                </h3>

                <p
                  className={`text-sm leading-6 ${
                    dark
                      ? "text-white/40"
                      : "text-black/40"
                  }`}
                >
                  Your digital identity is securely linked
                  to your wallet and verified through the
                  blockchain.
                </p>

                <div
                  className={`mt-7 flex items-center gap-2 text-xs font-medium opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 ${
                    dark
                      ? "text-white/60"
                      : "text-black/60"
                  }`}
                >
                  Secure by design
                  <ArrowUpRight size={13} />
                </div>
              </div>

              {/* ACCESS CONTROL */}
              <div
                className={`group border-b p-7 transition-all duration-500 md:border-b-0 md:border-r ${
                  dark
                    ? "border-white/10 hover:bg-white/[0.025]"
                    : "border-black/[0.08] hover:bg-black/[0.015]"
                }`}
              >
                <div
                  className={`mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-500 group-hover:-translate-y-1 ${
                    dark
                      ? "border-white/10 bg-white/[0.04]"
                      : "border-black/10 bg-white"
                  }`}
                >
                  <LockKeyhole size={20} />
                </div>

                <p
                  className={`mb-2 text-xs uppercase tracking-[0.2em] ${
                    dark
                      ? "text-white/30"
                      : "text-black/30"
                  }`}
                >
                  02
                </p>

                <h3 className="mb-3 text-xl font-semibold tracking-tight">
                  Access Control
                </h3>

                <p
                  className={`text-sm leading-6 ${
                    dark
                      ? "text-white/40"
                      : "text-black/40"
                  }`}
                >
                  Role-based permissions help ensure that
                  employees only access the resources
                  assigned to them.
                </p>

                <div
                  className={`mt-7 flex items-center gap-2 text-xs font-medium opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 ${
                    dark
                      ? "text-white/60"
                      : "text-black/60"
                  }`}
                >
                  Permission aware
                  <ArrowUpRight size={13} />
                </div>
              </div>

              {/* DIGITAL ASSETS */}
              <div
                className={`group p-7 transition-all duration-500 ${
                  dark
                    ? "hover:bg-white/[0.025]"
                    : "hover:bg-black/[0.015]"
                }`}
              >
                <div
                  className={`mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-500 group-hover:-translate-y-1 ${
                    dark
                      ? "border-white/10 bg-white/[0.04]"
                      : "border-black/10 bg-white"
                  }`}
                >
                  <Box size={20} />
                </div>

                <p
                  className={`mb-2 text-xs uppercase tracking-[0.2em] ${
                    dark
                      ? "text-white/30"
                      : "text-black/30"
                  }`}
                >
                  03
                </p>

                <h3 className="mb-3 text-xl font-semibold tracking-tight">
                  Digital Assets
                </h3>

                <p
                  className={`text-sm leading-6 ${
                    dark
                      ? "text-white/40"
                      : "text-black/40"
                  }`}
                >
                  Manage NFTs, certificates and other
                  digital assets assigned to identities and
                  wallets.
                </p>

                <div
                  className={`mt-7 flex items-center gap-2 text-xs font-medium opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 ${
                    dark
                      ? "text-white/60"
                      : "text-black/60"
                  }`}
                >
                  Digitally represented
                  <ArrowUpRight size={13} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            ABOUT
        ========================================================= */}
        <section
          id="about"
          className="mx-auto max-w-[1250px] px-5 py-24"
        >
          <div
            className={`relative overflow-hidden rounded-[28px] border p-8 md:p-12 ${
              dark
                ? "border-white/10 bg-white/[0.025]"
                : "border-black/[0.08] bg-white"
            }`}
          >
            <div className="relative z-10 grid items-center gap-12 md:grid-cols-[1fr_0.8fr]">
              <div>
                <div
                  className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${
                    dark
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }`}
                >
                  <Sparkles size={18} />
                </div>

                <h2 className="max-w-[600px] text-3xl font-semibold tracking-[-0.045em] md:text-4xl">
                  One identity.
                  <br />
                  One trusted ecosystem.
                </h2>

                <p
                  className={`mt-5 max-w-[570px] text-sm leading-7 md:text-base ${
                    dark
                      ? "text-white/40"
                      : "text-black/40"
                  }`}
                >
                  Raksa ID provides a simple way to manage
                  digital identities, employee permissions
                  and blockchain-based assets while keeping
                  access transparent and secure.
                </p>
              </div>

              <div className="space-y-3">
                {/* ITEM 1 */}
                <div
                  className={`flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300 hover:-translate-x-1 ${
                    dark
                      ? "border-white/10 bg-white/[0.025]"
                      : "border-black/[0.07] bg-[#fafafa]"
                  }`}
                >
                  <CheckCircle2
                    size={18}
                    className="text-emerald-500"
                  />

                  <div>
                    <p className="text-sm font-medium">
                      Wallet-based identity
                    </p>

                    <p
                      className={`text-xs ${
                        dark
                          ? "text-white/35"
                          : "text-black/35"
                      }`}
                    >
                      Your wallet represents your digital
                      identity.
                    </p>
                  </div>
                </div>

                {/* ITEM 2 */}
                <div
                  className={`flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300 hover:-translate-x-1 ${
                    dark
                      ? "border-white/10 bg-white/[0.025]"
                      : "border-black/[0.07] bg-[#fafafa]"
                  }`}
                >
                  <CheckCircle2
                    size={18}
                    className="text-emerald-500"
                  />

                  <div>
                    <p className="text-sm font-medium">
                      Controlled access
                    </p>

                    <p
                      className={`text-xs ${
                        dark
                          ? "text-white/35"
                          : "text-black/35"
                      }`}
                    >
                      Permissions determine what each user
                      can access.
                    </p>
                  </div>
                </div>

                {/* ITEM 3 */}
                <div
                  className={`flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300 hover:-translate-x-1 ${
                    dark
                      ? "border-white/10 bg-white/[0.025]"
                      : "border-black/[0.07] bg-[#fafafa]"
                  }`}
                >
                  <CheckCircle2
                    size={18}
                    className="text-emerald-500"
                  />

                  <div>
                    <p className="text-sm font-medium">
                      Verifiable assets
                    </p>

                    <p
                      className={`text-xs ${
                        dark
                          ? "text-white/35"
                          : "text-black/35"
                      }`}
                    >
                      Digital assets can be securely
                      associated with users.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`absolute -bottom-32 -right-32 h-80 w-80 rounded-full blur-3xl ${
                dark
                  ? "bg-white/[0.025]"
                  : "bg-black/[0.025]"
              }`}
            />
          </div>
        </section>

        {/* =========================================================
            FOOTER
        ========================================================= */}
        <footer
          className={`border-t ${
            dark
              ? "border-white/10"
              : "border-black/[0.07]"
          }`}
        >
          <div className="mx-auto flex max-w-[1250px] flex-col items-center justify-between gap-5 px-5 py-8 sm:flex-row">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-lg border ${
                  dark
                    ? "border-white/10"
                    : "border-black/10"
                }`}
              >
                <Shield size={15} />
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Raksa ID
                </p>

                <p
                  className={`text-[11px] ${
                    dark
                      ? "text-white/30"
                      : "text-black/30"
                  }`}
                >
                  Identity secured on-chain
                </p>
              </div>
            </div>

            <p
              className={`text-xs ${
                dark
                  ? "text-white/25"
                  : "text-black/30"
              }`}
            >
              Blockchain-Based Identity & Digital Asset
              Management
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}