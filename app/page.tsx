'use client';
import React, { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', service: 'web_build', details: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mlgkjqed', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Sistemde bir yoğunluk var kanka, formu iletemedik.");
      }
    } catch (error) {
      alert("Bağlantı hatası oluştu!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="min-h-screen text-slate-800 font-sans selection:bg-blue-600 selection:text-white bg-[#f8fafc] relative"
      style={{ 
        backgroundImage: 'radial-gradient(#cbd5e1 1.2px, transparent 1.2px)', 
        backgroundSize: '20px 20px' 
      }}
    >
      
      {/* Üst Menü / Navbar */}
      <header className="border-b border-blue-200/60 bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl">✨</span>
            <h1 className="text-base font-black tracking-wider text-slate-950">
              MIRAMI | <span className="text-blue-600">WEB & MOBİL UYGULAMA YAPMA OFİSİ</span>
            </h1>
          </div>
          <a href="#order-form" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md">
            Hemen Talep Gönder
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 relative z-10">
        {/* Giriş Bölümü (Hero) */}
        <section className="text-center mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-blue-700 border border-blue-300 px-4 py-1.5 rounded-full bg-blue-100 shadow-sm inline-block">
            ⚡ Web Sitesi Açma, Yapay Zeka Modülleri ve Akıllı Bot Sistemleri
          </span>
          <h2 className="text-3xl md:text-5xl font-black mt-6 mb-6 tracking-tight text-slate-950 leading-tight">
            Hayalindeki Web Sitesini ve <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-800 bg-clip-text text-transparent">
              Mobil Uygulamayı İnşa Edelim
            </span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            İster esnaf dükkanın için hızlı bir web sitesi açma hizmeti, ister sade ve şık web tasarımı, yapay zeka entegrasyonları veya süreçleri otomatikleştiren bot yazdırma çözümleri...
          </p>
        </section>

        {/* 🌟 ÖZEL VİTRİN: SATILIK MOBİL UYGULAMA (MIRAMI) */}
        <section className="mb-16 bg-white border-2 border-pink-400 rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-[10px] font-black uppercase tracking-widest px-5 py-2 rounded-bl-2xl shadow-sm">
            SATILIK HAZIR MOBİL UYGULAMA
          </div>
          
          <div className="flex justify-between items-start mb-4 mt-2">
            <span className="bg-pink-50 text-pink-700 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg border border-pink-200">
              Canlı APK Demosu Hazır / Tüm Haklarıyla Devir
            </span>
            <div>
              <span className="text-emerald-600 font-mono font-black text-2xl md:text-3xl block drop-shadow-sm">5.000 TL</span>
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-black text-slate-950 mb-4 tracking-tight">
            📱 MiraMi: Komple Bebek Takip & Akıllı Asistan Uygulaması
          </h3>
          
          <div className="mb-6 rounded-2xl overflow-hidden border border-pink-100 bg-slate-50 shadow-inner">
            <img 
              src="/mirami-banner.jpg" 
              alt="MiraMi Smart Infant Development Tracker Infographic" 
              className="w-full h-auto block mx-auto"
            />
          </div>

          <p className="text-slate-600 text-sm mb-4 leading-relaxed">
            Mobil uygulama satın alma arayışında olan girişimciler için harika fırsat! Reklam ve premium üyelik modelleriyle gelir yaratmaya hazır, eksiksiz kaynak kodları ve tüm mülkiyet haklarıyla teslim edilen dev proje.
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-slate-100">
            <span className="text-xs text-slate-500 font-semibold">Bu fiyata tüm kaynak kodları, tasarım assetleri ve mülkiyet dahildir.</span>
            <a href="#order-form" onClick={() => setFormData({...formData, service: 'mirami', details: 'MiraMi Hazır Satılık Mobil Uygulama projesini incelemek ve satın almak istiyorum.'})} className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-md inline-flex items-center gap-1 cursor-pointer w-full sm:w-auto justify-center">
              APK Demosunu İste & Satın Al &rarr;
            </a>
          </div>
        </section>

        {/* 🛠️ AJANS HİZMETLERİMİZ */}
        <section className="mb-16">
          <h3 className="text-2xl font-black text-slate-900 mb-2 text-center tracking-tight">Hizmetlerimiz</h3>
          <p className="text-slate-500 text-xs text-center mb-10 font-medium">İhtiyacın olan çözümü seç, Google'da rakiplerinin önüne geç kanka.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 1. Web Sitesi Açma */}
            <div className="bg-white rounded-2xl border border-blue-100 shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <div>
                <div className="h-48 relative overflow-hidden bg-slate-900">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Web Sitesi Yapma" className="w-full h-full object-cover opacity-85" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-500/20 self-start mb-1">Next.js & Hızlı Kurulum</span>
                    <div className="font-bold text-white text-sm">Web Sitesi Açma</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-base font-bold text-slate-900">Web Sitesi Yapma</h4>
                    <span className="text-emerald-600 font-mono font-black text-sm">2.000 TL</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">İşletmeniz veya şahsınız için modern altyapılı web sitesi açma hizmeti sunuyoruz. Google dostu kodlama ile haritalarda ve aramalarda hızla yerinizi alın.</p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a href="#order-form" onClick={() => setFormData({...formData, service: 'web_build', details: 'Hızlı ve modern bir web sitesi açma / yapma hizmeti almak istiyorum.'})} className="text-xs text-blue-600 font-bold uppercase block text-center border border-blue-200 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all">Talep Oluştur &rarr;</a>
              </div>
            </div>

            {/* 2. Mobil Uygulama Yapma */}
            <div className="bg-white rounded-2xl border border-blue-100 shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <div>
                <div className="h-48 relative overflow-hidden bg-slate-900">
                  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" alt="Mobil Uygulama Yapma" className="w-full h-full object-cover opacity-85" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-500/20 self-start mb-1">React Native & Expo</span>
                    <div className="font-bold text-white text-sm">Mobil Uygulama Geliştirme</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-base font-bold text-slate-900">Mobil Uygulama Yapma</h4>
                    <span className="text-emerald-600 font-mono font-black text-sm">5.000 TL</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">Fikirlerinizi hem Android hem de iOS marketlerde yayınlanacak yüksek performanslı projelere dönüştürüyoruz. Özel mobil uygulama yapma uzmanlığımızla tanışın.</p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a href="#order-form" onClick={() => setFormData({...formData, service: 'mobile_app', details: 'Fikrime özel sıfırdan mobil uygulama yapma hizmeti almak istiyorum.'})} className="text-xs text-blue-600 font-bold uppercase block text-center border border-blue-200 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all">Talep Oluştur &rarr;</a>
              </div>
            </div>

            {/* 3. Yapay Zeka Entegrasyonları */}
            <div className="bg-white rounded-2xl border border-blue-100 shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <div>
                <div className="h-48 relative overflow-hidden bg-slate-900">
                  <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" alt="Yapay Zeka" className="w-full h-full object-cover opacity-85" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/20 self-start mb-1">OpenAI & LLM Entegrasyonu</span>
                    <div className="font-bold text-white text-sm">Yapay Zeka Çözümleri</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-base font-bold text-slate-900">Yapay Zeka Entegrasyonları</h4>
                    <span className="text-emerald-600 font-mono font-black text-sm">3.000 TL</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">Web sitenize veya mobil uygulamanıza müşterilerle konuşan akıllı chatbotlar, GPT modülleri ve otomatik iş yapan yapay zeka sistemleri bağlıyoruz.</p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a href="#order-form" onClick={() => setFormData({...formData, service: 'ai', details: 'Sistemlerime yapay zeka modülleri entegre ettirmek istiyorum.'})} className="text-xs text-blue-600 font-bold uppercase block text-center border border-blue-200 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all">Talep Oluştur &rarr;</a>
              </div>
            </div>

            {/* 4. Bot Yazdırma */}
            <div className="bg-white rounded-2xl border border-blue-100 shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <div>
                <div className="h-48 relative overflow-hidden bg-slate-900">
                  <img src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=800&q=80" alt="Bot Yazdırma" className="w-full h-full object-cover opacity-85" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/20 self-start mb-1">Node.js Otomasyon</span>
                    <div className="font-bold text-white text-sm">Akıllı Otomasyon</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-base font-bold text-slate-900">Bot Yazdırma</h4>
                    <span className="text-emerald-600 font-mono font-black text-sm">2.500 TL</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">Sürekli tekrarladığınız manuel işleri bota bağlayarak zamandan tasarruf edin. Veri çekme, otomatik paylaşım ve süreçler için tam entegre bot yazdırma hizmeti.</p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a href="#order-form" onClick={() => setFormData({...formData, service: 'bot', details: 'İş süreçlerimi hızlandıracak bir bot yazdırma talebim var.'})} className="text-xs text-blue-600 font-bold uppercase block text-center border border-blue-200 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all">Talep Oluştur &rarr;</a>
              </div>
            </div>

            {/* 5. Web Tasarımı */}
            <div className="bg-white rounded-2xl border border-blue-100 shadow-lg overflow-hidden flex flex-col justify-between md:col-span-2 max-w-md mx-auto w-full hover:shadow-xl transition-all duration-300">
              <div>
                <div className="h-48 relative overflow-hidden bg-slate-900">
                  <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80" alt="Web Tasarımı" className="w-full h-full object-cover opacity-85" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-500/20 self-start mb-1">Sade Tasarım</span>
                    <div className="font-bold text-white text-sm">Web Tasarımı</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-base font-bold text-slate-900">Web Tasarımı</h4>
                    <span className="text-emerald-600 font-mono font-black text-sm">1.500 TL</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">Eski ve yavaş siteleri baştan aşağı yeniliyoruz. Göze hitap eden, müşteriyi kaçırmayan modern web tasarımı trendleriyle sitenizi canlandırın.</p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a href="#order-form" onClick={() => setFormData({...formData, service: 'web_design', details: 'Mevcut sitem için web tasarımı çalışması talep ediyorum.'})} className="text-xs text-blue-600 font-bold uppercase block text-center border border-blue-200 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all">Talep Oluştur &rarr;</a>
              </div>
            </div>

          </div>
        </section>

        {/* Sipariş ve Talep Alma Formu */}
        <section id="order-form" className="bg-white border border-blue-200 rounded-3xl p-8 md:p-10 shadow-xl relative z-10">
          <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">İletişime Geçin & Sipariş Verin</h3>
          <p className="text-slate-500 text-xs md:text-sm text-center mb-8 font-medium">
            Formu doldurun, projenizi hemen konuşup fiyatlandıralım kanka. En kısa sürede geri dönüş sağlıyoruz!
          </p>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 p-6 rounded-xl text-center font-semibold">
              🎉 Harika! Talebiniz doğrudan e-posta kutumuza ulaştı. Detayları konuşmak üzere sizinle en kısa sürede iletişime geçeceğiz kanka!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Adınız / Unvanınız</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-blue-500 focus:bg-white focus:outline-none transition-all text-slate-900 placeholder-slate-400" placeholder="Örn: Ahmet Yılmaz" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">E-Posta Adresiniz</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-blue-500 focus:bg-white focus:outline-none transition-all text-slate-900 placeholder-slate-400" placeholder="name@example.com" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">İhtiyacınız Olan Çözüm</label>
                <select value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-blue-500 focus:outline-none transition-all text-slate-900">
                  <option value="web_build">🌐 Web Sitesi Açma ve Yapma (2.000 TL)</option>
                  <option value="mobile_app">📱 Mobil Uygulama Yapma (5.000 TL)</option>
                  <option value="ai">🧠 Yapay Zeka Entegrasyonları (3.000 TL)</option>
                  <option value="bot">🤖 Bot Yazdırma Çözümleri (2.500 TL)</option>
                  <option value="web_design">🎨 Web Tasarımı Hizmeti (1.500 TL)</option>
                  <option value="mirami">✨ MiraMi Satılık Mobil Uygulama Satın Alma (5.000 TL)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Proje Detayları</label>
                <textarea required rows={4} value={formData.details} onChange={(e) => setFormData({...formData, details: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-blue-500 focus:bg-white focus:outline-none transition-all text-slate-900 resize-none placeholder-slate-400" placeholder="İstediğiniz projenin detaylarından kısaca bahsedin..." />
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:from-blue-400 disabled:to-indigo-400 text-white font-bold py-4 rounded-xl text-xs uppercase tracking-widest transition-all cursor-pointer shadow-md">
                {isSubmitting ? 'Talebiniz İletiliyor...' : 'Talebi Gönder'}
              </button>
            </form>
          )}
        </section>
      </main>

      <footer className="border-t border-blue-200 py-8 text-center text-[10px] font-mono text-slate-400 bg-white relative z-10">
        &copy; 2026 MIRAMI WEB & MOBİL UYGULAMA YAPMA OFİSİ. TÜM SİSTEMLER EN MODERN YAZILIM STANDARTLARIYLA ÇALIŞMAKTADIR.
      </footer>
    </div>
  );
}
