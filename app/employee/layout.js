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
 ```jsx
{/* =========================================================
    SMOOTH SIDEBAR
========================================================= */}

<aside
  className={`
    hidden md:flex fixed left-0 top-0 h-screen
    w-[236px] z-50 flex-col
    border-r
    backdrop-blur-2xl
    transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
    ${
      dark
        ? "border-white/[0.07] bg-[#090909]/80"
        : "border-black/[0.07] bg-[#f7f7f5]/80"
    }
  `}
>
  {/* =====================================================
      LOGO
  ===================================================== */}

  <div className="px-4 pt-5 pb-4">
    <Link
      href="/"
      className="
        group flex items-center gap-3
        px-2 py-2
        rounded-xl
        transition-all duration-300
        hover:-translate-y-0.5
      "
    >
      {/* Logo */}

      <div
        className={`
          relative w-9 h-9 shrink-0
          rounded-[11px]
          flex items-center justify-center
          transition-all duration-500
          group-hover:scale-105
          group-hover:rotate-1
          ${
            dark
              ? "bg-white text-black"
              : "bg-black text-white"
          }
        `}
      >
        {/* subtle glow */}

        <div
          className={`
            absolute inset-0 rounded-[11px]
            blur-lg opacity-0
            transition-opacity duration-500
            group-hover:opacity-30
            ${
              dark
                ? "bg-white"
                : "bg-black"
            }
          `}
        />

     <img
  src={dark ? "/logo-black.png" : "/logo-white.png"}
  alt="Raksa ID"
  className="relative w-7 h-7 object-contain transition-transform duration-500 group-hover:scale-105"
/>
      </div>

      {/* Brand */}

      <div className="min-w-0">
        <div
          className="
            font-semibold tracking-[-0.02em]
            leading-none
            transition-transform duration-300
            group-hover:translate-x-0.5
          "
        >
          RAKSA
        </div>

        <div
          className={`
            text-[9px]
            tracking-[0.2em]
            mt-1
            ${
              dark
                ? "text-white/35"
                : "text-black/35"
            }
          `}
        >
          EMPLOYEE
        </div>
      </div>
    </Link>
  </div>

  {/* =====================================================
      NAVIGATION
  ===================================================== */}

  <nav className="flex-1 px-3 pt-3">
    {/* Section label */}

    <div
      className={`
        px-3 mb-2
        text-[9px]
        uppercase
        tracking-[0.18em]
        ${
          dark
            ? "text-white/25"
            : "text-black/30"
        }
      `}
    >
      Workspace
    </div>

    <div className="space-y-0.5">
      {navigation.map((item) => {
        const Icon = item.icon;
        const active = isActive(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`
              group relative
              flex items-center gap-3
              px-3 py-2.5
              rounded-[10px]
              text-[13px]
              font-medium
              transition-all
              duration-300
              ease-[cubic-bezier(.22,1,.36,1)]
              ${
                active
                  ? dark
                    ? "bg-white/[0.08] text-white"
                    : "bg-black/[0.055] text-black"
                  : dark
                    ? "text-white/45 hover:text-white/85 hover:bg-white/[0.035]"
                    : "text-black/45 hover:text-black/85 hover:bg-black/[0.025]"
              }
            `}
          >
            {/* Active indicator */}

            <span
              className={`
                absolute left-0
                top-1/2
                -translate-y-1/2
                w-[2px]
                rounded-full
                transition-all duration-300
                ${
                  active
                    ? dark
                      ? "h-5 bg-white"
                      : "h-5 bg-black"
                    : "h-0 bg-transparent"
                }
              `}
            />

            {/* Icon container */}

            <span
              className={`
                relative
                w-7 h-7
                shrink-0
                rounded-[8px]
                flex items-center justify-center
                transition-all duration-300
                ${
                  active
                    ? dark
                      ? "bg-white/[0.08]"
                      : "bg-black/[0.055]"
                    : ""
                }
                group-hover:scale-105
                ${
                  active
                    ? "scale-[1.02]"
                    : ""
                }
              `}
            >
              <Icon
                size={16}
                strokeWidth={active ? 2 : 1.7}
                className={`
                  transition-all duration-300
                  ${
                    active
                      ? dark
                        ? "text-white"
                        : "text-black"
                      : ""
                  }
                  group-hover:scale-110
                  ${
                    active
                      ? "group-hover:-translate-y-0.5"
                      : ""
                  }
                `}
              />
            </span>

            {/* Label */}

            <span
              className="
                flex-1
                transition-transform
                duration-300
                group-hover:translate-x-0.5
              "
            >
              {item.name}
            </span>

            {/* Active arrow */}

            <ChevronRight
              size={13}
              className={`
                transition-all duration-300
                ${
                  active
                    ? "opacity-50 translate-x-0"
                    : "opacity-0 -translate-x-1"
                }
                group-hover:opacity-70
              `}
            />
          </Link>
        );
      })}
    </div>
  </nav>

  {/* =====================================================
      BOTTOM AREA
  ===================================================== */}

  <div className="px-3 pb-4">

    {/* Wallet */}

    <div
      className={`
        group
        px-3 py-3
        mb-2
        rounded-xl
        border
        transition-all duration-300
        ${
          dark
            ? "border-white/[0.07] hover:border-white/[0.12] hover:bg-white/[0.025]"
            : "border-black/[0.07] hover:border-black/[0.12] hover:bg-black/[0.015]"
        }
      `}
    >
      <div className="flex items-center gap-3">

        <div
          className={`
            w-8 h-8
            shrink-0
            rounded-lg
            flex items-center justify-center
            transition-all duration-300
            group-hover:scale-105
            ${
              dark
                ? "bg-white/[0.07]"
                : "bg-black/[0.045]"
            }
          `}
        >
          <Wallet
            size={15}
            className={`
              transition-transform duration-300
              group-hover:scale-110
              ${
                dark
                  ? "text-white/70"
                  : "text-black/65"
              }
            `}
          />
        </div>

        <div className="min-w-0 flex-1">

          <div
            className={`
              text-[9px]
              uppercase
              tracking-[0.12em]
              ${
                dark
                  ? "text-white/30"
                  : "text-black/35"
              }
            `}
          >
            Wallet
          </div>

          <div
            className="
              text-[11px]
              font-medium
              mt-1
              truncate
            "
          >
            0xA821...91F2
          </div>
        </div>

        {/* Connected indicator */}

        <div className="relative shrink-0">
          <span className="block w-1.5 h-1.5 rounded-full bg-emerald-500" />

          <span
            className="
              absolute inset-0
              rounded-full
              bg-emerald-500
              animate-ping
              opacity-25
            "
          />
        </div>
      </div>

      <div
        className={`
          flex items-center gap-1.5
          mt-2.5
          text-[10px]
          ${
            dark
              ? "text-white/30"
              : "text-black/35"
          }
        `}
      >
        <span>Connected to Polygon</span>
      </div>
    </div>

    {/* Bottom controls */}

    <div className="grid grid-cols-[1fr_auto] gap-1">

      {/* Disconnect */}

      <button
        onClick={handleLogout}
        className={`
          group/logout
          flex items-center gap-3
          px-3 py-2.5
          rounded-[10px]
          text-xs
          transition-all duration-300
          ${
            dark
              ? "text-white/40 hover:text-white hover:bg-white/[0.045]"
              : "text-black/40 hover:text-black hover:bg-black/[0.035]"
          }
        `}
      >
        <LogOut
          size={15}
          className="
            transition-transform duration-300
            group-hover/logout:-translate-x-0.5
          "
        />

        <span>Disconnect</span>
      </button>

      {/* Theme */}

      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className={`
          group/theme
          w-9 h-9
          flex items-center justify-center
          rounded-[10px]
          border
          transition-all duration-300
          hover:scale-105
          active:scale-95
          ${
            dark
              ? "border-white/[0.08] bg-white/[0.035] hover:bg-white/[0.07]"
              : "border-black/[0.08] bg-white/60 hover:bg-black/[0.035]"
          }
        `}
      >
        {dark ? (
          <Sun
            size={15}
            className="
              transition-all duration-500
              group-hover/theme:rotate-45
            "
          />
        ) : (
          <Moon
            size={15}
            className="
              transition-all duration-500
              group-hover/theme:-rotate-12
            "
          />
        )}
      </button>
    </div>
  </div>
</aside>



        {/* Right Side */}
        <div className="flex-1 min-w-0 md:ml-[260px]">

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