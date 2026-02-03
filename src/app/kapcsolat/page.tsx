"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

// Note: For client components, metadata should be in a separate layout or use generateMetadata in a parent

export default function KapcsolatPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    serviceType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert(data.error || "Hiba történt az üzenet küldése közben.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Hiba történt az üzenet küldése közben. Kérjük, próbálja újra később.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#060a12]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#0a0f1a] to-[#060a12]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Kapcsolatfelvétel
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Kérdése van? Szeretne árajánlatot kérni? Vegye fel velünk a kapcsolatot!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-white mb-8">
                Elérhetőségek
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00B1E1]/10 border border-[#00B1E1]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#00B1E1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Telefon</h3>
                    <a href="tel:+36706181725" className="text-[#00B1E1] hover:underline">
                      +36 70 618 1725
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00B1E1]/10 border border-[#00B1E1]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#00B1E1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">E-mail</h3>
                    <a href="mailto:info@megoldjukokosba.hu" className="text-[#00B1E1] hover:underline">
                      info@megoldjukokosba.hu
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00B1E1]/10 border border-[#00B1E1]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#00B1E1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Cím</h3>
                    <p className="text-gray-400">
                      5122 Jászdózsa<br />
                      Tulsó-Tarnapart utca 2.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00B1E1]/10 border border-[#00B1E1]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#00B1E1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Nyitvatartás</h3>
                    <p className="text-gray-400">
                      Hétfő - Péntek: 9:00 - 18:00<br />
                      Szombat: 9:00 - 13:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Küldjön üzenetet
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Köszönjük üzenetét!
                    </h3>
                    <p className="text-gray-400">
                      Hamarosan felvesszük Önnel a kapcsolatot.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Név *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#0a0f1a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-[#00B1E1] focus:border-transparent transition-all"
                          placeholder="Az Ön neve"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          E-mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#0a0f1a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-[#00B1E1] focus:border-transparent transition-all"
                          placeholder="pelda@email.hu"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                          Telefonszám
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#0a0f1a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-[#00B1E1] focus:border-transparent transition-all"
                          placeholder="+36 30 123 4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="serviceType" className="block text-sm font-medium text-gray-300 mb-2">
                          Szolgáltatás típusa
                        </label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#0a0f1a] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-[#00B1E1] focus:border-transparent transition-all"
                        >
                          <option value="">Válasszon...</option>
                          <option value="okos-otthon">Okos Otthon</option>
                          <option value="vilagitas">Intelligens Világítás</option>
                          <option value="klimavezerles">Klímavezérlés</option>
                          <option value="biztonsag">Biztonsági Rendszerek</option>
                          <option value="kamera">Kamerarendszerek</option>
                          <option value="audio-video">Audio/Video</option>
                          <option value="halozat">Hálózat</option>
                          <option value="egyeb">Egyéb</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Tárgy *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0a0f1a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-[#00B1E1] focus:border-transparent transition-all"
                        placeholder="Miben segíthetünk?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Üzenet *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0a0f1a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-[#00B1E1] focus:border-transparent transition-all resize-none"
                        placeholder="Írja le részletesen, miben segíthetünk..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#00B1E1] text-white py-4 rounded-lg font-semibold hover:bg-[#0099c4] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Küldés...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Üzenet Küldése
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
