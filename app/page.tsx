'use client';
import React, { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', service: 'web', details: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Formspree Mail Teslimat Sistemi
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Formspree endpoints - Verileri doğrudan senin mailine uçurur
      const response = await fetch('https://formspree.io/f/mpwvaqjo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Sistemde bir yoğunluk var kanka, formu doğrudan iletemedik.");
      }
    } catch (error) {
      alert("Bağlantı hatası oluştu!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* Üst Menü / Navbar */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl">⚙️</span>
            <h1 className="text-lg font-bold tracking-wider text-white">
              WEB APP <span className="text-blue-500">CODE HUB</span>
            </h1>
          </div>
          <a href="#order-form" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg font-semibold text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-600/20">
            Proje Başlatın
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Giriş Bölümü (Hero) */}
        <section className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full bg-blue-500/5">
            Güvenilir Kurumsal Yazılım Ortağınız
          </span>
          <h2 className="text-3xl md:text-5xl font-black mt-6 mb-6 tracking-tight text-white leading-tight">
            Yüksek Performanslı Web, Mobil Uygulama <br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              ve Otomasyon Çözümleri
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            İşletmenizin dijital dönüşümünü ISO standartlarında, modern Next.js ve React Native mimarileriyle baştan inşa ediyoruz. Tam şeffaflık ve kesintisiz teknik destek süreçlerimizle tanışın.
          </p>
        </section>

        {/* İş Süreci Adımları (Rakiplerden Çaldığımız Güven Maddeleri) */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-800">
            <div className="text-2xl mb-3">📋</div>
            <h4 className="text-base font-bold text-white mb-2">1. Analiz ve Strateji</h4>
            <p className="text-slate-400 text-xs leading-relaxed">Sektörünüzü ve rakiplerinizi inceleyerek hedeflerinize en uygun teknik yol haritasını çıkarıyoruz.</p>
          </div>
          <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-800">
            <div className="text-2xl mb-3">💻</div>
            <h4 className="text-base font-bold text-white mb-2">2. Güvenli Geliştirme</h4>
            <p className="text-slate-400 text-xs leading-relaxed">En güncel yazılım standartlarına sadık kalarak, hızlı, güvenli ve mobil uyumlu kod yazıyoruz.</p>
          </div>
          <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-800">
            <div className="text-2xl mb-3">🚀</div>
            <h4 className="text-base font-bold text-white mb-2">3. Yayına Alım ve Destek</h4>
            <p className="text-slate-400 text-xs leading-relaxed">Projenizi sıfır hata ile yayına aldıktan sonra da teknik güncellemelerle her an yanınızda oluyoruz.</p>
          </div>
        </section>

        {/* Premium Ürün Vitrini: MiraMi */}
        <section className="mb-20 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/60 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="flex justify-between items-start mb-4">
            <span className="bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-blue-500/20">
              Hazır Lisanslı Altyapı
            </span>
            <span className="text-emerald-400 font-mono font-bold text-base">$1,199</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">📱 MiraMi: Gelişmiş Mobil Uygulama Mimarisi</h3>
          <p className="text-slate-300 text-sm mb-4 leading-relaxed">
            React Native ve Expo tabanlı, üst düzey analitik bebek aktivite takip asistanı şablonu. Kendi mobil uygulamasını pazara anında sunmak isteyen vizyoner girişimciler için tak-çalıştır mimari.
          </p>
          <a href="#order-form" onClick={() => setFormData({...formData, service: 'template', details: 'Interested in purchasing the MiraMi mobile application template codebase ($1,199).'})} className="text-xs text-blue-400 font-bold uppercase tracking-wider hover:text-blue-300 transition-colors inline-flex items-center gap-1 cursor-pointer">
            Kaynak Kod Lisansını İnceleyin &rarr;
          </a>
        </section>

        {/* Sipariş ve Talep Alma Formu */}
        <section id="order-form" className="bg-slate-800/90 border border-slate-700/50 rounded-2xl p-8 md:p-10 shadow-2xl">
          <h3 className="text-xl font-bold text-white mb-2 text-center">Yeni Bir Proje Başlatın</h3>
          <p className="text-slate-400 text-xs md:text-sm text-center mb-8">
            İhtiyaçlarınızı belirtin, uzman ekibimiz 24 saat içinde size özel fiyat teklifi ve iş planıyla dönüş yapsın.
          </p>

          {submitted ? (
            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-6 rounded-xl text-center font-semibold">
              🎉 Harika! Talebiniz doğrudan e-posta kutumuza ulaştı. Detayları konuşmak üzere sizinle en kısa sürede iletişime geçeceğiz kanka!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Adınız / Şirket Unvanınız</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:outline-none transition-all text-white placeholder-slate-600" placeholder="Örn: Ahmet Yılmaz" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">E-Posta Adresiniz</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:outline-none transition-all text-white placeholder-slate-600" placeholder="name@company.com" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Hizmet Kapsamı</label>
                <select value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:outline-none transition-all text-white">
                  <option value="web">🌐 Özel Web Platformu Geliştirme</option>
                  <option value="bot">🤖 Süreç Otomasyonu & Özel Bot Yazılımları</option>
                  <option value="template">📱 Premium Mobil Uygulama Kaynak Kodu (MiraMi)</option>
                  <option value="other">💡 Diğer Özel Yazılım Çözümleri</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Proje Detayları ve Teknik Şartlar</label>
                <textarea required rows={4} value={formData.details} onChange={(e) => setFormData({...formData, details: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:outline-none transition-all text-white resize-none placeholder-slate-600" placeholder="Lütfen projenizin işlevlerini, hedeflenen platformları veya entegrasyon ihtiyaçlarınızı kısaca özetleyin..." />
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-bold py-3.5 rounded-lg text-xs uppercase tracking-widest shadow-md shadow-blue-600/10 transition-all cursor-pointer">
                {isSubmitting ? 'Talebiniz Gönderiliyor...' : 'Proje Başvurusunu Tamamla'}
              </button>
            </form>
          )}
        </section>
      </main>

      <footer className="border-t border-slate-800 py-8 text-center text-[10px] font-mono text-slate-500">
        &copy; 2026 WEB APP CODE HUB. TÜM SİSTEMLER MODERN NEXT.JS VE REACT NATIVE STANDARTLARIYLA ÇALIŞMAKTADIR.
      </footer>
    </div>
  );
}
