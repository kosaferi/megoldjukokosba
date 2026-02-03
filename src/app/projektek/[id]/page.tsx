import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Home, Building2, Hotel, Tv } from "lucide-react";
import { notFound } from "next/navigation";

const projects = [
  {
    id: "1",
    title: "Modern Villa - Budapest",
    category: "Lakóépület",
    description: "Teljes körű okos otthon megoldás egy 350 m²-es családi házban. Apple HomeKit integráció, intelligens világítás, klímavezérlés és biztonsági rendszer.",
    fullDescription: `Ez a projekt egy modern, 350 négyzetméteres családi ház teljes automatizálását foglalta magába Budapest egyik legszebb villanegyedében.

A tulajdonosok célja az volt, hogy otthonukat a legmodernebb technológiával szereljék fel, miközben megőrzik az egyszerű, intuitív kezelhetőséget. Az Apple HomeKit rendszerre építve hoztunk létre egy olyan megoldást, ami Siri hangvezérléssel, iPhone és Apple Watch alkalmazásokkal is kezelhető.

A projekt magában foglalta a teljes világítási rendszer cseréjét intelligens LED-ekre, a fűtés és klíma zónánkénti vezérlését, a biztonsági rendszer telepítését HD kamerákkal, valamint egy profi multiroom audio rendszer kiépítését.`,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    features: ["Apple HomeKit", "KNX rendszer", "Multiroom audio", "4K kamerarendszer", "Intelligens világítás", "Klímavezérlés", "Okos zárak", "Garázskapu vezérlés"],
    specs: {
      area: "350 m²",
      duration: "6 hét",
      devices: "120+ eszköz",
      year: "2023"
    },
    icon: Home
  },
  {
    id: "2",
    title: "Luxury Penthouse - Rózsadomb",
    category: "Lakóépület",
    description: "Exkluzív penthouse automatizálása panorámás redőnyvezérléssel, ambient világítással és integrált házi mozi rendszerrel.",
    fullDescription: `A Rózsadombon található luxus penthouse lakás automatizálása különleges kihívást jelentett a panorámás üvegfalak és a kifinomult belső design miatt.

A megoldás központjában az elektromos redőnyvezérlés állt, amely napszakhoz és fényviszonyokhoz igazodva automatikusan szabályozza a természetes fény mennyiségét. Az ambient világítási rendszer több mint 50 különböző jelenetet képes megjeleníteni.

A házi mozi rendszer 4K projektorral, Dolby Atmos hangrendszerrel és motoros vetítővászonnal készült, amely használaton kívül teljesen eltűnik a mennyezetben.`,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    features: ["Panoráma redőnyök", "Házi mozi", "Ambient világítás", "Hangvezérlés", "Dolby Atmos", "4K projektor", "Motoros függönyök"],
    specs: {
      area: "180 m²",
      duration: "4 hét",
      devices: "80+ eszköz",
      year: "2023"
    },
    icon: Home
  },
  {
    id: "3",
    title: "Irodaház - Váci út",
    category: "Kereskedelmi",
    description: "5000 m²-es irodaház épületfelügyeleti rendszere, beléptető rendszerrel és konferenciaterem automatizálással.",
    fullDescription: `Ez a nagyszabású projekt egy modern irodaház teljes épületfelügyeleti rendszerének kiépítését foglalta magába a Váci úti üzleti negyedben.

A BMS (Building Management System) rendszer valós időben figyeli és szabályozza az épület minden kritikus paraméterét: hőmérséklet, páratartalom, CO2 szint, világítás. Az energiagazdálkodási modul jelentős megtakarítást eredményezett.

A beléptető rendszer RFID kártyákkal és arcfelismeréssel működik, míg a 8 konferenciaterem mindegyike egyérintéses vezérléssel irányítható.`,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    features: ["BMS rendszer", "Beléptető rendszer", "Energiagazdálkodás", "Konferencia AV", "RFID", "Arcfelismerés", "CO2 monitoring"],
    specs: {
      area: "5000 m²",
      duration: "12 hét",
      devices: "500+ eszköz",
      year: "2023"
    },
    icon: Building2
  }
];

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  if (!project) {
    return {
      title: "Projekt nem található",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | megoldjukokosba`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex(p => p.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-[#060a12]">
      <Header />

      {/* Hero */}
      <section className="pt-24 relative">
        <div className="h-[50vh] md:h-[60vh] relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060a12] via-[#060a12]/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <Link
                href="/projektek"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00B1E1] transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                Vissza a projektekhez
              </Link>
              <span className="block text-[#00B1E1] text-sm font-medium mb-2">{project.category}</span>
              <h1 className="text-3xl md:text-5xl font-bold text-white">{project.title}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  {project.description}
                </p>
                {project.fullDescription.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-400 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Gallery */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-white mb-6">Galéria</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {project.gallery.map((img, idx) => (
                    <div key={idx} className="aspect-video rounded-xl overflow-hidden">
                      <img
                        src={img}
                        alt={`${project.title} - ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Specs */}
              <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-white mb-4">Projekt adatok</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Terület</span>
                    <span className="text-white font-medium">{project.specs.area}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Időtartam</span>
                    <span className="text-white font-medium">{project.specs.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Eszközök</span>
                    <span className="text-white font-medium">{project.specs.devices}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Év</span>
                    <span className="text-white font-medium">{project.specs.year}</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-white mb-4">Technológiák</h3>
                <div className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-300">
                      <Check className="w-4 h-4 text-[#00B1E1]" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-[#00B1E1]/20 to-[#0099c4]/20 border border-[#00B1E1]/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">Hasonló projektet tervez?</h3>
                <p className="text-gray-400 text-sm mb-4">Vegye fel velünk a kapcsolatot ingyenes konzultációért!</p>
                <Link
                  href="/kapcsolat"
                  className="block w-full bg-[#00B1E1] text-white text-center py-3 rounded-lg font-medium hover:bg-[#0099c4] transition-colors"
                >
                  Kapcsolatfelvétel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            {prevProject ? (
              <Link
                href={`/projektek/${prevProject.id}`}
                className="flex items-center gap-2 text-gray-400 hover:text-[#00B1E1] transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden md:inline">{prevProject.title}</span>
                <span className="md:hidden">Előző</span>
              </Link>
            ) : <div />}
            {nextProject ? (
              <Link
                href={`/projektek/${nextProject.id}`}
                className="flex items-center gap-2 text-gray-400 hover:text-[#00B1E1] transition-colors"
              >
                <span className="hidden md:inline">{nextProject.title}</span>
                <span className="md:hidden">Következő</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
