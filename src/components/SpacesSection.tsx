import Link from "next/link";

export default function SpacesSection() {
  return (
    <section className="grid lg:grid-cols-2">
      {/* Connected Living Spaces */}
      <div className="relative min-h-[500px] flex items-center justify-center p-8 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/80 to-[#0a0f1a]/60" />
        <div className="relative z-10 text-center text-white max-w-md">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Összekapcsolt Lakóterek
          </h3>
          <p className="mb-6 text-gray-300">
            Alakítsa otthonát okos szentéllyé a világítás, biztonság, klíma és AV zökkenőmentes
            irányításával. Tapasztalja meg az automatizálás kényelmét, ami működik, egyszerűen!
          </p>
          <Link
            href="/kapcsolat"
            className="inline-block bg-[#00B1E1] text-white px-6 py-3 rounded-lg hover:bg-[#0099c4] transition-colors"
          >
            Kapcsolat
          </Link>
        </div>
      </div>

      {/* Connected Commercial Spaces */}
      <div className="relative min-h-[500px] flex items-center justify-center p-8 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/80 to-[#0a0f1a]/60" />
        <div className="relative z-10 text-center text-white max-w-md">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Összekapcsolt Kereskedelmi Terek
          </h3>
          <p className="mb-6 text-gray-300">
            Ugyanazt a küldetést alkalmazzuk kereskedelmi vezérlési környezetekben, a kaputelefonoktól
            és beléptető rendszerektől a társasházakban, a vendéglátóhelyek teljes környezetvezérléséig
          </p>
          <Link
            href="/kapcsolat"
            className="inline-block bg-[#00B1E1] text-white px-6 py-3 rounded-lg hover:bg-[#0099c4] transition-colors"
          >
            Kapcsolat
          </Link>
        </div>
      </div>
    </section>
  );
}
