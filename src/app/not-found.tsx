"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#060a12] flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-lg">
          {/* 404 Graphic */}
          <div className="relative mb-8">
            <div className="text-[150px] md:text-[200px] font-bold text-[#111827] leading-none select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#00B1E1] to-[#0099c4] rounded-full flex items-center justify-center animate-pulse-glow">
                <Search className="w-12 h-12 md:w-16 md:h-16 text-white" />
              </div>
            </div>
          </div>

          {/* Text */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Az oldal nem található
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Sajnáljuk, a keresett oldal nem létezik, áthelyezték vagy törölték.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#00B1E1] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0099c4] transition-colors"
            >
              <Home className="w-5 h-5" />
              Főoldal
            </Link>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 bg-[#111827] border border-gray-700 text-gray-300 px-6 py-3 rounded-lg font-medium hover:border-[#00B1E1] hover:text-[#00B1E1] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Vissza
            </button>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm mb-4">Hasznos linkek:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/szolgaltatasok" className="text-[#00B1E1] hover:underline">
                Szolgáltatások
              </Link>
              <Link href="/projektek" className="text-[#00B1E1] hover:underline">
                Projektek
              </Link>
              <Link href="/blog" className="text-[#00B1E1] hover:underline">
                Blog
              </Link>
              <Link href="/kapcsolat" className="text-[#00B1E1] hover:underline">
                Kapcsolat
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
