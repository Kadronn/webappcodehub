'use client';
import React, { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', service: 'template', details: '' });
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
        alert("Sistemde bir yoğunluk var kanka, formu doğrudan iletemedik.");
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
            İhtiyacınız olan tüm dijital altyapıyı modern Next.js ve React Native mimarileriyle, piyasanın en rekabetçi ve en uygun fiyatlarıyla anahtar teslim hazırlıyoruz.
          </p>
        </section>

        {/* HİZMETLERİMİZ VE GÖRSEL REHBERLER */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hizmet 1: Web Tasarım */}
          <div className="bg-white rounded-2xl border border-blue-100 shadow-md overflow-hidden flex flex-col justify-between">
            <div>
              {/* Örnek Web Tasarım Görsel Alanı */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex flex-col items-center justify-center text-white relative p-6 text-center">
                <div className="text-4xl mb-2">🌐</div>
                <div className="font-bold text-lg">Next.js & Tailwind Standartlarında Kurumsal Web Siteleri</div>
                <div className="text-xs opacity-80 mt-1">SEO Uyumlu, Mobil Destekli, Yıldırım Hızında Tasarımlar</div>
                <div className="absolute bottom-2 right-4 bg-white/20 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded">Örnek Şablon</div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-bold text-slate-900">Kurumsal Web Sitesi Yapımı</h4>
                  <span className="text-emerald-600 font-mono font-black text-lg">2.000 TL</span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Şirketiniz veya şahsınız için modern, yönetim panelli, Google'da üst sıralara çıkmaya hazır profesyonel web siteleri geliştiriyoruz. 
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <a href="#order-form" onClick={() => setFormData({...formData, service: 'web', details: '2.000 TL fiyatlı Özel Web Sitesi Geliştirme hizmeti için detaylı bilgi almak istiyorum.'})} className="text-xs text-blue-600 font-bold uppercase block text-center border border-blue-200 py-2.5 rounded-lg bg-blue-50/50 hover:bg-blue-50 transition-colors">
                Detayları Konuşalım &rarr;
              </a>
            </div>
          </div>

          {/* Hizmet 2: Otomasyon ve Bot */}
          <div className="bg-white rounded-2xl border border-blue-100 shadow-md overflow-hidden flex flex-col justify-between">
            <div>
              {/* Örnek Otomasyon Görsel Alanı */}
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-900 flex flex-col items-center justify-center text-white relative p-6 text-center">
                <div className="text-4xl mb-2">🤖</div>
                <div className="font-bold text-lg">Özel Süreç Otomasyonu & Entegrasyon Botları</div>
                <div className="text-xs opacity-80 mt-1">Veri Çekme, Otomatik İş Akışları, Node.js Altyapısı</div>
                <div className="absolute bottom-2 right-4 bg-white/20 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded">Örnek Sistem</div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-bold text-slate-900">Süreç Otomasyonu & Bot</h4>
                  <span className="text-emerald-600 font-mono font-black text-lg">2.500 TL</span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Tekrarlayan işlerinizi sıfıra indiren veri kazıma (scraping), sosyal medya veya fatura/muhasebe entegrasyon botlarını bütçe dostu fiyatla hazırlıyoruz.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <a href="#order-form" onClick={() => setFormData({...formData, service: 'bot', details: '2.500 TL fiyatlı Otomasyon ve Özel Bot Yazılımı hizmeti için detaylı bilgi almak istiyorum.'})} className="text-xs text-blue-600 font-bold uppercase block text-center border border-blue-200 py-2.5 rounded-lg bg-blue-50/50 hover:bg-blue-50 transition-colors">
                Detayları Konuşalım &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* ÜRÜN VİTRİNİ: SATILIK HAZIR MOBİL UYGULAMA (MIRAMI) */}
        <section className="mb-16 bg-white border-2 border-blue-500 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-xl shadow-sm">
            AMBALEJLI HAZIR MOBİL PROJE
          </div>
          
          <div className="flex justify-between items-start mb-4 mt-2">
            <span className="bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md border border-emerald-200">
              Demo APK Hazır / Kaynak Kod Lisansı Dahil
            </span>
            <div>
              <span className="text-emerald-600 font-mono font-black text-2xl md:text-3xl block">5.000 TL</span>
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-black text-slate-950 mb-4">
            📱 MiraMi: Komple Bebek Takip & Akıllı Asistan Uygulaması
          </h3>
          
          {/* Senin Şahane Görselin Buraya Geliyor Kanka! */}
          <div className="mb-6 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner group">
            <img 
              src="1000172330.jpg" 
              alt="MiraMi Smart Infant Development Tracker - Havva İpek Kadron" 
              className="w-full h-auto object-cover"
            />
            <div className="p-3 bg-slate-900 text-white text-center text-xs font-mono">
              Visualized Asset: 1000172330.jpg | Tüm sayaç, istatistik ve dil seçimi ekranları dahildir.
            </div>
          </div>

          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            Mobil uygulama pazarına girip anında reklam ve abonelik geliri elde etmek isteyen girişimciler için kaçırılmayacak, her şeyiyle eksiksiz <strong className="text-slate-900">React Native & Expo</strong> tabanlı tam sürüm projedir. Canlı APK demosu mevcuttur, test etmek için aşağıdaki formdan talep gönderebilirsiniz!
          </p>

          {/* Dahili Özellikler Listesi */}
          <div className="mb-6 bg-slate-50 rounded-xl p-4 md:p-6 border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">📦 Uygulamanın İçindeki Canavar Özellikler:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700">
              <div>⏱️ <strong>Uyku & Aktivite Sayaçları:</strong> Kusursuz zamanlama takibi.</div>
              <div>🍼 <strong>Son Beslenme Saati:</strong> Sol/sağ göğüs ve mama mililitre kayıtları.</div>
              <div>🪘 <strong>Anne Sütü Sağım Sayacı:</strong> Günlük sağım miktarı verileri.</div>
              <div>💩 <strong>Bez Değişimi Takibi:</strong> Islak, kirli bez durum geçmişi.</div>
              <div>📊 <strong>Gelişmiş İstatistik Paneli:</strong> Grafikli, gün gün liste analizi.</div>
              <div>💡 <strong>Akıllı Asistan Modülü:</strong> Ebeveynler için pratik gelişim rehberi rehberliği.</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-slate-100">
            <span className="text-xs text-slate-500 font-medium">Bu fiyata projenin tüm kaynak kodları ve mülkiyeti dahildir.</span>
            <a href="#order-form" onClick={() => setFormData({...formData, service: 'template', details: 'MiraMi Hazır Mobil Uygulama projesini 5.000 TL lansman fiyatıyla satın almak ve canlı APK demosunu test etmek istiyorum.'})} className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-all shadow-md shadow-blue-600/10 inline-flex items-center gap-1 cursor-pointer w-full sm:w-auto justify-center">
              APK Demosunu İste & Satın Al &rarr;
            </a>
          </div>
        </section>

        {/* Sipariş ve Talep Alma Formu */}
        <section id="order-form" className="bg-white border border-blue-100 rounded-2xl p-8 md:p-10 shadow-lg">
          <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">İletişime Geçin & Sipariş Verin</h3>
          <p className="text-slate-500 text-xs md:text-sm text-center mb-8">
            Piyasanın en uygun fiyatlarıyla çalışmak veya MiraMi APK demosunu talep etmek için formu doldurun, anında dönüş yapalım.
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
                  <option value="template">📱 MiraMi Hazır Mobil Uygulama Kaynak Kodları (5.000 TL)</option>
                  <option value="web">🌐 Özel Web Sitesi Geliştirme (2.000 TL)</option>
                  <option value="bot">🤖 Süreç Otomasyonu & Özel Botlar (2.500 TL)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Mesajınız / Proje Detayları</label>
                <textarea required rows={4} value={formData.details} onChange={(e) => setFormData({...formData, details: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:bg-white focus:outline-none transition-all text-slate-900 resize-none placeholder-slate-400" placeholder="İsteklerinizi buraya yazın, APK demo talebiyse lütfen belirtin..." />
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
