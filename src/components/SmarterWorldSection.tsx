import Link from "next/link";

export default function SmarterWorldSection() {
  return (
    <section className="py-20 bg-[#0a0f1a]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image - Smart Home Interface */}
          <div className="lg:w-1/2">
            <div className="relative bg-gradient-to-br from-[#111827] to-[#0a0f1a] rounded-xl shadow-2xl overflow-hidden border border-gray-800">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Okos otthon vezérlő felület"
                className="w-full h-auto opacity-10 absolute inset-0 object-cover"
              />
              <div className="relative p-6">
                {/* Simulated App Interface */}
                <div className="flex gap-4">
                  {/* Left sidebar */}
                  <div className="w-1/3 bg-[#0a0f1a] border border-gray-800 rounded-lg p-4 text-white">
                    <p className="text-sm font-medium mb-4 text-gray-300">Otthon</p>
                    <div className="space-y-3 text-xs">
                      <div className="flex items-center gap-2 text-gray-400">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                        Világítás
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <span className="w-2 h-2 bg-green-400 rounded-full" />
                        Biztonság
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <span className="w-2 h-2 bg-blue-400 rounded-full" />
                        Hangszórók & TV
                      </div>
                    </div>
                    <p className="text-sm font-medium mt-6 mb-2 text-gray-300">Szobák</p>
                    <div className="space-y-2 text-xs text-gray-500">
                      <p className="bg-gray-800 px-2 py-1 rounded text-gray-300">Előtér</p>
                      <p>Garázs</p>
                      <p>Mosókonyha</p>
                      <p>Konyha</p>
                      <p>Nappali</p>
                    </div>
                  </div>
                  {/* Main panel */}
                  <div className="flex-1 text-white">
                    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mb-4">
                      <p className="text-lg font-medium mb-2 text-gray-200">Előtér</p>
                      <div className="flex gap-2 mb-4">
                        <span className="bg-gray-700 px-3 py-1 rounded text-xs text-gray-400">Távol</span>
                        <span className="bg-[#00B1E1] px-3 py-1 rounded text-xs">Otthon</span>
                        <span className="bg-gray-700 px-3 py-1 rounded text-xs text-gray-400">Vacsora</span>
                        <span className="bg-gray-700 px-3 py-1 rounded text-xs text-gray-400">Jó éjt</span>
                      </div>
                    </div>
                    <p className="text-sm mb-2 text-gray-500">Világítás</p>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="bg-gray-800 border border-gray-700 p-2 rounded text-center text-xs">
                        <div className="w-8 h-8 bg-yellow-400/30 rounded-full mx-auto mb-1" />
                        <span className="text-gray-400">Előszoba</span>
                      </div>
                      <div className="bg-gray-800 border border-gray-700 p-2 rounded text-center text-xs">
                        <div className="w-8 h-8 bg-gray-600/30 rounded-full mx-auto mb-1" />
                        <span className="text-gray-400">Kert</span>
                      </div>
                      <div className="bg-gray-800 border border-gray-700 p-2 rounded text-center text-xs">
                        <div className="w-8 h-8 bg-gray-600/30 rounded-full mx-auto mb-1" />
                        <span className="text-gray-400">Kert</span>
                      </div>
                    </div>
                    <p className="text-sm mb-2 text-gray-500">Biztonság</p>
                    <div className="flex gap-2">
                      <div className="bg-gray-800 border border-gray-700 p-2 rounded text-center text-xs flex-1 text-gray-400">Riasztó</div>
                      <div className="bg-gray-800 border border-gray-700 p-2 rounded text-center text-xs flex-1 text-gray-400">Bejárat</div>
                      <div className="bg-gray-800 border border-gray-700 p-2 rounded text-center text-xs flex-1 text-gray-400">Mosókonyha</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 lg:pl-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-[#00B1E1]">Lépjen be egy okosabb világba</span>
            </h2>

            <div className="space-y-4 text-gray-400 mb-8">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00B1E1] rounded-full" />
                <p>Nincs szükség saját irányítási platformra</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00B1E1] rounded-full" />
                <p>Nincs felhőalapú integrációs függőség</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00B1E1] rounded-full" />
                <p>Nincs licenc- vagy felhődíj</p>
              </div>
            </div>

            <p className="text-gray-300 mb-8 text-lg">
              Csak a legjobb rendszerek, helyi Apple Home integrációval
            </p>

            <Link
              href="/szolgaltatasok"
              className="inline-block bg-gray-800 border border-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-700 hover:border-gray-600 transition-colors"
            >
              Tudjon meg többet
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
