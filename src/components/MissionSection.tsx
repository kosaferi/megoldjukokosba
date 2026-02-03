export default function MissionSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#060a12]">
      {/* Gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00B1E1]/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            #1 Egyszerű Küldetés
          </h2>
          <p className="text-xl md:text-2xl text-[#00B1E1] font-medium">
            A legjobb felhasználói élmény.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          {/* Smart Home App Interface with organic blob shape */}
          <div className="relative max-w-[750px] w-full">
            {/* Main blob container */}
            <div
              className="relative shadow-2xl shadow-[#00B1E1]/10 overflow-hidden"
              style={{
                borderRadius: "30% 70% 70% 30% / 60% 40% 60% 40%",
                background: "linear-gradient(135deg, #111827 0%, #0a0f1a 100%)",
                border: "1px solid rgba(0, 177, 225, 0.2)",
              }}
            >
              <div className="flex gap-4 p-6 md:p-8">
                {/* Left Sidebar */}
                <div className="bg-[#0a0f1a] rounded-xl p-4 w-2/5 text-white border border-gray-800">
                  <div className="mb-6">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Kategóriák</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm text-gray-300">
                        <span className="w-3 h-3 bg-[#00B1E1] rounded-full shadow-lg shadow-cyan-500/50" />
                        Klíma
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-300">
                        <span className="w-3 h-3 bg-yellow-400 rounded-full shadow-lg shadow-yellow-500/50" />
                        Világítás
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-300">
                        <span className="w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-500/50" />
                        Biztonság
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-300">
                        <span className="w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-500/50" />
                        Hangszórók & TV
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Szobák</p>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-300">Előszoba</p>
                      <p className="text-gray-500">Garázs</p>
                      <p className="text-gray-500">Mosókonyha</p>
                      <p className="text-gray-500">Előtér</p>
                    </div>
                  </div>
                </div>

                {/* Right Main Content */}
                <div className="flex-1 text-white">
                  <p className="text-xl font-semibold mb-4">Otthon 14</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-[#00B1E1]/20 border border-[#00B1E1]/30 px-3 py-1.5 rounded-lg text-sm text-[#00B1E1]">Klíma 22°</span>
                    <span className="bg-yellow-500/20 border border-yellow-500/30 px-3 py-1.5 rounded-lg text-sm text-yellow-400">Világítás 1 BE</span>
                    <span className="bg-green-500/20 border border-green-500/30 px-3 py-1.5 rounded-lg text-sm text-green-400">Biztonság Ki</span>
                    <span className="bg-purple-500/20 border border-purple-500/30 px-3 py-1.5 rounded-lg text-sm text-purple-400">Zene</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">Jelenetek</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg text-sm text-gray-300 hover:border-gray-600 transition cursor-pointer">Jó éjt</span>
                    <span className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg text-sm text-gray-300 hover:border-gray-600 transition cursor-pointer">Távol</span>
                    <span className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg text-sm text-gray-300 hover:border-gray-600 transition cursor-pointer">Mozi</span>
                    <span className="bg-[#00B1E1] px-4 py-2 rounded-lg text-sm font-medium shadow-lg shadow-cyan-500/30">Otthon</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">Kamerák</p>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-gray-800 border border-gray-700 rounded-lg h-16 flex items-center justify-center text-sm text-gray-400 hover:border-gray-600 transition cursor-pointer">Bejárat</div>
                    <div className="bg-gray-800 border border-gray-700 rounded-lg h-16 flex items-center justify-center text-sm text-gray-400 hover:border-gray-600 transition cursor-pointer">Kert</div>
                    <div className="bg-gray-800 border border-gray-700 rounded-lg h-16 flex items-center justify-center text-sm text-gray-400 hover:border-gray-600 transition cursor-pointer">Garázs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Tapasztalja meg az összekapcsolt otthont, ahol minden interakció öröm
        </p>
      </div>
    </section>
  );
}
