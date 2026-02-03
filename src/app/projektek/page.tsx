import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Home, Building2, Hotel, Tv } from "lucide-react";

export const metadata: Metadata = {
  title: "Projektek",
  description: "Referenciamunkáink: okos otthon projektek, irodaház automatizálás, szálloda vezérlés. Ismerje meg sikeres megvalósításainkat.",
  openGraph: {
    title: "Projektek | megoldjukosba",
    description: "Referenciamunkáink és sikeres okos otthon projektjeink bemutatása.",
  },
};

const projects = [
  {
    id: 1,
    title: "Modern Villa - Budapest",
    category: "Lakóépület",
    description: "Teljes körű okos otthon megoldás egy 350 m²-es családi házban. Apple HomeKit integráció, intelligens világítás, klímavezérlés és biztonsági rendszer.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Apple HomeKit", "KNX rendszer", "Multiroom audio", "4K kamerarendszer"],
    icon: Home
  },
  {
    id: 2,
    title: "Luxury Penthouse - Rózsadomb",
    category: "Lakóépület",
    description: "Exkluzív penthouse automatizálása panorámás redőnyvezérléssel, ambient világítással és integrált házi mozi rendszerrel.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Panoráma redőnyök", "Házi mozi", "Ambient világítás", "Hangvezérlés"],
    icon: Home
  },
  {
    id: 3,
    title: "Irodaház - Váci út",
    category: "Kereskedelmi",
    description: "5000 m²-es irodaház épületfelügyeleti rendszere, beléptető rendszerrel és konferenciaterem automatizálással.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["BMS rendszer", "Beléptető rendszer", "Energiagazdálkodás", "Konferencia AV"],
    icon: Building2
  },
  {
    id: 4,
    title: "Boutique Hotel - Belváros",
    category: "Vendéglátás",
    description: "25 szobás boutique hotel teljes automatizálása, szobánkénti egyedi vezérléssel és központi menedzsment rendszerrel.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Szobavezérlés", "Központi menedzsment", "Energiaoptimalizálás", "Vendég app"],
    icon: Hotel
  },
  {
    id: 5,
    title: "Családi Ház - Szentendre",
    category: "Lakóépület",
    description: "Hagyományos stílusú ház modern okos otthon megoldásokkal, kertautomatizálással és napelemes integrációval.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Kertautomatizálás", "Napelem integráció", "Okos öntözés", "Garázskapu vezérlés"],
    icon: Home
  },
  {
    id: 6,
    title: "Média Stúdió - Budapest",
    category: "Kereskedelmi",
    description: "Professzionális média stúdió komplex AV rendszerrel, akusztikai vezérléssel és streaming infrastruktúrával.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Profi AV rendszer", "Akusztikai vezérlés", "Streaming", "LED világítás"],
    icon: Tv
  },
  {
    id: 7,
    title: "Wellness Központ - Eger",
    category: "Vendéglátás",
    description: "Luxus wellness központ automatizálása medence vezérléssel, szauna szabályozással és hangulat világítással.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Medence vezérlés", "Szauna automatika", "Spa világítás", "Hőmérséklet szabályozás"],
    icon: Hotel
  },
  {
    id: 8,
    title: "Smart Apartman - Siófok",
    category: "Lakóépület",
    description: "Balatoni apartman teljes okosításása távoli hozzáféréssel a tulajdonos számára és vendég üzemmóddal.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Távoli hozzáférés", "Vendég mód", "Okos zár", "Energiafigyelés"],
    icon: Home
  },
  {
    id: 9,
    title: "Étterem - Buda",
    category: "Vendéglátás",
    description: "Prémium étterem hangulat vezérlése asztalonkénti világítással és multizone hangrendszerrel.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Asztali világítás", "Multizone audio", "Klíma zónák", "Jelenetvezérlés"],
    icon: Building2
  }
];

const categories = ["Összes", "Lakóépület", "Kereskedelmi", "Vendéglátás"];

export default function ProjektekPage() {
  return (
    <main className="min-h-screen bg-[#060a12]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#0a0f1a] to-[#060a12]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeInDown">
            Projektjeink
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fadeInUp">
            Ismerje meg referenciamunkáinkat és inspirálódjon a lehetőségekből
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                type="button"
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? "bg-[#00B1E1] text-white"
                    : "bg-[#111827] border border-gray-700 text-gray-300 hover:border-[#00B1E1] hover:text-[#00B1E1]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                href={`/projektek/${project.id}`}
                className="group bg-[#111827] border border-gray-800 rounded-xl overflow-hidden hover-lift hover:border-[#00B1E1]/50 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#00B1E1]/90 text-white text-xs px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-10 h-10 bg-[#00B1E1]/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <project.icon className="w-5 h-5 text-[#00B1E1]" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00B1E1] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <span className="flex items-center gap-2 text-[#00B1E1] text-sm font-medium">
                    Részletek
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00B1E1]/10 to-[#0099c4]/10 border-y border-[#00B1E1]/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Legyen az Ön projektje a következő!
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Vegye fel velünk a kapcsolatot és beszéljük meg elképzeléseit!
          </p>
          <Link
            href="/kapcsolat"
            className="inline-flex items-center gap-2 bg-[#00B1E1] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0099c4] transition-colors"
          >
            Kapcsolatfelvétel
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
