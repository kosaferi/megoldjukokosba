import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Okos otthon blog: hírek, tippek, útmutatók az intelligens otthon automatizálás világából. Apple HomeKit, világítás, biztonság témákban.",
  openGraph: {
    title: "Blog | megoldjukosba",
    description: "Hírek, tippek és útmutatók az okos otthon világából.",
  },
};

const blogPosts = [
  {
    id: 1,
    title: "Az okos otthon 5 legnagyobb előnye 2024-ben",
    excerpt: "Fedezze fel, hogyan teheti kényelmesebbé és hatékonyabbá otthonát az intelligens automatizálással. Az energiamegtakarítástól a biztonságig minden előnyt bemutatunk.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Okos Otthon",
    author: "Kovács Péter",
    date: "2024. január 15.",
    readTime: "5 perc"
  },
  {
    id: 2,
    title: "Apple HomeKit: Minden, amit tudni kell",
    excerpt: "Átfogó útmutató az Apple HomeKit rendszerhez. Megtudhatja, mely eszközök kompatibilisek és hogyan építhet fel egy tökéletesen integrált okos otthont.",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Technológia",
    author: "Nagy Anna",
    date: "2024. január 10.",
    readTime: "8 perc"
  },
  {
    id: 3,
    title: "Intelligens világítás: Hogyan válasszunk?",
    excerpt: "A megfelelő okos világítási rendszer kiválasztása kulcsfontosságú. Összehasonlítjuk a legnépszerűbb megoldásokat és segítünk a döntésben.",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Világítás",
    author: "Szabó László",
    date: "2024. január 5.",
    readTime: "6 perc"
  },
  {
    id: 4,
    title: "Otthoni biztonság: A modern megoldások",
    excerpt: "Az okos biztonsági rendszerek forradalmasították az otthonvédelmet. Ismerje meg a legújabb technológiákat a kameráktól az okos zárakig.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Biztonság",
    author: "Tóth Gábor",
    date: "2023. december 28.",
    readTime: "7 perc"
  },
  {
    id: 5,
    title: "Energiahatékonyság okos otthonban",
    excerpt: "Hogyan csökkentheti jelentősen energiafogyasztását intelligens automatizálással? Gyakorlati tippek és valós megtakarítási adatok.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Energia",
    author: "Molnár Eszter",
    date: "2023. december 20.",
    readTime: "5 perc"
  },
  {
    id: 6,
    title: "Multiroom audio rendszerek összehasonlítása",
    excerpt: "Sonos, Bose, Denon HEOS - melyiket válassza? Részletes összehasonlítás a legjobb multiroom hangrendszerekről.",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Audio/Video",
    author: "Horváth Tamás",
    date: "2023. december 15.",
    readTime: "10 perc"
  },
  {
    id: 7,
    title: "Okos zárak: Biztonság kulcs nélkül",
    excerpt: "Az okos zárak új szintre emelik az otthonbiztonságot. Melyik típust válassza és mire figyeljen telepítéskor?",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Biztonság",
    author: "Kiss Márton",
    date: "2023. december 10.",
    readTime: "6 perc"
  },
  {
    id: 8,
    title: "KNX vs. Zigbee: Melyiket válasszam?",
    excerpt: "A két legnépszerűbb okos otthon protokoll összehasonlítása. Előnyök, hátrányok és felhasználási területek.",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Technológia",
    author: "Varga Zsolt",
    date: "2023. december 5.",
    readTime: "8 perc"
  },
  {
    id: 9,
    title: "Okos redőnyök és árnyékolók",
    excerpt: "Automatikus redőnyvezérlés a maximális kényelem és energiahatékonyság érdekében. Teljes útmutató a lehetőségekről.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Okos Otthon",
    author: "Fekete Réka",
    date: "2023. november 28.",
    readTime: "5 perc"
  }
];

const categories = ["Összes", "Okos Otthon", "Technológia", "Világítás", "Biztonság", "Audio/Video"];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#060a12]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#0a0f1a] to-[#060a12]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeInDown">
            Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fadeInUp">
            Hírek, tippek és útmutatók az okos otthon világából
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                type="button"
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
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

      {/* Featured Post */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Link href={`/blog/${blogPosts[0].id}`} className="block bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden hover-lift animate-fadeIn hover:border-[#00B1E1]/50 transition-colors">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111827] hidden md:block" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#00B1E1] text-white text-xs px-3 py-1 rounded-full">
                    Kiemelt
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-[#00B1E1] text-sm font-medium mb-2">{blogPosts[0].category}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-400 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {blogPosts[0].author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <span className="flex items-center gap-2 text-[#00B1E1] font-medium w-fit">
                  Olvasd tovább
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group bg-[#111827] border border-gray-800 rounded-xl overflow-hidden hover-lift hover:border-[#00B1E1]/50 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#00B1E1]/90 text-white text-xs px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00B1E1] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button
              type="button"
              className="bg-[#111827] border border-gray-700 text-gray-300 px-8 py-3 rounded-lg font-medium hover:border-[#00B1E1] hover:text-[#00B1E1] transition-all duration-300"
            >
              További cikkek betöltése
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-[#00B1E1]/10 to-[#0099c4]/10 border-y border-[#00B1E1]/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Iratkozzon fel hírlevelünkre!
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Legyen naprakész az okos otthon legújabb trendjeivel és tippjeivel.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-mail cím"
              className="flex-1 px-4 py-3 bg-[#0a0f1a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-[#00B1E1] focus:border-transparent transition-all"
            />
            <button
              type="submit"
              className="bg-[#00B1E1] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0099c4] transition-colors whitespace-nowrap"
            >
              Feliratkozás
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
