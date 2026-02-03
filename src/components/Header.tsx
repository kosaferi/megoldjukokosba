"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0f1a] shadow-lg shadow-black/20" : "bg-[#0a0f1a]/90 backdrop-blur-md"}`}>
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo - Apple Home inspired */}
          <Link href="/" className="flex items-center gap-2 group">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:scale-110"
            >
              {/* House shape */}
              <path
                d="M18 4L4 14V32H14V22H22V32H32V14L18 4Z"
                fill="url(#homeGradient)"
                stroke="#00B1E1"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              {/* Roof accent */}
              <path
                d="M18 4L4 14L18 10L32 14L18 4Z"
                fill="#00B1E1"
                opacity="0.3"
              />
              {/* Window/circle inside */}
              <circle cx="18" cy="16" r="3" fill="#00B1E1" />
              <defs>
                <linearGradient id="homeGradient" x1="4" y1="4" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1a2744" />
                  <stop offset="1" stopColor="#0a0f1a" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-lg font-semibold">
              <span className="text-[#00B1E1]">megoldjuk</span>
              <span className="text-gray-300">okosba</span>
            </span>
          </Link>

          {/* Desktop Navigation - All in one row */}
          <div className="hidden lg:flex items-center gap-5">
            <Link href="/" className="text-gray-300 hover:text-[#00B1E1] transition-colors text-sm">
              Főoldal
            </Link>
            <Link href="/szolgaltatasok" className="text-gray-300 hover:text-[#00B1E1] transition-colors text-sm">
              Szolgáltatások
            </Link>
            <Link href="/projektek" className="text-gray-300 hover:text-[#00B1E1] transition-colors text-sm">
              Projektek
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-[#00B1E1] transition-colors text-sm">
              Blog
            </Link>
            <Link href="/kapcsolat" className="text-gray-300 hover:text-[#00B1E1] transition-colors text-sm">
              Kapcsolat
            </Link>
          </div>

          {/* Right side - CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/kapcsolat"
              className="bg-[#00B1E1] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#0099c4] transition-colors"
            >
              Ajánlatkérés
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-700 pt-4 animate-fadeIn">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-300 hover:text-[#00B1E1] transition-colors">
                Főoldal
              </Link>
              <Link href="/szolgaltatasok" className="text-gray-300 hover:text-[#00B1E1] transition-colors">
                Szolgáltatások
              </Link>
              <Link href="/projektek" className="text-gray-300 hover:text-[#00B1E1] transition-colors">
                Projektek
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-[#00B1E1] transition-colors">
                Blog
              </Link>
              <Link href="/kapcsolat" className="text-gray-300 hover:text-[#00B1E1] transition-colors">
                Kapcsolat
              </Link>
              <Link href="/kapcsolat" className="bg-[#00B1E1] text-white px-4 py-3 rounded-lg text-center font-medium">
                Ajánlatkérés
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
