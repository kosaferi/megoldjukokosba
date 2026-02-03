import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { notFound } from "next/navigation";

const blogPosts = [
  {
    id: "1",
    title: "Az okos otthon 5 legnagyobb előnye 2024-ben",
    excerpt: "Fedezze fel, hogyan teheti kényelmesebbé és hatékonyabbá otthonát az intelligens automatizálással.",
    content: `Az okos otthon technológia 2024-ben már nem a jövő, hanem a jelen. Egyre több háztartás ismeri fel az intelligens automatizálás előnyeit, és dönt amellett, hogy modernizálja otthonát.

## 1. Energiamegtakarítás

Az intelligens termosztátok és világítási rendszerek akár 30%-kal is csökkenthetik az energiafogyasztást. A rendszer megtanulja szokásainkat és automatikusan optimalizálja a fogyasztást.

## 2. Fokozott biztonság

Az okos biztonsági rendszerek valós idejű értesítéseket küldenek, ha bármilyen szokatlan aktivitást észlelnek. A kamerák, mozgásérzékelők és okos zárak együttműködve védik otthonunkat.

## 3. Kényelem és komfort

Képzelje el, hogy hazaérkezéskor automatikusan bekapcsol a világítás, a megfelelő hőmérsékletre áll a fűtés, és kedvenc zenéje szól. Az okos otthon mindezt valósággá teszi.

## 4. Távoli hozzáférés

Bárhol is legyen a világban, okostelefonjáról ellenőrizheti és irányíthatja otthonát. Elfelejtette lekapcsolni a villanyt? Nem probléma!

## 5. Értéknövelés

Az okos otthon technológia jelentősen növeli az ingatlan értékét. A modern vásárlók előnyben részesítik az intelligens rendszerekkel felszerelt otthonokat.

## Összegzés

Az okos otthon beruházás, ami hosszú távon megtérül. Ha Ön is szeretne csatlakozni az okos otthonok világához, vegye fel velünk a kapcsolatot ingyenes konzultációért!`,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    category: "Okos Otthon",
    author: "Kovács Péter",
    authorRole: "Okos Otthon Szakértő",
    date: "2024. január 15.",
    readTime: "5 perc"
  },
  {
    id: "2",
    title: "Apple HomeKit: Minden, amit tudni kell",
    excerpt: "Átfogó útmutató az Apple HomeKit rendszerhez.",
    content: `Az Apple HomeKit az egyik legnépszerűbb okos otthon platform, amely kiváló biztonságot és egyszerű használatot kínál.

## Mi az Apple HomeKit?

A HomeKit az Apple saját okos otthon keretrendszere, amely lehetővé teszi különböző gyártók eszközeinek egységes kezelését iPhone, iPad, Mac vagy Apple Watch segítségével.

## Főbb előnyök

### Biztonság
Az Apple kiemelten kezeli a biztonságot. Minden kommunikáció végpontok közötti titkosítással védett.

### Siri integráció
"Hey Siri, kapcsold le a nappalit" - ilyen egyszerű. A hangvezérlés természetessé teszi az irányítást.

### Automatizálások
Komplex automatizálásokat hozhat létre, amelyek időhöz, helyszínhez vagy más eseményekhez kötődnek.

## Kompatibilis eszközök

Több ezer HomeKit-kompatibilis eszköz érhető el:
- Philips Hue világítás
- Aqara szenzorok
- Eve termosztátok
- Logitech kamerák
- És még sok más!

## Hogyan kezdjen hozzá?

1. Szerezzen be egy HomeKit-kompatibilis eszközt
2. Nyissa meg a Home alkalmazást iPhone-ján
3. Szkennelje be az eszköz QR kódját
4. Kész is!

Szakértő segítségre van szüksége? Keressen minket!`,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    category: "Technológia",
    author: "Nagy Anna",
    authorRole: "Apple Specialista",
    date: "2024. január 10.",
    readTime: "8 perc"
  },
  {
    id: "3",
    title: "Intelligens világítás: Hogyan válasszunk?",
    excerpt: "A megfelelő okos világítási rendszer kiválasztása kulcsfontosságú.",
    content: `Az intelligens világítás az okos otthon egyik legfontosabb eleme. Nemcsak kényelmet biztosít, de jelentős energiamegtakarítást is eredményezhet.

## Miért érdemes okos világítást választani?

Az intelligens világítási rendszerek lehetővé teszik:
- Távoli vezérlést okostelefonról
- Automatikus be- és kikapcsolást
- Fényerő és színhőmérséklet szabályozást
- Energiafogyasztás monitorozását

## Népszerű megoldások

### Philips Hue
A legismertebb márka, széles termékválasztékkal és kiváló alkalmazással.

### IKEA TRÅDFRI
Megfizethető belépő szint, HomeKit kompatibilis.

### Nanoleaf
Dekoratív panelek egyedi formákban és színekben.

## Mire figyeljünk?

1. **Kompatibilitás**: Ellenőrizze, hogy az eszköz működik-e a meglévő rendszerével
2. **Fényforrás típusa**: LED-et válasszon az energiahatékonyság érdekében
3. **Színhőmérséklet**: A meleg fehér pihentetőbb, a hideg fehér koncentrációt segít

## Következtetés

A megfelelő világítási rendszer kiválasztása egyéni igényektől függ. Szívesen segítünk a döntésben!`,
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    category: "Világítás",
    author: "Szabó László",
    authorRole: "Világítástechnikai Mérnök",
    date: "2024. január 5.",
    readTime: "6 perc"
  }
];

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return {
      title: "Cikk nem található",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | megoldjukokosba Blog`,
      description: post.excerpt,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params;
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter(p => p.id !== id).slice(0, 2);

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content.split('\n').map((line, idx) => {
      if (line.startsWith('## ')) {
        return <h2 key={idx} className="text-2xl font-bold text-white mt-8 mb-4">{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={idx} className="text-xl font-semibold text-white mt-6 mb-3">{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('- ')) {
        return <li key={idx} className="text-gray-300 ml-4">{line.replace('- ', '')}</li>;
      }
      if (line.match(/^\d+\./)) {
        return <li key={idx} className="text-gray-300 ml-4 list-decimal">{line.replace(/^\d+\.\s*/, '')}</li>;
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={idx} className="text-white font-semibold mt-2">{line.replace(/\*\*/g, '')}</p>;
      }
      if (line.trim() === '') {
        return <br key={idx} />;
      }
      return <p key={idx} className="text-gray-400 leading-relaxed">{line}</p>;
    });
  };

  return (
    <main className="min-h-screen bg-[#060a12]">
      <Header />

      {/* Hero */}
      <section className="pt-24">
        <div className="h-[40vh] md:h-[50vh] relative overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060a12] via-[#060a12]/60 to-transparent" />
        </div>
      </section>

      {/* Content */}
      <section className="py-12 -mt-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00B1E1] transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Vissza a bloghoz
              </Link>

              <span className="inline-block bg-[#00B1E1] text-white text-xs px-3 py-1 rounded-full mb-4">
                {post.category}
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime} olvasás
                </span>
              </div>
            </div>

            {/* Article Content */}
            <article className="bg-[#111827] border border-gray-800 rounded-2xl p-8 md:p-12">
              <div className="prose prose-invert max-w-none">
                {renderContent(post.content)}
              </div>

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Megosztás
                  </span>
                  <div className="flex gap-3">
                    <button type="button" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#1877f2] hover:text-white transition-colors">
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button type="button" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#1da1f2] hover:text-white transition-colors">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button type="button" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#0077b5] hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Author */}
            <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 mt-8 flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00B1E1] to-[#0099c4] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {post.author.charAt(0)}
              </div>
              <div>
                <h4 className="text-white font-semibold">{post.author}</h4>
                <p className="text-gray-400 text-sm">{post.authorRole}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">További cikkek</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.id}`}
                className="group bg-[#111827] border border-gray-800 rounded-xl overflow-hidden hover:border-[#00B1E1]/50 transition-all"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[#00B1E1] text-sm">{relatedPost.category}</span>
                  <h3 className="text-lg font-bold text-white mt-2 group-hover:text-[#00B1E1] transition-colors">
                    {relatedPost.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
