
"use client";

import { useEffect, useState } from "react";
import {
  Activity,
  ShieldCheck,
  KeyRound,
  Laptop,
  Wallet,
  CheckCircle2,
  Clock3,
} from "lucide-react";

const activities = [
  {
    id: 1,
    type: "asset",
    title: "Asset Assigned",
    description: "Laptop XYZ was assigned to your employee wallet.",
    asset: "Laptop XYZ",
    date: "23 September 2026",
    time: "10:42 AM",
    icon: Laptop,
  },
  {
    id: 2,
    type: "permission",
    title: "Permission Granted",
    description: "Engineering Portal access was granted.",
    asset: "READ, WRITE",
    date: "23 September 2026",
    time: "10:35 AM",
    icon: KeyRound,
  },
  {
    id: 3,
    type: "identity",
    title: "Identity Verified",
    description: "Your employee identity was successfully verified.",
    asset: "EMP-1024",
    date: "23 September 2026",
    time: "10:20 AM",
    icon: ShieldCheck,
  },
  {
    id: 4,
    type: "asset",
    title: "Asset Assigned",
    description: "Engineering Access Card was assigned to your wallet.",
    asset: "Engineering Access Card",
    date: "21 September 2026",
    time: "02:15 PM",
    icon: Laptop,
  },
  {
    id: 5,
    type: "permission",
    title: "Permission Granted",
    description: "Source Code Repository access was granted.",
    asset: "READ, WRITE",
    date: "20 September 2026",
    time: "11:30 AM",
    icon: KeyRound,
  },
  {
    id: 6,
    type: "wallet",
    title: "Wallet Connected",
    description: "Your wallet was connected to Raksa ID.",
    asset: "Polygon",
    date: "20 September 2026",
    time: "09:12 AM",
    icon: Wallet,
  },
];

export default function ActivityPage() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      setDark(localStorage.getItem("raksa-theme") === "dark");
    };

    updateTheme();

    window.addEventListener("raksa-theme-change", updateTheme);

    return () => {
      window.removeEventListener("raksa-theme-change", updateTheme);
    };
  }, []);

  const page = dark
    ? "text-white"
    : "text-black";

  const muted = dark
    ? "text-white/40"
    : "text-black/40";

  const secondary = dark
    ? "text-white/55"
    : "text-black/55";

  const border = dark
    ? "border-white/10"
    : "border-black/10";

  const surface = dark
    ? "bg-white/[0.025]"
    : "bg-white/70";

  const getIconStyle = (type) => {
    if (type === "asset") {
      return dark
        ? "bg-blue-500/10 text-blue-300"
        : "bg-blue-50 text-blue-600";
    }

    if (type === "permission") {
      return dark
        ? "bg-amber-500/10 text-amber-300"
        : "bg-amber-50 text-amber-600";
    }

    if (type === "identity") {
      return dark
        ? "bg-emerald-500/10 text-emerald-300"
        : "bg-emerald-50 text-emerald-600";
    }

    return dark
      ? "bg-purple-500/10 text-purple-300"
      : "bg-purple-50 text-purple-600";
  };

  return (
    <main className={`min-h-screen ${page}`}>
      <div className="mx-auto max-w-5xl px-6 py-10 md:px-10">

        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-2">
            <Activity size={17} className={muted} />
            <span
              className={`text-xs font-medium uppercase tracking-wider ${muted}`}
            >
              Employee Portal
            </span>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight">
            Activity
          </h1>

          <p className={`mt-2 max-w-2xl text-sm leading-6 ${secondary}`}>
            A record of important actions and changes associated with your
            identity, permissions, assets, and wallet.
          </p>
        </div>

        {/* Activity Summary */}
        <div
          className={`mb-10 grid grid-cols-1 overflow-hidden rounded-xl border md:grid-cols-3 ${border} ${surface}`}
        >
          <div className={`p-5 md:border-r ${border}`}>
            <p className={`text-xs ${muted}`}>Total activity</p>
            <p className="mt-2 text-2xl font-semibold">6</p>
          </div>

          <div className={`p-5 md:border-r ${border}`}>
            <p className={`text-xs ${muted}`}>Latest activity</p>
            <p className="mt-2 text-sm font-medium">
              23 September 2026
            </p>
          </div>

          <div className="p-5">
            <p className={`text-xs ${muted}`}>Account status</p>
            <div className="mt-2 flex items-center gap-2">
              <CheckCircle2 size={15} />
              <span className="text-sm font-medium">Active</span>
            </div>
          </div>
        </div>

        {/* Activity List */}
        <section>
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-base font-semibold">
                Recent activity
              </h2>
              <p className={`mt-1 text-xs ${muted}`}>
                Your latest account events
              </p>
            </div>

            <div className={`flex items-center gap-1 text-xs ${muted}`}>
              <Clock3 size={13} />
              Latest first
            </div>
          </div>

          <div className={`overflow-hidden rounded-xl border ${border}`}>
            {activities.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className={`group relative flex gap-4 p-5 transition-colors ${
                    index !== activities.length - 1
                      ? `border-b ${border}`
                      : ""
                  } ${
                    dark
                      ? "hover:bg-white/[0.025]"
                      : "hover:bg-black/[0.015]"
                  }`}
                >
                  {/* Timeline */}
                  <div className="relative flex flex-col items-center">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${getIconStyle(
                        item.type
                      )}`}
                    >
                      <Icon size={17} strokeWidth={1.8} />
                    </div>

                    {index !== activities.length - 1 && (
                      <div
                        className={`absolute top-10 h-[calc(100%+1.25rem)] w-px ${dark ? "bg-white/10" : "bg-black/10"}`}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row">
                      <div>
                        <h3 className="text-sm font-medium">
                          {item.title}
                        </h3>

                        <p className={`mt-1 text-sm leading-6 ${secondary}`}>
                          {item.description}
                        </p>
                      </div>

                      <div
                        className={`shrink-0 text-xs ${muted} sm:text-right`}
                      >
                        <p>{item.date}</p>
                        <p className="mt-1">{item.time}</p>
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-md border px-2 py-1 text-[11px] ${border} ${muted}`}
                      >
                        {item.asset}
                      </span>

                      <span
                        className={`rounded-md border px-2 py-1 text-[11px] capitalize ${border} ${muted}`}
                      >
                        {item.type}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Read Only Notice */}
        <div
          className={`mt-8 rounded-xl border p-5 ${border} ${
            dark ? "bg-white/[0.02]" : "bg-black/[0.015]"
          }`}
        >
          <div className="flex gap-3">
            <ShieldCheck
              size={18}
              className={`mt-0.5 shrink-0 ${muted}`}
            />

            <div>
              <p className="text-sm font-medium">
                Activity is read-only
              </p>

              <p className={`mt-1 text-xs leading-5 ${muted}`}>
                Activity records are generated by the Raksa ID system.
                Employees cannot modify or delete these records.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

