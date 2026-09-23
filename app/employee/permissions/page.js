"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Clock3,
  LockKeyhole,
  ShieldCheck,
  Shield,
  Building2,
  Eye,
  Pencil,
  Play,
} from "lucide-react";

const permissions = [
  {
    name: "Engineering Portal",
    description: "Access to the internal engineering management portal.",
    access: ["READ", "WRITE"],
    grantedBy: "Admin",
    grantedOn: "23 September 2026",
    expires: "23 September 2027",
    status: "ACTIVE",
    icon: ShieldCheck,
  },
  {
    name: "Source Code Repository",
    description: "Access to organization source code repositories.",
    access: ["READ", "WRITE"],
    grantedBy: "Admin",
    grantedOn: "20 September 2026",
    expires: "20 September 2027",
    status: "ACTIVE",
    icon: Building2,
  },
  {
    name: "Employee Dashboard",
    description: "View your employee profile and organization resources.",
    access: ["READ"],
    grantedBy: "HR Admin",
    grantedOn: "15 September 2026",
    expires: "15 September 2027",
    status: "ACTIVE",
    icon: Eye,
  },
  {
    name: "Asset Management",
    description: "View digital and physical assets assigned to you.",
    access: ["READ"],
    grantedBy: "Asset Admin",
    grantedOn: "18 September 2026",
    expires: "18 September 2027",
    status: "ACTIVE",
    icon: Shield,
  },
  {
    name: "Deployment Console",
    description: "Permission to execute approved deployment operations.",
    access: ["READ", "EXECUTE"],
    grantedBy: "Engineering Admin",
    grantedOn: "21 September 2026",
    expires: "21 December 2026",
    status: "ACTIVE",
    icon: Play,
  },
];

export default function EmployeePermissions() {
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

          <span>Permissions</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em]">
              Permissions
            </h1>

            <p className={`mt-3 text-sm md:text-base max-w-xl ${secondary}`}>
              View the permissions granted to your wallet by your
              organization.
            </p>
          </div>

          {/* Permission Status */}
          <div
            className={`inline-flex items-center gap-3 self-start px-4 py-3 rounded-2xl border backdrop-blur-xl ${card}`}
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <CheckCircle2
                size={18}
                className="text-emerald-500"
              />
            </div>

            <div>
              <div
                className={`text-[10px] uppercase tracking-[0.15em] ${muted}`}
              >
                Active Permissions
              </div>

              <div className="text-sm font-medium mt-0.5">
                {permissions.length} Active
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Permission Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <SummaryCard
          icon={ShieldCheck}
          title="Total Permissions"
          value={permissions.length}
          dark={dark}
        />

        <SummaryCard
          icon={Eye}
          title="Read Access"
          value="5"
          dark={dark}
        />

        <SummaryCard
          icon={Pencil}
          title="Write / Execute"
          value="3"
          dark={dark}
        />
      </div>

      {/* Permissions List */}
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
              <ShieldCheck size={20} />
            </div>

            <div>
              <h2 className="font-semibold tracking-tight">
                Granted Permissions
              </h2>

              <p className={`text-xs mt-1 ${muted}`}>
                Permissions currently associated with your identity
              </p>
            </div>
          </div>
        </div>

        <div
          className={`divide-y ${
            dark ? "divide-white/10" : "divide-black/10"
          }`}
        >
          {permissions.map((permission) => {
            const Icon = permission.icon;

            return (
              <div
                key={permission.name}
                className={`p-6 transition-colors duration-300 ${
                  dark
                    ? "hover:bg-white/[0.025]"
                    : "hover:bg-black/[0.02]"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-5">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center ${
                      dark ? "bg-white/[0.07]" : "bg-black/[0.05]"
                    }`}
                  >
                    <Icon size={20} />
                  </div>

                  {/* Main Information */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-medium">
                        {permission.name}
                      </h3>

                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[9px] uppercase tracking-[0.1em]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {permission.status}
                      </span>
                    </div>

                    <p
                      className={`text-xs mt-2 max-w-2xl ${secondary}`}
                    >
                      {permission.description}
                    </p>

                    {/* Access Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {permission.access.map((access) => (
                        <AccessTag
                          key={access}
                          access={access}
                          dark={dark}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="lg:w-[230px] shrink-0 space-y-3">
                    <PermissionInfo
                      label="Granted By"
                      value={permission.grantedBy}
                      dark={dark}
                    />

                    <PermissionInfo
                      label="Granted On"
                      value={permission.grantedOn}
                      dark={dark}
                    />

                    <PermissionInfo
                      label="Expires"
                      value={permission.expires}
                      dark={dark}
                    />
                  </div>

                  <ArrowUpRight
                    size={18}
                    className={`hidden lg:block shrink-0 ${muted}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Permission Explanation */}
      <div
        className={`mt-6 rounded-[24px] border backdrop-blur-xl p-6 ${card}`}
      >
        <div className="flex items-start gap-4">
          <div
            className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center ${
              dark ? "bg-white/[0.06]" : "bg-black/[0.05]"
            }`}
          >
            <Shield size={18} />
          </div>

          <div>
            <h3 className="text-sm font-medium">
              How permissions work
            </h3>

            <p className={`text-xs mt-2 leading-5 max-w-3xl ${muted}`}>
              Your organization grants permissions to your wallet.
              These permissions determine which organization
              resources you can access. Permissions are managed by
              administrators and cannot be modified from the
              employee portal.
            </p>
          </div>
        </div>
      </div>

      {/* Read Only Notice */}
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
            Permissions are read-only
          </div>

          <p className={`text-xs mt-1 leading-5 ${muted}`}>
            Your organization controls all permissions. You can
            view your current access but cannot grant, revoke, or
            modify permissions.
          </p>
        </div>
      </div>
    </section>
  );
}

function SummaryCard({ icon: Icon, title, value, dark }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[24px] border backdrop-blur-2xl p-5 transition-all duration-500 hover:-translate-y-1 ${
        dark
          ? "border-white/10 bg-white/[0.035] hover:border-white/20"
          : "border-black/10 bg-white/60 hover:border-black/20"
      }`}
    >
      <div
        className={`absolute -right-10 -top-10 w-24 h-24 rounded-full blur-2xl ${
          dark ? "bg-white/[0.04]" : "bg-black/[0.03]"
        }`}
      />

      <div className="relative flex items-center gap-4">
        <div
          className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
            dark ? "bg-white/[0.07]" : "bg-black/[0.05]"
          }`}
        >
          <Icon size={19} />
        </div>

        <div>
          <div
            className={`text-xs ${dark ? "text-white/45" : "text-black/45"}`}
          >
            {title}
          </div>

          <div className="text-2xl font-semibold mt-0.5">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
}

function AccessTag({ access, dark }) {
  const styles = {
    READ: dark
      ? "bg-blue-400/10 text-blue-300 border-blue-400/10"
      : "bg-blue-500/10 text-blue-600 border-blue-500/10",

    WRITE: dark
      ? "bg-amber-400/10 text-amber-300 border-amber-400/10"
      : "bg-amber-500/10 text-amber-600 border-amber-500/10",

    EXECUTE: dark
      ? "bg-purple-400/10 text-purple-300 border-purple-400/10"
      : "bg-purple-500/10 text-purple-600 border-purple-500/10",
  };

  return (
    <span
      className={`px-2.5 py-1 rounded-lg border text-[9px] font-medium tracking-[0.08em] ${
        styles[access]
      }`}
    >
      {access}
    </span>
  );
}

function PermissionInfo({ label, value, dark }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span
        className={`text-[10px] uppercase tracking-[0.08em] ${
          dark ? "text-white/30" : "text-black/35"
        }`}
      >
        {label}
      </span>

      <span
        className={`text-[11px] text-right ${
          dark ? "text-white/65" : "text-black/65"
        }`}
      >
        {value}
      </span>
    </div>
  );
}