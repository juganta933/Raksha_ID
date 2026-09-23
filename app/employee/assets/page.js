"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowUpRight,
  Boxes,
  CheckCircle2,
  ChevronRight,
  Cpu,
  FileKey2,
  Laptop,
  LockKeyhole,
  MonitorSmartphone,
  ShieldCheck,
  Tag,
} from "lucide-react";

const assets = [
  {
    id: "asset-001",
    name: "Laptop XYZ",
    type: "Hardware",
    description: "Company-issued engineering laptop",
    tokenId: "#RAK-1001",
    assignedOn: "23 September 2026",
    status: "ACTIVE",
    icon: Laptop,
  },
  {
    id: "asset-002",
    name: "Engineering Access Card",
    type: "Access Credential",
    description: "Digital access credential for engineering facilities",
    tokenId: "#RAK-1002",
    assignedOn: "21 September 2026",
    status: "ACTIVE",
    icon: ShieldCheck,
  },
  {
    id: "asset-003",
    name: "Developer License",
    type: "Software License",
    description: "Organization developer software license",
    tokenId: "#RAK-1003",
    assignedOn: "20 September 2026",
    status: "ACTIVE",
    icon: FileKey2,
  },
];

export default function EmployeeAssets() {
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

  const card = dark
    ? "border-white/10 bg-white/[0.035]"
    : "border-black/10 bg-white/60";

  const muted = dark ? "text-white/40" : "text-black/40";
  const secondary = dark ? "text-white/55" : "text-black/55";

  return (
    <section className="px-5 md:px-8 lg:px-10 py-8 md:py-10 max-w-[1500px] mx-auto">
      {/* Header */}
      <div className="mb-10">
        <div className={`flex items-center gap-2 text-xs mb-3 ${muted}`}>
          <Link
            href="/employee"
            className="hover:opacity-100 transition"
          >
            Employee Portal
          </Link>

          <ChevronRight size={13} />

          <span>My Assets</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em]">
              My Assets
            </h1>

            <p className={`mt-3 text-sm md:text-base max-w-xl ${secondary}`}>
              View the digital and physical assets assigned to your
              organization wallet.
            </p>
          </div>

          <div
            className={`inline-flex items-center gap-3 self-start px-4 py-3 rounded-2xl border backdrop-blur-xl ${card}`}
          >
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                dark ? "bg-white/[0.07]" : "bg-black/[0.05]"
              }`}
            >
              <Boxes size={18} />
            </div>

            <div>
              <div
                className={`text-[10px] uppercase tracking-[0.15em] ${muted}`}
              >
                Assigned Assets
              </div>

              <div className="text-sm font-medium mt-0.5">
                {assets.length} Assets
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <SummaryCard
          icon={Boxes}
          title="Total Assets"
          value={assets.length}
          dark={dark}
        />

        <SummaryCard
          icon={CheckCircle2}
          title="Active"
          value="3"
          dark={dark}
        />

        <SummaryCard
          icon={Tag}
          title="Blockchain"
          value="Polygon"
          dark={dark}
        />
      </div>

      {/* Assets */}
      <div
        className={`rounded-[28px] border backdrop-blur-2xl overflow-hidden ${card}`}
      >
        <div
          className={`px-6 py-6 border-b ${
            dark ? "border-white/10" : "border-black/10"
          }`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                dark ? "bg-white/[0.07]" : "bg-black/[0.05]"
              }`}
            >
              <Boxes size={20} />
            </div>

            <div>
              <h2 className="font-semibold tracking-tight">
                Assigned Assets
              </h2>

              <p className={`text-xs mt-1 ${muted}`}>
                Assets currently associated with your wallet
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 md:p-5 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {assets.map((asset) => {
            const Icon = asset.icon;

            return (
              <Link
                key={asset.id}
                href={`/employee/assets/${asset.id}`}
                className={`group rounded-[22px] border p-5 transition-all duration-300 hover:-translate-y-1 ${
                  dark
                    ? "border-white/10 hover:border-white/20 hover:bg-white/[0.025]"
                    : "border-black/10 hover:border-black/20 hover:bg-black/[0.015]"
                }`}
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                      dark ? "bg-white/[0.07]" : "bg-black/[0.05]"
                    }`}
                  >
                    <Icon size={20} />
                  </div>

                  <ArrowUpRight
                    size={17}
                    className={`transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${muted}`}
                  />
                </div>

                {/* Asset Name */}
                <div className="mt-6">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">
                      {asset.name}
                    </h3>

                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </div>

                  <p className={`text-xs mt-2 leading-5 ${secondary}`}>
                    {asset.description}
                  </p>
                </div>

                {/* Type */}
                <div className="mt-6">
                  <div className={`text-[10px] uppercase tracking-[0.1em] ${muted}`}>
                    Asset Type
                  </div>

                  <div className="text-xs mt-1">
                    {asset.type}
                  </div>
                </div>

                {/* Bottom */}
                <div
                  className={`mt-5 pt-4 border-t flex items-center justify-between ${
                    dark ? "border-white/10" : "border-black/10"
                  }`}
                >
                  <div>
                    <div className={`text-[10px] ${muted}`}>
                      Token ID
                    </div>

                    <div className="font-mono text-xs mt-1">
                      {asset.tokenId}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className={`text-[10px] ${muted}`}>
                      Status
                    </div>

                    <div className="text-[10px] text-emerald-500 mt-1 uppercase tracking-[0.08em]">
                      {asset.status}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Wallet Ownership */}
      <div
        className={`mt-6 rounded-[24px] border backdrop-blur-xl p-6 ${card}`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div className="flex items-start gap-4">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                dark ? "bg-white/[0.06]" : "bg-black/[0.05]"
              }`}
            >
              <MonitorSmartphone size={18} />
            </div>

            <div>
              <h3 className="text-sm font-medium">
                Assets are assigned to your wallet
              </h3>

              <p className={`text-xs mt-1 leading-5 ${muted}`}>
                These assets are associated with your employee
                wallet and can only be managed by your organization.
              </p>
            </div>
          </div>

          <div
            className={`font-mono text-xs px-4 py-2.5 rounded-xl shrink-0 ${
              dark
                ? "bg-white/[0.05] text-white/60"
                : "bg-black/[0.04] text-black/60"
            }`}
          >
            0xA821...91F2
          </div>
        </div>
      </div>

      {/* Security Notice */}
      <div
        className={`mt-6 rounded-[22px] border backdrop-blur-xl px-5 py-4 flex items-start gap-3 ${
          dark
            ? "border-white/10 bg-white/[0.025]"
            : "border-black/10 bg-white/40"
        }`}
      >
        <LockKeyhole
          size={17}
          className={`mt-0.5 shrink-0 ${muted}`}
        />

        <div>
          <div className="text-xs font-medium">
            Assets are read-only
          </div>

          <p className={`text-xs mt-1 leading-5 ${muted}`}>
            Your organization controls the assignment and ownership
            of these assets. You can view the assets but cannot
            transfer, modify, or remove them.
          </p>
        </div>
      </div>
    </section>
  );
}

function SummaryCard({ icon: Icon, title, value, dark }) {
  return (
    <div
      className={`rounded-[22px] border p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
        dark
          ? "border-white/10 bg-white/[0.035] hover:border-white/20"
          : "border-black/10 bg-white/60 hover:border-black/20"
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
            dark ? "bg-white/[0.06]" : "bg-black/[0.05]"
          }`}
        >
          <Icon size={18} />
        </div>

        <div>
          <div
            className={`text-xs ${
              dark ? "text-white/45" : "text-black/45"
            }`}
          >
            {title}
          </div>

          <div className="text-xl font-semibold mt-0.5">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
}