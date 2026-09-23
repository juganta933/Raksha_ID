"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { usePathname, useRouter } from "next/navigation";

import {
  LayoutDashboard,
  UserRound,
  ShieldCheck,
  Boxes,
  Activity,
  Moon,
  Sun,
  LogOut,
  Wallet,
  ChevronRight,
} from "lucide-react";

export default function EmployeeLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const [dark, setDark] = useState(false);

  const navigation = [
    {
      name: "Dashboard",
      href: "/employee",
      icon: LayoutDashboard,
    },
    {
      name: "My Identity",
      href: "/employee/identity",
      icon: UserRound,
    },
    {
      name: "Permissions",
      href: "/employee/permissions",
      icon: ShieldCheck,
    },
    {
      name: "My Assets",
      href: "/employee/assets",
      icon: Boxes,
    },
    {
      name: "Activity",
      href: "/employee/activity",
      icon: Activity,
    },
  ];

  /*
    Load saved theme when employee layout mounts
  */
  useEffect(() => {
    const savedTheme = localStorage.getItem("raksa-theme");

    if (savedTheme === "dark") {
      setDark(true);
    } else {
      setDark(false);
    }
  }, []);

  /*
    Change theme
  */
const toggleTheme = () => {
  setDark((prev) => {
    const newDark = !prev;

    localStorage.setItem(
      "raksa-theme",
      newDark ? "dark" : "light"
    );

    window.dispatchEvent(new Event("raksa-theme-change"));

    return newDark;
  });
};

  const isActive = (href) => {
    if (href === "/employee") {
      return pathname === "/employee";
    }

    return pathname.startsWith(href);
  };

  const handleLogout = () => {
    router.push("/connect");
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

      {/* Main Layout */}
      <div className="relative z-10 flex min-h-screen">

        {/* Sidebar */}
        <aside
          className={`hidden md:flex w-[260px] shrink-0 flex-col border-r backdrop-blur-2xl ${
            dark
              ? "border-white/10 bg-white/[0.025]"
              : "border-black/10 bg-white/40"
          }`}
        >

          {/* Logo */}
          <div className="px-6 py-6">
            <Link
              href="/"
              className="flex items-center gap-3 group"
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
                  dark ? "bg-white" : "bg-black"
                }`}
              >
                <svg
                  viewBox="0 0 48 48"
                  className={`w-7 h-7 ${
                    dark ? "text-black" : "text-white"
                  }`}
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

              <div>
                <div className="font-semibold tracking-tight">
                  RAKSA
                </div>

                <div
                  className={`text-[10px] tracking-[0.18em] ${
                    dark
                      ? "text-white/40"
                      : "text-black/40"
                  }`}
                >
                  EMPLOYEE
                </div>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4">
            <div
              className={`text-[10px] uppercase tracking-[0.18em] px-3 mb-3 ${
                dark
                  ? "text-white/35"
                  : "text-black/35"
              }`}
            >
              Workspace
            </div>

            <div className="space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group flex items-center gap-3 px-3 py-3 rounded-xl text-sm transition-all duration-300 ${
                      active
                        ? dark
                          ? "bg-white text-black shadow-sm"
                          : "bg-black text-white shadow-sm"
                        : dark
                          ? "text-white/55 hover:text-white hover:bg-white/[0.06]"
                          : "text-black/55 hover:text-black hover:bg-black/[0.04]"
                    }`}
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.8}
                    />

                    <span className="flex-1">
                      {item.name}
                    </span>

                    {active && (
                      <ChevronRight
                        size={15}
                        className="opacity-60"
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Bottom Sidebar */}
          <div className="p-4 space-y-2">

            {/* Wallet */}
            <div
              className={`rounded-2xl border backdrop-blur-xl p-4 ${
                dark
                  ? "border-white/10 bg-white/[0.035]"
                  : "border-black/10 bg-white/50"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <Wallet size={15} />

                <span
                  className={`text-xs ${
                    dark
                      ? "text-white/50"
                      : "text-black/50"
                  }`}
                >
                  Connected Wallet
                </span>
              </div>

              <div className="text-sm font-medium">
                0xA821...91F2
              </div>

              <div
                className={`flex items-center gap-1.5 mt-2 text-[11px] ${
                  dark
                    ? "text-white/45"
                    : "text-black/45"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Polygon
              </div>
            </div>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm transition-all duration-300 ${
                dark
                  ? "text-white/50 hover:text-white hover:bg-white/[0.06]"
                  : "text-black/50 hover:text-black hover:bg-black/[0.04]"
              }`}
            >
              <LogOut size={17} />
              Disconnect
            </button>
          </div>
        </aside>

        {/* Right Side */}
        <div className="flex-1 min-w-0">

          {/* Navbar */}
          <header
            className={`h-[76px] border-b backdrop-blur-2xl flex items-center justify-between px-6 md:px-10 ${
              dark
                ? "border-white/10 bg-white/[0.02]"
                : "border-black/10 bg-white/40"
            }`}
          >

            {/* Mobile Logo */}
            <Link
              href="/"
              className="md:hidden flex items-center gap-2"
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  dark ? "bg-white" : "bg-black"
                }`}
              >
                <svg
                  viewBox="0 0 48 48"
                  className={`w-6 h-6 ${
                    dark ? "text-black" : "text-white"
                  }`}
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

              <span className="font-semibold">
                RAKSA ID
              </span>
            </Link>

            {/* Desktop Page Indicator */}
            <div className="hidden md:block">
              <div className="text-sm font-medium">
                Employee Portal
              </div>

              <div
                className={`text-xs mt-0.5 ${
                  dark
                    ? "text-white/40"
                    : "text-black/40"
                }`}
              >
                Identity & Asset Management
              </div>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-3 ml-auto">

              {/* Wallet */}
              <div
                className={`hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl border backdrop-blur-xl ${
                  dark
                    ? "border-white/10 bg-white/[0.04]"
                    : "border-black/10 bg-white/50"
                }`}
              >
                <Wallet size={15} />

                <span className="text-xs font-medium">
                  0xA821...91F2
                </span>

                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 hover:scale-105 ${
                  dark
                    ? "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
                    : "border-black/10 bg-white/60 hover:bg-black/[0.04]"
                }`}
              >
                {dark ? (
                  <Sun size={16} />
                ) : (
                  <Moon size={16} />
                )}
              </button>
            </div>
          </header>

          {/* Page Content */}
          <div className="relative">
            {children}
          </div>

        </div>
      </div>
    </main>
  );
}