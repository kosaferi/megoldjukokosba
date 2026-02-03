import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Home, Building2, Shield, Lightbulb, Thermometer, Speaker, Camera, Wifi } from "lucide-react";

export const metadata: Metadata = {
  title: "Szolgáltatások",
  description: "Okos otthon szolgáltatásaink: intelligens világítás, klímavezérlés, biztonsági rendszerek, kamerarendszerek, multiroom audio és hálózati infrastruktúra.",
  openGraph: {
    title: "Szolgáltatások | megoldjukosba",
    description: "Professzionális okos otthon szolgáltatások: világítás, klíma, biztonság, audio/video rendszerek.",
  },
};

const services = [
  {
    icon: Home,
    title: "Okos Otthon Automatizálás",
    description: "Teljes körű otthonautomatizálási megoldások, amelyek egyszerűvé teszik mindennapjait. Világítás, klíma, redőnyök és szórakoztatóelektronika vezérlése egyetlen alkalmazásból.",
    features: ["Apple HomeKit integráció", "Hangvezérlés Siri-vel", "Automatikus jelenetek", "Távoli hozzáférés"]
  },
  {
    icon: Building2,
    title: "Kereskedelmi Megoldások",
    description: "Professzionális automatizálási rendszerek irodáknak, szállodáknak és kereskedelmi épületeknek. Növelje az energiahatékonyságot és a kényelmet.",
    features: ["Épületfelügyeleti rendszerek", "Energiagazdálkodás", "Beléptető rendszerek", "Konferenciaterem vezérlés"]
  },
  {
    icon: Lightbulb,
    title: "Intelligens Világítás",
    description: "LED világítási rendszerek telepítése és programozása. Hangulatvilágítás, automatikus fényerő-szabályozás és energiatakarékos megoldások.",
    features: ["Dimmelés és színváltás", "Mozgásérzékelős vezérlés", "Napkelte/napnyugta automatika", "Energiafogyasztás monitoring"]
  },
  {
    icon: Thermometer,
    title: "Klímavezérlés",
    description: "Intelligens termosztátok és klímaberendezések vezérlése. Optimális hőmérséklet minden helyiségben, automatikusan.",
    features: ["Zónánkénti vezérlés", "Ütemezett programok", "Energiamegtakarítás", "Távoli hőmérséklet-állítás"]
  },
  {
    icon: Shield,
    title: "Biztonsági Rendszerek",
    description: "Komplex biztonsági megoldások: riasztórendszerek, kamerák, beléptető rendszerek. Mindig tudja, mi történik otthonában.",
    features: ["Mozgásérzékelők", "Ajtó/ablak szenzorok", "Okos zárak", "Valós idejű értesítések"]
  },
  {
    icon: Camera,
    title: "Kamerarendszerek",
    description: "HD és 4K biztonsági kamerák telepítése, helyi és felhőalapú rögzítéssel. Nézze élőben otthonát bárhonnan.",
    features: ["Éjjellátó kamerák", "Kétirányú hang", "Arcfelismerés", "Felhőalapú tárolás"]
  },
  {
    icon: Speaker,
    title: "Multiroom Audio/Video",
    description: "Házi mozi és multiroom hangrendszerek tervezése és telepítése. Élvezze a zenét minden szobában, egységes vezérléssel.",
    features: ["Beépített hangszórók", "Házi mozi rendszerek", "Streaming integráció", "Egyszerű vezérlés"]
  },
  {
    icon: Wifi,
    title: "Hálózati Infrastruktúra",
    description: "Megbízható WiFi lefedettség az egész épületben. Professzionális hálózattervezés és kivitelezés.",
    features: ["Mesh WiFi rendszerek", "Gigabites kapcsolatok", "Hálózatbiztonság", "Távoli menedzsment"]
  }
];

export default function SzolgaltatasokPage() {
  return (
    <main className="min-h-screen bg-[#060a12]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#0a0f1a] to-[#060a12]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Szolgáltatásaink
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professzionális okos otthon és épületautomatizálási megoldások,
            amelyek egyszerűbbé és kényelmesebbé teszik az életét.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#111827] border border-gray-800 rounded-xl p-6 hover:border-[#00B1E1]/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#00B1E1]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#00B1E1]/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-[#00B1E1]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 bg-[#00B1E1] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00B1E1]/20 to-[#0099c4]/20 border-y border-[#00B1E1]/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Készen áll az okos otthonra?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Vegye fel velünk a kapcsolatot ingyenes konzultációért és személyre szabott ajánlatért!
          </p>
          <Link
            href="/kapcsolat"
            className="inline-block bg-[#00B1E1] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0099c4] transition-colors"
          >
            Kapcsolatfelvétel
          </Link>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Hogyan Dolgozunk?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Konzultáció", desc: "Megismerjük igényeit és felmérjük a helyszínt" },
              { step: "02", title: "Tervezés", desc: "Személyre szabott megoldást dolgozunk ki" },
              { step: "03", title: "Telepítés", desc: "Professzionális kivitelezés minimális zavarással" },
              { step: "04", title: "Támogatás", desc: "Folyamatos ügyfélszolgálat és karbantartás" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-[#00B1E1]/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
