export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')`,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/80 via-[#0a0f1a]/70 to-[#0a0f1a]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 pt-16">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider">
          <span className="block text-white/95 drop-shadow-lg animate-fadeInDown">INTELLIGENS</span>
          <span className="block mt-2 animate-fadeInUp">
            <span className="text-[#00B1E1] drop-shadow-lg">AUTOMATIZÁLÁSI</span>{" "}
            <span className="text-white drop-shadow-lg">RENDSZEREK</span>
          </span>
        </h1>
        <p className="mt-8 text-xl text-gray-300 max-w-2xl mx-auto animate-fadeIn delay-300">
          Alakítsa otthonát okos szentéllyé a legmodernebb technológiával
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-400">
          <a
            href="/kapcsolat"
            className="bg-[#00B1E1] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0099c4] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00B1E1]/30"
          >
            Ingyenes Konzultáció
          </a>
          <a
            href="/szolgaltatasok"
            className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 hover:border-white/50"
          >
            Szolgáltatások
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#00B1E1] rounded-full" />
        </div>
      </div>
    </section>
  );
}
