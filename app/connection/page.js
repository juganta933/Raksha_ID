"use client";

import { useEffect, useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  Wallet,
  ShieldCheck,
  UserRound,
  LockKeyhole,
  CheckCircle2,
  Sparkles,
  Copy,
  ExternalLink,
  Sun,
  Moon,
} from "lucide-react";

import Link from "next/link";

export default function ConnectPage() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

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

    setMounted(true);
  }, []);

  // Save theme whenever it changes
  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem(
      "raksa-theme",
      dark ? "dark" : "light"
    );
  }, [dark, mounted]);

  const connectWallet = async () => {
    if (!selectedRole) return;

    try {
      if (!window.ethereum) {
        alert("Please install MetaMask or another Web3 wallet.");
        return;
      }

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
        setConnected(true);
      }
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  };

  const shortenAddress = (address) => {
    if (!address) return "";

    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${
        dark
          ? "bg-[#090909] text-white"
          : "bg-[#f7f7f5] text-[#111]"
      }`}
    >
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-[-200px] left-[-150px] w-[500px] h-[500px] rounded-full blur-3xl ${
            dark
              ? "bg-white/[0.04]"
              : "bg-black/[0.04]"
          }`}
        />

        <div
          className={`absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] rounded-full blur-3xl ${
            dark
              ? "bg-white/[0.04]"
              : "bg-black/[0.04]"
          }`}
        />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-10 py-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
        >
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
              dark
                ? "bg-white"
                : "bg-black"
            }`}
          >
           <img
  src={dark ? "/logo-black.png" : "/logo-white.png"}
  alt="Raksa ID"
  className="h-6 w-6 object-contain"
/>
          </div>

          <span className="font-semibold tracking-tight">
            RAKSA ID
          </span>
        </Link>

        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={() => setDark((prev) => !prev)}
            aria-label="Toggle theme"
            className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-all duration-300 hover:-translate-y-0.5 ${
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

          <Link
            href="/"
            className={`flex items-center gap-2 text-sm transition ${
              dark
                ? "text-white/50 hover:text-white"
                : "text-black/50 hover:text-black"
            }`}
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Main */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-24">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-xl text-xs tracking-wide mb-7 ${
              dark
                ? "border-white/10 bg-white/[0.04] text-white/60"
                : "border-black/10 bg-white/60 text-black/60"
            }`}
          >
            <Sparkles size={14} />
            SECURE WALLET ACCESS
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-[1.05]">
            Enter the
            <span
              className={`${
                dark
                  ? "text-white/40"
                  : "text-black/40"
              }`}
            >
              {" "}Raksa ecosystem.
            </span>
          </h1>

          <p
            className={`mt-6 text-base md:text-lg leading-7 ${
              dark
                ? "text-white/50"
                : "text-black/50"
            }`}
          >
            Connect your blockchain wallet to access your identity,
            permissions and digital assets securely.
          </p>
        </div>

        {/* Role Selection */}
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mt-14">
          {/* Admin */}
          <button
            onClick={() => setSelectedRole("admin")}
            className={`
              text-left group relative overflow-hidden rounded-[28px]
              border p-7 md:p-8
              backdrop-blur-2xl
              transition-all duration-500
              ${
                selectedRole === "admin"
                  ? dark
                    ? "border-white bg-white/[0.08] scale-[1.01]"
                    : "border-black bg-black/[0.05] scale-[1.01]"
                  : dark
                    ? "border-white/10 bg-white/[0.035] hover:border-white/25 hover:-translate-y-1"
                    : "border-black/10 bg-white/60 hover:border-black/25 hover:-translate-y-1"
              }
            `}
          >
            <div className="flex items-start justify-between">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  dark
                    ? "bg-white text-black"
                    : "bg-black text-white"
                }`}
              >
                <ShieldCheck size={23} />
              </div>

              {selectedRole === "admin" && (
                <CheckCircle2 size={21} />
              )}
            </div>

            <h2 className="text-2xl font-semibold mt-8">
              Admin Portal
            </h2>

            <p
              className={`mt-3 text-sm leading-6 max-w-sm ${
                dark
                  ? "text-white/50"
                  : "text-black/50"
              }`}
            >
              Manage employees, assign permissions and control
              digital assets through blockchain-secured access.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Manage Employees",
                "Assign Assets",
                "Permissions",
              ].map((item) => (
                <span
                  key={item}
                  className={`px-3 py-1.5 rounded-full text-xs ${
                    dark
                      ? "bg-white/[0.06] text-white/60"
                      : "bg-black/[0.05] text-black/60"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="absolute right-7 bottom-7 opacity-20 group-hover:opacity-100 transition">
              <ArrowRight size={20} />
            </div>
          </button>

          {/* Employee */}
          <button
            onClick={() => setSelectedRole("employee")}
            className={`
              text-left group relative overflow-hidden rounded-[28px]
              border p-7 md:p-8
              backdrop-blur-2xl
              transition-all duration-500
              ${
                selectedRole === "employee"
                  ? dark
                    ? "border-white bg-white/[0.08] scale-[1.01]"
                    : "border-black bg-black/[0.05] scale-[1.01]"
                  : dark
                    ? "border-white/10 bg-white/[0.035] hover:border-white/25 hover:-translate-y-1"
                    : "border-black/10 bg-white/60 hover:border-black/25 hover:-translate-y-1"
              }
            `}
          >
            <div className="flex items-start justify-between">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  dark
                    ? "bg-white text-black"
                    : "bg-black text-white"
                }`}
              >
                <UserRound size={23} />
              </div>

              {selectedRole === "employee" && (
                <CheckCircle2 size={21} />
              )}
            </div>

            <h2 className="text-2xl font-semibold mt-8">
              Employee Portal
            </h2>

            <p
              className={`mt-3 text-sm leading-6 max-w-sm ${
                dark
                  ? "text-white/50"
                  : "text-black/50"
              }`}
            >
              Access your verified identity, assigned permissions
              and digital assets linked to your wallet.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "My Identity",
                "My Assets",
                "My Permissions",
              ].map((item) => (
                <span
                  key={item}
                  className={`px-3 py-1.5 rounded-full text-xs ${
                    dark
                      ? "bg-white/[0.06] text-white/60"
                      : "bg-black/[0.05] text-black/60"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="absolute right-7 bottom-7 opacity-20 group-hover:opacity-100 transition">
              <ArrowRight size={20} />
            </div>
          </button>
        </div>

        {/* Wallet Section */}
        <div className="max-w-4xl mx-auto mt-6">
          <div
            className={`rounded-[28px] border backdrop-blur-2xl p-7 md:p-8 ${
              dark
                ? "border-white/10 bg-white/[0.035]"
                : "border-black/10 bg-white/60"
            }`}
          >
            {!connected ? (
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-7">
                <div className="flex gap-4">
                  <div
                    className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center ${
                      dark
                        ? "bg-white/[0.07]"
                        : "bg-black/[0.06]"
                    }`}
                  >
                    <Wallet size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Connect your wallet
                    </h3>

                    <p
                      className={`text-sm mt-1 ${
                        dark
                          ? "text-white/45"
                          : "text-black/45"
                      }`}
                    >
                      {selectedRole
                        ? `Continue as ${
                            selectedRole === "admin"
                              ? "Admin"
                              : "Employee"
                          }`
                        : "Select a portal above first"}
                    </p>
                  </div>
                </div>

                <button
                  onClick={connectWallet}
                  disabled={!selectedRole}
                  className={`
                    px-6 py-3.5 rounded-xl flex items-center justify-center gap-2
                    text-sm font-medium
                    transition-all duration-300
                    ${
                      selectedRole
                        ? dark
                          ? "bg-white text-black hover:scale-[1.02]"
                          : "bg-black text-white hover:scale-[1.02]"
                        : dark
                          ? "bg-white/10 text-white/30 cursor-not-allowed"
                          : "bg-black/10 text-black/30 cursor-not-allowed"
                    }
                  `}
                >
                  <Wallet size={17} />
                  Connect Wallet
                </button>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                      dark
                        ? "bg-white text-black"
                        : "bg-black text-white"
                    }`}
                  >
                    <CheckCircle2 size={20} />
                  </div>

                  <div>
                    <p
                      className={`text-xs ${
                        dark
                          ? "text-white/40"
                          : "text-black/40"
                      }`}
                    >
                      WALLET CONNECTED
                    </p>

                    <p className="font-medium mt-1">
                      {shortenAddress(walletAddress)}
                    </p>
                  </div>
                </div>

                <Link
                  href={
                    selectedRole === "admin"
                      ? "https://raksa-id.vercel.app/"
                      : "/employee"
                  }
                  className={`px-6 py-3.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 hover:scale-[1.02] transition ${
                    dark
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }`}
                >
                  Enter{" "}
                  {selectedRole === "admin"
                    ? "Admin Portal"
                    : "Employee Portal"}
                  <ArrowRight size={17} />
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Security note */}
        <div className="flex justify-center mt-8">
          <div
            className={`flex items-center gap-2 text-xs ${
              dark
                ? "text-white/40"
                : "text-black/40"
            }`}
          >
            <LockKeyhole size={14} />
            Your private key never leaves your wallet
          </div>
        </div>

        {/* Flow */}
        <div className="max-w-3xl mx-auto mt-20">
          <div className="text-center mb-8">
            <p
              className={`text-xs tracking-widest ${
                dark
                  ? "text-white/35"
                  : "text-black/35"
              }`}
            >
              RAKSA ACCESS FLOW
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              ["01", "Choose Portal"],
              ["02", "Connect Wallet"],
              ["03", "Access Securely"],
            ].map(([number, title]) => (
              <div
                key={number}
                className={`rounded-2xl border backdrop-blur-xl p-5 ${
                  dark
                    ? "border-white/10 bg-white/[0.025]"
                    : "border-black/10 bg-white/40"
                }`}
              >
                <span
                  className={`text-xs ${
                    dark
                      ? "text-white/30"
                      : "text-black/30"
                  }`}
                >
                  {number}
                </span>

                <p className="text-sm font-medium mt-3">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`relative z-10 border-t px-6 md:px-10 py-7 ${
          dark
            ? "border-white/10"
            : "border-black/10"
        }`}
      >
        <div
          className={`max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-4 text-xs ${
            dark
              ? "text-white/40"
              : "text-black/40"
          }`}
        >
          <span>
            © 2026 Raksa ID
          </span>

          <span>
            Blockchain-Based Identity & Digital Asset Management
          </span>
        </div>
      </footer>
    </main>
  );
}