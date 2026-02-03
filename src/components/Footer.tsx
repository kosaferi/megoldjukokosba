import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1a] border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Logo - Apple Home inspired */}
          <Link href="/" className="flex items-center gap-2 group">
            <svg
              width="32"
              height="32"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:scale-110"
            >
              <path
                d="M18 4L4 14V32H14V22H22V32H32V14L18 4Z"
                fill="url(#homeGradientFooter)"
                stroke="#00B1E1"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M18 4L4 14L18 10L32 14L18 4Z"
                fill="#00B1E1"
                opacity="0.3"
              />
              <circle cx="18" cy="16" r="3" fill="#00B1E1" />
              <defs>
                <linearGradient id="homeGradientFooter" x1="4" y1="4" x2="32" y2="32" gradientUnits="userSpaceOnUse">
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

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-[#00B1E1] transition-colors">
              Főoldal
            </Link>
            <Link href="/szolgaltatasok" className="hover:text-[#00B1E1] transition-colors">
              Szolgáltatások
            </Link>
            <Link href="/projektek" className="hover:text-[#00B1E1] transition-colors">
              Projektek
            </Link>
            <Link href="/blog" className="hover:text-[#00B1E1] transition-colors">
              Blog
            </Link>
            <Link href="/kapcsolat" className="hover:text-[#00B1E1] transition-colors">
              Kapcsolat
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="text-center lg:text-right">
            <p className="text-gray-500 text-sm mb-1">Telefon</p>
            <a href="tel:+36706181725" className="text-[#00B1E1] hover:underline font-medium">
              +36 70 618 1725
            </a>
            <p className="text-gray-500 text-xs mt-2">5122, Jászdózsa</p>
            <p className="text-gray-500 text-xs">Tulsó-Tarnapart utca 2</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-600 text-xs">
          <p>&copy; 2026 megoldjukokosba.hu - Minden jog fenntartva.</p>
        </div>
      </div>
    </footer>
  );
}
