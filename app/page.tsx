'use client';
import React, { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', service: 'mobile_app', details: '' });
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
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      {/* Üst Menü / Navbar */}
      <header className="border-b border-blue-100 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl">⚙️</span>
            <h1 className="text-lg font-bold tracking-wider text-slate-900">
              WEB APP <span className="text-blue-600">CODE HUB</span>
            </h1>
          </div>
          <a href="#order-form" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-600/10">
            Hemen Talep Gönder
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Giriş Bölümü (Hero) */}
        <section className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 border border-blue-200 px-3 py-1 rounded-full bg-blue-50">
            Lansmana Özel Şok Fiyatlarla Yazılım Ofisi
          </span>
          <h2 className="text-3xl md:text-5xl font-black mt-6 mb-6 tracking-tight text-slate-950 leading-tight">
            Yüksek Performanslı Web, Mobil Uygulama <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              ve Otomasyon Çözümleri
            </span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            İhtiyacınız olan tüm dijital altyapıyı modern Next.js ve React Native mimarileriyle, piyasanın en rekabetçi fiyatlarıyla anahtar teslim hazırlıyoruz.
          </p>
        </section>

        {/* 🌟 BAĞIMSIZ ÖZEL VİTRİN: SATILIK HAZIR MOBİL UYGULAMA (MIRAMI) */}
        <section className="mb-20 bg-white border-2 border-pink-400 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-pink-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-xl shadow-sm">
            ÖZEL HAZIR MOBİL PROJE (SATILIK)
          </div>
          
          <div className="flex justify-between items-start mb-4 mt-2">
            <span className="bg-pink-50 text-pink-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md border border-pink-200">
              Canlı APK Demosu Hazır / Tüm Haklarıyla Devir
            </span>
            <div>
              <span className="text-emerald-600 font-mono font-black text-2xl md:text-3xl block">5.000 TL</span>
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-black text-slate-950 mb-4">
            📱 MiraMi: Komple Bebek Takip & Akıllı Asistan Uygulaması
          </h3>
          
          {/* MiraMi Ana Görsel Alanı */}
          <div className="mb-6 rounded-xl overflow-hidden border border-pink-100 bg-slate-50 shadow-sm">
            <img 
              src="/mirami-banner.jpg" 
              alt="MiraMi Smart Infant Development Tracker Infographic" 
              className="w-full h-auto block mx-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if(parent) {
                  const div = document.createElement('div');
                  div.className = 'p-8 text-center text-sm bg-pink-50 border border-pink-200 text-pink-800 font-mono';
                  div.innerText = '⚠️ Klasör Hatası Kontrolü: Bilgisayarındaki "1000172330.jpg" resmini projenin "public/" klasörünün içine "mirami-banner.jpg" adıyla attığından emin ol kanka!';
                  parent.appendChild(div);
                }
              }}
            />
          </div>

          <p className="text-slate-600 text-sm mb-4 leading-relaxed">
            Mobil uygulama pazarına girip anında reklam ve abonelik geliri elde etmek isteyen girişimciler için kaçırılmayacak eksiksiz bir projedir. Canlı APK demosu mevcuttur, test etmek için aşağıdaki formdan talep gönderebilirsiniz!
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-slate-100">
            <span className="text-xs text-slate-500 font-medium">Bu fiyata projenin tüm kaynak kodları ve mülkiyeti dahildir.</span>
            <a href="#order-form" onClick={() => setFormData({...formData, service: 'mirami', details: 'MiraMi Hazır Mobil Uygulama projesini 5.000 TL lansman fiyatıyla satın almak ve canlı APK demosunu test etmek istiyorum.'})} className="bg-pink-600 hover:bg-pink-700 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-all shadow-md shadow-pink-600/10 inline-flex items-center gap-1 cursor-pointer w-full sm:w-auto justify-center">
              APK Demosunu İste & Satın Al &rarr;
            </a>
          </div>
        </section>

        {/* 🛠️ AJANS HİZMETLERİMİZ */}
        <section className="mb-20">
          <h3 className="text-2xl font-black text-slate-900 mb-8 text-center tracking-tight">Gelişmiş Yazılım ve Tasarım Hizmetlerimiz</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 1. Sıfırdan Mobil Uygulama Yapımı (Daha Profesyonel Yazılımcı Görseliyle Değişti) */}
            <div className="bg-white rounded-2xl border border-blue-100 shadow-md overflow-hidden flex flex-col justify-between">
              <div>
                <div className="h-48 relative overflow-hidden bg-slate-900">
                  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" alt="Mobil Uygulama Yapımı" className="w-full h-full object-cover opacity-85" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded self-start mb-1">React Native & Expo</span>
                    <div className="font-bold text-white text-sm">Sıfırdan Özel Mobil Uygulama Geliştirme</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-base font-bold text-slate-900">Sıfırdan Mobil Uygulama Yapımı</h4>
                    <span className="text-emerald-600 font-mono font-black text-sm">5.000 TL</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">Fikirlerinizi Android ve iOS marketlerde yer alacak yüksek performanslı, modern mobil uygulamalara dönüştürüyoruz.</p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a href="#order-form" onClick={() => setFormData({...formData, service: 'mobile_app', details: 'Sıfırdan özel mobil uygulama yaptırmak istiyorum.'})} className="text-xs text-blue-600 font-bold uppercase block text-center border border-blue-200 py-2 rounded-lg bg-blue-50/50 hover:bg-blue-50 transition-colors">Talep Oluştur &rarr;</a>
              </div>
            </div>

            {/* 2. Sıfırdan Web Sitesi Yapımı */}
            <div className="bg-white rounded-2xl border border-blue-100 shadow-md overflow-hidden flex flex-col justify-between">
              <div>
                <div className="h-48 relative overflow-hidden bg-slate-900">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Web Sitesi Yapımı" className="w-full h-full object-cover opacity-85" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 bg-indigo-950/80 px-2 py-0.5 rounded self-start mb-1">Next.js & Full-Stack</span>
                    <div className="font-bold text-white text-sm">Kurumsal & E-Ticaret Çözümleri</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-base font-bold text-slate-900">Kurumsal Web Sitesi Yapımı</h4>
                    <span className="text-emerald-600 font-mono font-black text-sm">2.000 TL</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">Şirketiniz veya projeniz için sıfırdan yönetim panelli, SEO uyumlu begging hızlı modern web siteleri inşa ediyoruz.</p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a href="#order-form" onClick={() => setFormData({...formData, service: 'web_build', details: 'Sıfırdan kurumsal web sitesi yapımı hizmeti almak istiyorum.'})} className="text-xs text-blue-600 font-bold uppercase block text-center border border-blue-200 py-2 rounded-lg bg-blue-50/50 hover:bg-blue-50 transition-colors">Talep Oluştur &rarr;</a>
              </div>
            </div>

            {/* 3. Web Tasarım, Geliştirme ve Yenileme */}
            <div className="bg-white rounded-2xl border border-blue-100 shadow-md overflow-hidden flex flex-col justify-between">
              <div>
                <div className="h-48 relative overflow-hidden bg-slate-900">
                  <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80" alt="Web Tasarım Geliştirme" className="w-full h-full object-cover opacity-85" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400 bg-purple-950/80 px-2 py-0.5 rounded self-start mb-1">UI/UX & Modernizasyon</span>
                    <div className="font-bold text-white text-sm">Tasarım Değişimi & Sitenizi Geliştirme</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-base font-bold text-slate-900">Web Tasarım & Arayüz Yenileme</h4>
                    <span className="text-emerald-600 font-mono font-black text-sm">1.500 TL</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">Mevcut web sitenizin eskiyen yüzünü tamamen yeniliyor, modern tasarım trendlerine göre baştan geliştirip canlandırıyoruz.</p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a href="#order-form" onClick={() => setFormData({...formData, service: 'web_design', details: 'Mevcut web sitemin tasarımını yenilemek ve geliştirmek istiyorum.'})} className="text-xs text-blue-600 font-bold uppercase block text-center border border-blue-200 py-2 rounded-lg bg-blue-50/50 hover:bg-blue-50 transition-colors">Talep Oluştur &rarr;</a>
              </div>
            </div>

            {/* 4. Otomasyon Sistemleri ve Bot Yapımı */}
            <div className="bg-white rounded-2xl border border-blue-100 shadow-md overflow-hidden flex flex-col justify-between">
              <div>
                <div className="h-48 relative overflow-hidden bg-slate-900">
                  <img src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=800&q=80" alt="Otomasyon ve Bot" className="w-full h-full object-cover opacity-85" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded self-start mb-1">Node.js Bot Altyapısı</span>
                    <div className="font-bold text-white text-sm">Süreç Otomasyonu & Veri Kazıma</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-base font-bold text-slate-900">Süreç Otomasyonu & Bot Yapımı</h4>
                    <span className="text-emerald-600 font-mono font-black text-sm">2.500 TL</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">Tekrarlayan manuel işlerinizi, veri çekme (scraping) süreçlerinizi veya API entegrasyonlarınızı bütçe dostu botlarla otomatikleştiriyoruz.</p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a href="#order-form" onClick={() => setFormData({...formData, service: 'bot', details: 'Özel süreç otomasyonu veya bot yaptırmak istiyorum.'})} className="text-xs text-blue-600 font-bold uppercase block text-center border border-blue-200 py-2 rounded-lg bg-blue-50/50 hover:bg-blue-50 transition-colors">Talep Oluştur &rarr;</a>
              </div>
            </div>

            {/* 5. Yapay Zeka Entegrasyonları (Hizalama Hatası Tamamen Giderildi kanka) */}
            <div className="bg-white rounded-2xl border border-blue-100 shadow-md overflow-hidden flex flex-col justify-between md:col-span-2 max-w-md mx-auto w-full">
              <div>
                <div className="h-48 relative overflow-hidden bg-slate-900">
                  <img src="https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80" alt="Yapay Zeka" className="w-full h-full object-cover opacity-85" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded self-start mb-1">AI Modülleri & Chatbot</span>
                    <div className="font-bold text-white text-sm">Akıllı Sistem Entegrasyonları</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-base font-bold text-slate-900">Yapay Zeka Entegrasyonları</h4>
                    <span className="text-emerald-600 font-mono font-black text-sm">3.000 TL</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">Web sitelerinize veya uygulamalarınıza akıllı chatbotlar, veri analitiği veya yapay zeka destekli otomatik içerik araçları bağlıyoruz.</p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a href="#order-form" onClick={() => setFormData({...formData, service: 'ai', details: 'Yapay zeka entegrasyon hizmetleri hakkında bilgi almak istiyorum.'})} className="text-xs text-blue-600 font-bold uppercase block text-center border border-blue-200 py-2 rounded-lg bg-blue-50/50 hover:bg-blue-50 transition-colors">Talep Oluştur &rarr;</a>
              </div>
            </div>

          </div>
        </section>

        {/* Sipariş ve Talep Alma Formu */}
        <section id="order-form" className="bg-white border border-blue-100 rounded-2xl p-8 md:p-10 shadow-lg">
          <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">İletişime Geçin & Sipariş Verin</h3>
          <p className="text-slate-500 text-xs md:text-sm text-center mb-8">
            Piyasanın en uygun fiyatlarıyla çalışmak veya hazır projeleri test etmek için formu doldurun, anında dönüş yapalım.
          </p>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 p-6 rounded-xl text-center font-semibold">
              🎉 Harika! Talebiniz doğrudan e-posta kutumuza ulaştı. Detayları konuşmak üzere sizinle en kısa sürede iletişime geçeceğiz kanka!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Adınız / Şirketiniz</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:bg-white focus:outline-none transition-all text-slate-900 placeholder-slate-400" placeholder="Örn: Ahmet Yılmaz" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">E-Posta Adresiniz</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:bg-white focus:outline-none transition-all text-slate-900 placeholder-slate-400" placeholder="name@company.com" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">İlgi Duyduğunuz Hizmet / Proje</label>
                <select value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:bg-white focus:outline-none transition-all text-slate-900">
                  <option value="mobile_app">📱 Sıfırdan Mobil Uygulama Yapımı (5.000 TL)</option>
                  <option value="web_build">🌐 Kurumsal Web Sitesi Yapımı (2.000 TL)</option>
                  <option value="web_design">🎨 Web Tasarım, Geliştirme & Yenileme (1.500 TL)</option>
                  <option value="bot">🤖 Süreç Otomasyonu & Özel Botlar (2.500 TL)</option>
                  <option value="ai">🧠 Yapay Zeka Entegrasyonları (3.000 TL)</option>
                  <option value="mirami">✨ MiraMi Satılık Hazır Mobil Uygulama (Tüm Haklarıyla) (5.000 TL)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Mesajınız / Proje Detayları</label>
                <textarea required rows={4} value={formData.details} onChange={(e) => setFormData({...formData, details: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:bg-white focus:outline-none transition-all text-slate-900 resize-none placeholder-slate-400" placeholder="İsteklerinizi buraya yazın..." />
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-3.5 rounded-lg text-xs uppercase tracking-widest shadow-md shadow-blue-600/10 transition-all cursor-pointer">
                {isSubmitting ? 'Talebiniz Gönderiliyor...' : 'Başvuruyu/Talebi İlet'}
              </button>
            </form>
          )}
        </section>
      </main>

      <footer className="border-t border-slate-200 py-8 text-center text-[10px] font-mono text-slate-400 bg-white">
        &copy; 2026 WEB APP CODE HUB. TÜM SİSTEMLER MODERN NEXT.JS VE REACT NATIVE STANDARTLARIYLA ÇALIŞMAKTADIR.
      </footer>
    </div>
  );
}
