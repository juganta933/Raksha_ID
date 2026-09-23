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
} from "lucide-react";

const employee = {
  name: "Rahul Sharma",
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

    // Initial theme
    updateTheme();

    // Listen for theme changes
    window.addEventListener("raksa-theme-change", updateTheme);

    return () => {
      window.removeEventListener("raksa-theme-change", updateTheme);
    };
  }, []);
  return (
    <section
      className={`px-5 md:px-8 lg:px-10 py-8 md:py-10 max-w-[1500px] mx-auto ${
        dark ? "text-white" : "text-[#111]"
      }`}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
        <div>
          <div
            className={`flex items-center gap-2 text-xs mb-3 ${
              dark ? "text-white/40" : "text-black/40"
            }`}
          >
            <span>Employee Portal</span>
            <ChevronRight size={13} />
            <span>Dashboard</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em]">
            Welcome, {employee.name.split(" ")[0]}
          </h1>

          <p
            className={`mt-3 text-sm md:text-base max-w-xl ${
              dark ? "text-white/50" : "text-black/50"
            }`}
          >
            Manage your verified identity, organization permissions,
            and assigned digital assets.
          </p>
        </div>

        {/* Identity Status */}
        <div
          className={`inline-flex items-center gap-3 self-start md:self-auto px-4 py-3 rounded-2xl border backdrop-blur-xl ${
            dark
              ? "border-white/10 bg-white/[0.04]"
              : "border-black/10 bg-white/60"
          }`}
        >
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center ${
              dark ? "bg-white/[0.08]" : "bg-black/[0.05]"
            }`}
          >
            <CheckCircle2 size={18} className="text-emerald-500" />
          </div>

          <div>
            <div
              className={`text-[10px] uppercase tracking-[0.15em] ${
                dark ? "text-white/40" : "text-black/40"
              }`}
            >
              Identity
            </div>

            <div className="text-sm font-medium mt-0.5">
              Verified
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <Link
              key={stat.title}
              href={stat.href}
              className={`group relative overflow-hidden rounded-[24px] border backdrop-blur-2xl p-6 transition-all duration-500 hover:-translate-y-1 ${
                dark
                  ? "border-white/10 bg-white/[0.035] hover:border-white/20"
                  : "border-black/10 bg-white/60 hover:border-black/20"
              }`}
            >
              {/* Glow */}
              <div
                className={`absolute -right-16 -top-16 w-32 h-32 rounded-full blur-2xl pointer-events-none ${
                  dark ? "bg-white/[0.04]" : "bg-black/[0.035]"
                }`}
              />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                      dark ? "bg-white/[0.07]" : "bg-black/[0.05]"
                    }`}
                  >
                    <Icon size={20} />
                  </div>

                  <ArrowUpRight
                    size={18}
                    className={`transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                      dark ? "text-white/30" : "text-black/30"
                    }`}
                  />
                </div>

                <div className="mt-7">
                  <div
                    className={`text-sm ${
                      dark ? "text-white/45" : "text-black/45"
                    }`}
                  >
                    {stat.title}
                  </div>

                  <div className="text-2xl font-semibold tracking-tight mt-1">
                    {stat.value}
                  </div>

                  <div
                    className={`text-xs mt-2 ${
                      dark ? "text-white/40" : "text-black/40"
                    }`}
                  >
                    {stat.description}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Wallet */}
      <div
        className={`rounded-[24px] border backdrop-blur-2xl p-6 md:p-7 mb-6 ${
          dark
            ? "border-white/10 bg-white/[0.035]"
            : "border-black/10 bg-white/60"
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                dark ? "bg-white" : "bg-black"
              }`}
            >
              <Wallet
                size={21}
                className={dark ? "text-black" : "text-white"}
              />
            </div>

            <div>
              <div
                className={`text-xs uppercase tracking-[0.14em] ${
                  dark ? "text-white/40" : "text-black/40"
                }`}
              >
                Connected Wallet
              </div>

              <div className="font-medium mt-1">
                {employee.wallet}
              </div>
            </div>
          </div>

          <div
            className={`flex items-center gap-2 text-xs ${
              dark ? "text-white/50" : "text-black/50"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Connected to Polygon
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-6">
        {/* Recent Activity */}
        <div
          className={`rounded-[28px] border backdrop-blur-2xl overflow-hidden ${
            dark
              ? "border-white/10 bg-white/[0.035]"
              : "border-black/10 bg-white/60"
          }`}
        >
          <div
            className={`flex items-center justify-between px-6 py-6 border-b ${
              dark ? "border-white/10" : "border-black/10"
            }`}
          >
            <div>
              <h2 className="font-semibold tracking-tight">
                Recent Activity
              </h2>

              <p
                className={`text-xs mt-1 ${
                  dark ? "text-white/40" : "text-black/40"
                }`}
              >
                Recent actions associated with your identity
              </p>
            </div>

            <Link
              href="/employee/activity"
              className={`text-xs flex items-center gap-1 transition ${
                dark
                  ? "text-white/50 hover:text-white"
                  : "text-black/50 hover:text-black"
              }`}
            >
              View all
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div
            className={`divide-y ${
              dark ? "divide-white/10" : "divide-black/10"
            }`}
          >
            {recentActivity.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`px-6 py-5 flex items-center gap-4 transition-colors duration-300 ${
                    dark
                      ? "hover:bg-white/[0.025]"
                      : "hover:bg-black/[0.02]"
                  }`}
                >
                  <div
                    className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center ${
                      dark ? "bg-white/[0.06]" : "bg-black/[0.05]"
                    }`}
                  >
                    <Icon size={17} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium">
                      {item.title}
                    </div>

                    <div
                      className={`text-xs mt-1 truncate ${
                        dark ? "text-white/40" : "text-black/40"
                      }`}
                    >
                      {item.description}
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div
                      className={`text-[11px] ${
                        dark ? "text-white/40" : "text-black/40"
                      }`}
                    >
                      {item.time}
                    </div>

                    <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 size={11} />
                      {item.status}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Identity Card */}
        <div
          className={`rounded-[28px] border overflow-hidden ${
            dark
              ? "border-white/10 bg-white/[0.055] text-white"
              : "border-black/10 bg-white text-black"
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div
                className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                  dark ? "bg-white/[0.08]" : "bg-black/[0.05]"
                }`}
              >
                <UserIcon />
              </div>

              <span className="px-3 py-1.5 rounded-full bg-emerald-400/10 text-emerald-600 dark:text-emerald-300 text-[10px] uppercase tracking-[0.12em]">
                Verified
              </span>
            </div>

            <div
              className={`text-xs mb-2 ${
                dark ? "text-white/40" : "text-black/40"
              }`}
            >
              Employee Identity
            </div>

            <h2 className="text-2xl font-semibold tracking-tight">
              {employee.name}
            </h2>

            <div
              className={`text-sm mt-2 ${
                dark ? "text-white/45" : "text-black/50"
              }`}
            >
              {employee.designation}
            </div>

            <div className="mt-7 space-y-4">
              <InfoRow
                label="Employee ID"
                value={employee.employeeId}
                dark={dark}
              />

              <InfoRow
                label="Department"
                value={employee.department}
                dark={dark}
              />

              <InfoRow
                label="Organization"
                value={employee.organization}
                dark={dark}
              />
            </div>

            <Link
              href="/employee/identity"
              className={`mt-7 w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition ${
                dark
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-black text-white hover:bg-black/90"
              }`}
            >
              View Identity
              <ArrowUpRight size={15} />
            </Link>
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
          className={`mt-0.5 shrink-0 ${
            dark ? "text-white/40" : "text-black/40"
          }`}
        />

        <div>
          <div className="text-xs font-medium">
            Employee access is read-only
          </div>

          <p
            className={`text-xs mt-1 leading-5 ${
              dark ? "text-white/40" : "text-black/40"
            }`}
          >
            Your organization controls your identity, permissions,
            and assigned assets. You can view these resources but
            cannot modify or transfer them.
          </p>
        </div>
      </div>
    </section>
  );
}

/* Small reusable components */

function InfoRow({ label, value, dark }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span
        className={`text-xs ${
          dark ? "text-white/35" : "text-black/40"
        }`}
      >
        {label}
      </span>

      <span
        className={`text-xs text-right ${
          dark ? "text-white/75" : "text-black/70"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function UserIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="8"
        r="3.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M5 20C5.7 16.5 8.1 14.5 12 14.5C15.9 14.5 18.3 16.5 19 20"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}