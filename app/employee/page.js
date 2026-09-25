
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Boxes,
  Wallet,
  LockKeyhole,
  ChevronRight,
  UserRound,
  Building2,
  BriefcaseBusiness,
  Fingerprint,
  CircleDot,
  KeyRound,
  Laptop,
  Activity,
} from "lucide-react";

const employee = {
  name: "Arun Deori",
  employeeId: "EMP-1024",
  department: "Engineering",
  designation: "Software Engineer",
  organization: "XYZ Corporation",
  wallet: "0xA821...91F2",
  identityStatus: "Verified",
};

const stats = [
  {
    title: "Identity",
    value: "Verified",
    description: "Your organization identity",
    icon: CheckCircle2,
    href: "/employee/identity",
  },
  {
    title: "Active Permissions",
    value: "5",
    description: "Permissions currently active",
    icon: ShieldCheck,
    href: "/employee/permissions",
  },
  {
    title: "Digital Assets",
    value: "3",
    description: "Assets assigned to you",
    icon: Boxes,
    href: "/employee/assets",
  },
];

const recentActivity = [
  {
    title: "Asset Assigned",
    description: "Laptop XYZ assigned to you",
    time: "Today, 09:42 AM",
    icon: Boxes,
    status: "CONFIRMED",
  },
  {
    title: "Permission Granted",
    description: "Engineering Portal · READ + WRITE",
    time: "Today, 09:37 AM",
    icon: ShieldCheck,
    status: "CONFIRMED",
  },
  {
    title: "Identity Verified",
    description: "Your organization identity was verified",
    time: "Today, 09:30 AM",
    icon: CheckCircle2,
    status: "CONFIRMED",
  },
];

export default function EmployeeDashboard() {
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

  const muted = dark ? "text-white/45" : "text-black/45";
  const border = dark ? "border-white/10" : "border-black/10";

  return (
    <section
      className={`
        max-w-[1480px] mx-auto
        px-5 md:px-8 lg:px-12
        py-8 md:py-10
        ${dark ? "text-white" : "text-[#191919]"}
      `}
    >
      {/* =========================================================
          HEADER
      ========================================================= */}

      <header className="mb-10">
        <div className={`flex items-center gap-2 text-xs mb-7 ${muted}`}>
          <span>Employee Portal</span>

          <ChevronRight size={13} />

          <span className={dark ? "text-white/70" : "text-black/70"}>
            Dashboard
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-7">
          <div>
            <p
              className={`
                text-xs uppercase tracking-[0.16em] mb-3
                ${dark ? "text-white/35" : "text-black/35"}
              `}
            >
              Personal workspace
            </p>

            <h1 className="text-3xl md:text-[42px] font-semibold tracking-[-0.045em] leading-none">
              Welcome, {employee.name.split(" ")[0]}
            </h1>

            <p
              className={`
                mt-4 max-w-xl text-sm leading-6
                ${muted}
              `}
            >
              Your verified identity, organization permissions, and
              assigned digital assets in one place.
            </p>
          </div>

          {/* Wallet / identity */}
          <div
            className={`
              flex items-center gap-3
              px-3 py-2.5
              rounded-xl
              border
              transition-all duration-300
              hover:-translate-y-0.5
              ${
                dark
                  ? "border-white/10 bg-white/[0.035] hover:bg-white/[0.055]"
                  : "border-black/10 bg-white/70 hover:bg-white"
              }
            `}
          >
            <div
              className={`
                w-8 h-8 rounded-lg
                flex items-center justify-center
                ${dark ? "bg-white text-black" : "bg-black text-white"}
              `}
            >
              <Wallet size={15} />
            </div>

            <div>
              <div
                className={`text-[10px] uppercase tracking-[0.12em] ${muted}`}
              >
                Connected wallet
              </div>

              <div className="text-xs font-medium mt-0.5">
                {employee.wallet}
              </div>
            </div>

            <span className="relative ml-2 w-2 h-2 rounded-full bg-emerald-500">
              <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30" />
            </span>
          </div>
        </div>
      </header>

      {/* =========================================================
          MAIN WORKSPACE
      ========================================================= */}

      <div className={`border-t ${border}`}>
        {/* Identity workspace */}

        <div
          className={`
            grid lg:grid-cols-[1.45fr_0.55fr]
            border-b
            ${border}
          `}
        >
          {/* Main identity */}

          <Link
            href="/employee/identity"
            className={`
              group
              py-8 lg:py-10 lg:pr-12
              transition-all duration-400
              ${
                dark
                  ? "hover:bg-white/[0.025]"
                  : "hover:bg-black/[0.018]"
              }
            `}
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-start gap-5">
                <div
                  className={`
                    w-14 h-14 shrink-0
                    rounded-2xl
                    flex items-center justify-center
                    transition-all duration-400
                    group-hover:scale-105
                    group-hover:-rotate-2
                    ${
                      dark
                        ? "bg-white/[0.07]"
                        : "bg-black/[0.05]"
                    }
                  `}
                >
                  <Fingerprint size={25} strokeWidth={1.7} />
                </div>

                <div>
                  <div
                    className={`
                      text-xs uppercase tracking-[0.13em]
                      ${muted}
                    `}
                  >
                    Employee identity
                  </div>

                  <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.035em] mt-2">
                    {employee.name}
                  </h2>

                  <p className={`text-sm mt-2 ${muted}`}>
                    {employee.designation} · {employee.department}
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={18}
                className={`
                  shrink-0
                  transition-all duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  ${muted}
                `}
              />
            </div>

            {/* Identity metadata */}

            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              <MetaItem
                icon={UserRound}
                label="Employee ID"
                value={employee.employeeId}
                dark={dark}
              />

              <MetaItem
                icon={Building2}
                label="Organization"
                value={employee.organization}
                dark={dark}
              />

              <MetaItem
                icon={BriefcaseBusiness}
                label="Department"
                value={employee.department}
                dark={dark}
              />
            </div>
          </Link>

          {/* Verification */}

          <div
            className={`
              lg:border-l
              py-8 lg:py-10 lg:pl-10
              ${border}
            `}
          >
            <div className="flex items-center justify-between">
              <div
                className={`
                  text-xs uppercase tracking-[0.13em]
                  ${muted}
                `}
              >
                Verification
              </div>

              <CheckCircle2
                size={17}
                className="text-emerald-500"
              />
            </div>

            <div className="mt-7">
              <div className="flex items-center gap-2">
                <span className="relative w-2 h-2 rounded-full bg-emerald-500">
                  <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30" />
                </span>

                <span className="text-sm font-medium">
                  Identity verified
                </span>
              </div>

              <p className={`text-xs leading-5 mt-3 ${muted}`}>
                Your organization has verified this identity and
                controls the associated access.
              </p>
            </div>

            <Link
              href="/employee/identity"
              className={`
                inline-flex items-center gap-1.5
                text-xs font-medium
                mt-8
                transition-all duration-300
                ${
                  dark
                    ? "text-white/60 hover:text-white"
                    : "text-black/50 hover:text-black"
                }
              `}
            >
              View identity

              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* =========================================================
            ACCESS + ASSETS
        ========================================================= */}

        <div
          className={`
            grid lg:grid-cols-2
            border-b
            ${border}
          `}
        >
          {/* Permissions */}

          <Link
            href="/employee/permissions"
            className={`
              group
              py-8 lg:py-10
              lg:pr-12
              transition-all duration-400
              ${
                dark
                  ? "hover:bg-white/[0.025]"
                  : "hover:bg-black/[0.018]"
              }
            `}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`
                    w-9 h-9 rounded-xl
                    flex items-center justify-center
                    ${dark ? "bg-white/[0.07]" : "bg-black/[0.05]"}
                  `}
                >
                  <KeyRound size={17} />
                </div>

                <div>
                  <div className="text-sm font-medium">
                    Active Permissions
                  </div>

                  <div className={`text-xs mt-0.5 ${muted}`}>
                    Access currently assigned to you
                  </div>
                </div>
              </div>

              <ArrowUpRight
                size={17}
                className={`
                  transition-all duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  ${muted}
                `}
              />
            </div>

            <div className="mt-8 flex items-end gap-4">
              <span className="text-4xl font-semibold tracking-[-0.05em]">
                5
              </span>

              <span className={`text-xs pb-1 ${muted}`}>
                active permissions
              </span>
            </div>

            <div className="mt-7 flex gap-2">
              <PermissionTag text="READ" dark={dark} />
              <PermissionTag text="WRITE" dark={dark} />
              <PermissionTag text="PORTAL" dark={dark} />
            </div>
          </Link>

          {/* Assets */}

          <Link
            href="/employee/assets"
            className={`
              group
              py-8 lg:py-10
              lg:pl-12
              border-t lg:border-t-0 lg:border-l
              ${border}
              transition-all duration-400
              ${
                dark
                  ? "hover:bg-white/[0.025]"
                  : "hover:bg-black/[0.018]"
              }
            `}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`
                    w-9 h-9 rounded-xl
                    flex items-center justify-center
                    ${dark ? "bg-white/[0.07]" : "bg-black/[0.05]"}
                  `}
                >
                  <Boxes size={17} />
                </div>

                <div>
                  <div className="text-sm font-medium">
                    Digital Assets
                  </div>

                  <div className={`text-xs mt-0.5 ${muted}`}>
                    Assets assigned to your identity
                  </div>
                </div>
              </div>

              <ArrowUpRight
                size={17}
                className={`
                  transition-all duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  ${muted}
                `}
              />
            </div>

            <div className="mt-7 space-y-1">
              <AssetRow
                icon={Laptop}
                name="Laptop XYZ"
                type="NFT Asset"
                dark={dark}
              />

              <AssetRow
                icon={Boxes}
                name="Digital Asset"
                type="Assigned"
                dark={dark}
              />

              <AssetRow
                icon={Boxes}
                name="Digital Asset"
                type="Assigned"
                dark={dark}
              />
            </div>

            <div className={`text-xs mt-5 ${muted}`}>
              3 assets assigned
            </div>
          </Link>
        </div>

        {/* =========================================================
            ACTIVITY
        ========================================================= */}

        <div className="grid lg:grid-cols-[1.35fr_0.65fr]">
          {/* Activity */}

          <div className="py-8 lg:py-10 lg:pr-12">
            <div className="flex items-center justify-between mb-7">
              <div>
                <div className="flex items-center gap-2">
                  <Activity size={16} />

                  <h2 className="text-sm font-semibold">
                    Recent Activity
                  </h2>
                </div>

                <p className={`text-xs mt-1 ${muted}`}>
                  Recent actions associated with your identity
                </p>
              </div>

              <Link
                href="/employee/activity"
                className={`
                  text-xs flex items-center gap-1
                  transition-colors duration-300
                  ${
                    dark
                      ? "text-white/45 hover:text-white"
                      : "text-black/45 hover:text-black"
                  }
                `}
              >
                View all
                <ArrowUpRight size={13} />
              </Link>
            </div>

            <div>
              {recentActivity.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className={`
                      group flex items-start gap-4
                      py-4
                      border-t
                      ${border}
                      transition-all duration-300
                      ${
                        dark
                          ? "hover:bg-white/[0.02]"
                          : "hover:bg-black/[0.015]"
                      }
                    `}
                  >
                    <div
                      className={`
                        mt-0.5 w-8 h-8 shrink-0
                        rounded-lg
                        flex items-center justify-center
                        transition-transform duration-300
                        group-hover:scale-105
                        ${
                          dark
                            ? "bg-white/[0.06]"
                            : "bg-black/[0.045]"
                        }
                      `}
                    >
                      <Icon size={15} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium">
                        {item.title}
                      </div>

                      <div className={`text-xs mt-1 ${muted}`}>
                        {item.description}
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className={`text-[10px] ${muted}`}>
                        {item.time}
                      </div>

                      <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-emerald-600 dark:text-emerald-400">
                        <CircleDot size={9} />
                        {item.status}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Security */}

          <div
            className={`
              lg:border-l
              py-8 lg:py-10
              lg:pl-12
              ${border}
            `}
          >
            <div className="flex items-center gap-2">
              <LockKeyhole size={16} />

              <h2 className="text-sm font-semibold">
                Access control
              </h2>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-2">
                <ShieldCheck
                  size={16}
                  className="text-emerald-500"
                />

                <span className="text-sm font-medium">
                  Read-only access
                </span>
              </div>

              <p className={`text-xs leading-5 mt-3 ${muted}`}>
                Your organization controls your identity,
                permissions, and assigned assets.
              </p>

              <div
                className={`
                  mt-6 pt-5 border-t
                  ${border}
                `}
              >
                <div className={`text-[10px] uppercase tracking-[0.12em] ${muted}`}>
                  Asset transfers
                </div>

                <div className="text-sm font-medium mt-2">
                  Restricted
                </div>
              </div>

              <div
                className={`
                  mt-5 pt-5 border-t
                  ${border}
                `}
              >
                <div className={`text-[10px] uppercase tracking-[0.12em] ${muted}`}>
                  Permission changes
                </div>

                <div className="text-sm font-medium mt-2">
                  Organization controlled
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small footer status */}

      <div
        className={`
          flex items-center justify-between
          pt-6 text-[10px]
          ${muted}
        `}
      >
        <div className="flex items-center gap-2">
          <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Raksa ID · Employee workspace
        </div>

        <div>Connected to Polygon</div>
      </div>
    </section>
  );
}

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function MetaItem({ icon: Icon, label, value, dark }) {
  return (
    <div className="flex items-start gap-3">
      <Icon
        size={15}
        className={dark ? "text-white/35" : "text-black/35"}
      />

      <div>
        <div
          className={`
            text-[10px]
            uppercase
            tracking-[0.12em]
            ${dark ? "text-white/35" : "text-black/35"}
          `}
        >
          {label}
        </div>

        <div className="text-xs font-medium mt-1">
          {value}
        </div>
      </div>
    </div>
  );
}

function PermissionTag({ text, dark }) {
  return (
    <span
      className={`
        px-2.5 py-1.5
        rounded-lg
        text-[9px]
        tracking-[0.08em]
        border
        transition-all duration-300
        hover:-translate-y-0.5
        ${
          dark
            ? "border-white/10 bg-white/[0.04] text-white/55 hover:bg-white/[0.08]"
            : "border-black/10 bg-black/[0.025] text-black/50 hover:bg-black/[0.05]"
        }
      `}
    >
      {text}
    </span>
  );
}

function AssetRow({ icon: Icon, name, type, dark }) {
  return (
    <div
      className={`
        group/asset
        flex items-center gap-3
        py-3
        border-t
        ${
          dark
            ? "border-white/10"
            : "border-black/10"
        }
      `}
    >
      <div
        className={`
          w-8 h-8 rounded-lg
          flex items-center justify-center
          transition-all duration-300
          group-hover/asset:scale-105
          ${
            dark
              ? "bg-white/[0.06]"
              : "bg-black/[0.045]"
          }
        `}
      >
        <Icon size={14} />
      </div>

      <div className="flex-1">
        <div className="text-xs font-medium">
          {name}
        </div>

        <div
          className={`
            text-[10px] mt-0.5
            ${dark ? "text-white/35" : "text-black/35"}
          `}
        >
          {type}
        </div>
      </div>

      <ArrowUpRight
        size={13}
        className={`
          transition-all duration-300
          opacity-0
          group-hover/asset:opacity-100
          group-hover/asset:translate-x-0.5
          group-hover/asset:-translate-y-0.5
          ${dark ? "text-white/40" : "text-black/40"}
        `}
      />
    </div>
  );
}

