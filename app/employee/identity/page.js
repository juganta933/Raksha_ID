"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Copy,
  Fingerprint,
  ShieldCheck,
  UserRound,
  Wallet,
  Building2,
  BriefcaseBusiness,
  Hash,
  LockKeyhole,
} from "lucide-react";

const employee = {
  name: "Rahul Sharma",
  employeeId: "EMP-1024",
  department: "Engineering",
  designation: "Software Engineer",
  organization: "XYZ Corporation",
  email: "rahul.sharma@xyzcorp.com",
  wallet: "0xA821...91F2",
  fullWallet: "0xA8219C72F4B8D3E6A21F8C44D6B291F2",
  identityStatus: "Verified",
  verifiedDate: "23 September 2026",
};

export default function EmployeeIdentity() {
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
        <div
          className={`flex items-center gap-2 text-xs mb-3 ${muted}`}
        >
          <Link
            href="/employee"
            className="hover:opacity-100 transition"
          >
            Employee Portal
          </Link>

          <span>/</span>

          <span>My Identity</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em]">
              My Identity
            </h1>

            <p className={`mt-3 text-sm md:text-base max-w-xl ${secondary}`}>
              View your verified organization identity and connected
              wallet information.
            </p>
          </div>

          {/* Verification */}
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
                Identity Status
              </div>

              <div className="text-sm font-medium mt-0.5 text-emerald-500">
                Verified
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-6">
        {/* Identity Information */}
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
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  dark ? "bg-white/[0.07]" : "bg-black/[0.05]"
                }`}
              >
                <UserRound size={21} />
              </div>

              <div>
                <h2 className="font-semibold tracking-tight">
                  Personal Information
                </h2>

                <p className={`text-xs mt-1 ${muted}`}>
                  Information registered by your organization
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 grid sm:grid-cols-2 gap-x-8 gap-y-7">
            <Info
              icon={UserRound}
              label="Full Name"
              value={employee.name}
              dark={dark}
            />

            <Info
              icon={Hash}
              label="Employee ID"
              value={employee.employeeId}
              dark={dark}
            />

            <Info
              icon={BriefcaseBusiness}
              label="Designation"
              value={employee.designation}
              dark={dark}
            />

            <Info
              icon={Building2}
              label="Department"
              value={employee.department}
              dark={dark}
            />

            <Info
              icon={Building2}
              label="Organization"
              value={employee.organization}
              dark={dark}
            />

            <Info
              icon={BriefcaseBusiness}
              label="Email"
              value={employee.email}
              dark={dark}
            />
          </div>
        </div>

        {/* Verification Card */}
        <div
          className={`rounded-[28px] border overflow-hidden ${
            dark
              ? "border-white/10 bg-white/[0.055]"
              : "border-black/10 bg-black text-white"
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  dark ? "bg-emerald-400/10" : "bg-white/10"
                }`}
              >
                <Fingerprint
                  size={22}
                  className="text-emerald-400"
                />
              </div>

              <span className="px-3 py-1.5 rounded-full bg-emerald-400/10 text-emerald-400 text-[10px] uppercase tracking-[0.12em]">
                Verified
              </span>
            </div>

            <div className="mt-8">
              <div
                className={`text-xs ${
                  dark ? "text-white/40" : "text-white/40"
                }`}
              >
                Identity Verification
              </div>

              <h2 className="text-2xl font-semibold tracking-tight mt-2">
                Organization Verified
              </h2>

              <p className="text-sm text-white/45 mt-3 leading-6">
                Your identity has been verified by your organization
                and is securely associated with your employee record.
              </p>
            </div>

            <div className="mt-7 space-y-4">
              <DarkInfo
                label="Status"
                value="Verified"
              />

              <DarkInfo
                label="Verified On"
                value={employee.verifiedDate}
              />

              <DarkInfo
                label="Employee ID"
                value={employee.employeeId}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wallet */}
      <div
        className={`mt-6 rounded-[28px] border backdrop-blur-2xl overflow-hidden ${card}`}
      >
        <div
          className={`px-6 py-6 border-b ${
            dark ? "border-white/10" : "border-black/10"
          }`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                dark ? "bg-white/[0.07]" : "bg-black/[0.05]"
              }`}
            >
              <Wallet size={21} />
            </div>

            <div>
              <h2 className="font-semibold tracking-tight">
                Connected Wallet
              </h2>

              <p className={`text-xs mt-1 ${muted}`}>
                Wallet associated with your employee identity
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div
            className={`rounded-2xl border p-5 ${
              dark
                ? "border-white/10 bg-white/[0.025]"
                : "border-black/10 bg-black/[0.025]"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <div className={`text-[10px] uppercase tracking-[0.15em] ${muted}`}>
                  Polygon Wallet
                </div>

                <div className="font-mono text-sm md:text-base mt-2">
                  {employee.wallet}
                </div>
              </div>

              <button
                type="button"
                className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs transition ${
                  dark
                    ? "bg-white/[0.07] hover:bg-white/[0.12]"
                    : "bg-black/[0.05] hover:bg-black/[0.09]"
                }`}
                onClick={() => {
                  navigator.clipboard?.writeText(employee.fullWallet);
                }}
              >
                <Copy size={14} />
                Copy Address
              </button>
            </div>
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
            Identity is read-only
          </div>

          <p className={`text-xs mt-1 leading-5 ${muted}`}>
            Your organization manages your identity information.
            You can view your verified details but cannot edit or
            modify them.
          </p>
        </div>
      </div>
    </section>
  );
}

function Info({ icon: Icon, label, value, dark }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className={`w-9 h-9 shrink-0 rounded-xl flex items-center justify-center ${
          dark ? "bg-white/[0.06]" : "bg-black/[0.05]"
        }`}
      >
        <Icon size={16} />
      </div>

      <div className="min-w-0">
        <div
          className={`text-[10px] uppercase tracking-[0.12em] ${
            dark ? "text-white/35" : "text-black/40"
          }`}
        >
          {label}
        </div>

        <div className="text-sm font-medium mt-1 truncate">
          {value}
        </div>
      </div>
    </div>
  );
}

function DarkInfo({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-xs text-white/35">
        {label}
      </span>

      <span className="text-xs text-white/75 text-right">
        {value}
      </span>
    </div>
  );
}