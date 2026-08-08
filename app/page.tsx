import React from 'react';
export default function Home() {
return (
<div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-orange-500 selection:text-white">
{/* --- HEADER --- */}
<header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center font-bold text-white shadow-lg shadow-orange-500/20">
M
</div>
<div>
<span className="text-xl font-extrabold tracking-tight text-white block leading-none">
MIRAMISI
</span>
<span className="text-[10px] font-medium tracking-widest text-orange-400 uppercase">
Web & Mobil Yazılım Ajansı
</span>
</div>
</div>
<a
href="#order-form"
className="px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold text-sm hover:opacity-90 transition shadow-lg shadow-orange-500/25"
>
Teklif Al
</a>
</div>
</header>
{/* --- HERO SECTION --- */}
<section className="relative pt-12 pb-20 overflow-hidden">
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
<div className="max-w-5xl mx-auto px-4 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-semibold mb-6">
<span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
PROFESYONEL DİJİTAL ÇÖZÜMLER
</div>
<h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
Hayalindeki Web Sitemizi & <br className="hidden sm:inline" />
<span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
Mobil Uygulamayı
</span> İnşa Edelim
</h1>
<p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
Kurumsal web tasarımları, mobil uygulamalar, yapay zeka modülleri ve işinizi otomatikleştiren bot sistemleri ile dijital dünyada rakiplerinizin önüne geçin.
</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a
href="#order-form"
className="w-full sm:w-auto px-8 py-4 rounded-xl bg-orange-500 text-white font-bold text-base hover:bg-orange-600 transition shadow-xl shadow-orange-500/30"
>
Projenizi Başlatın →
</a>
<a
href="#services"
className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-800 bg-slate-900/50 text-slate-300 font-semibold text-base hover:bg-slate-800 transition"
>
Hizmetleri İncele
</a>
</div>
</div>
</section>
{/* --- GÜVEN & ÖZELLİK BANDI (Görseldeki Gibi) --- */}
<section className="border-y border-slate-800/80 bg-slate-900/40 py-10 my-6">
<div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
<div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/60 hover:border-orange-500/40 transition">
<div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 text-xl">
📱
</div>
<h3 className="font-bold text-white text-sm sm:text-base">Mobil Uyumlu</h3>
<p className="text-xs text-slate-400 mt-1">Tüm cihazlarda kusursuz görünüm</p>
</div>
<div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/60 hover:border-orange-500/40 transition">
<div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 text-xl">
⚡
</div>
<h3 className="font-bold text-white text-sm sm:text-base">Yüksek Performans</h3>
<p className="text-xs text-slate-400 mt-1">Işık hızında yükleme & SEO altyapısı</p>
</div>
<div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/60 hover:border-orange-500/40 transition">
<div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 text-xl">
🛡️
</div>
<h3 className="font-bold text-white text-sm sm:text-base">Güvenli Altyapı</h3>
<p className="text-xs text-slate-400 mt-1">Güncel ve sürdürülebilir sistemler</p>
</div>
<div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/60 hover:border-orange-500/40 transition">
<div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 text-xl">
🎨
</div>
<h3 className="font-bold text-white text-sm sm:text-base">Modern Tasarım</h3>
<p className="text-xs text-slate-400 mt-1">Kullanıcı dostu şık arayüz</p>
</div>
</div>
</section>
{/* --- ÖNE ÇIKAN SATILIK PROJE (MIRAMI) --- */}
<section className="py-12 max-w-7xl mx-auto px-4">
<div className="rounded-3xl border border-orange-500/30 bg-gradient-to-b from-orange-500/10 to-transparent p-6 sm:p-10 relative overflow-hidden">
<div className="inline-block px-3 py-1 rounded-md bg-orange-500 text-white font-bold text-xs uppercase mb-4">
Hazır Devir Fırsatı
</div>
<div className="grid md:grid-cols-2 gap-8 items-center">
<div>
<h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
📱 MiraMi: Akıllı Bebek Takip & Asistan Uygulaması
</h2>
<p className="text-slate-300 text-sm sm:text-base mb-6 leading-relaxed">
Girişimciler için hazır mobil uygulama! Reklam ve premium üyelik altyapısıyla gelir yaratmaya hazır, tüm kaynak kodları ve haklarıyla teslim edilen dev proje.
</p>
<div className="flex items-center gap-4 mb-6">
<span className="text-2xl font-black text-orange-400">Teklif Alın</span>
<span className="text-xs text-slate-400">Tüm mülkiyet ve kodlar dahil</span>
</div>
<a
href="#order-form"
className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition"
>
APK Demosunu İsteyin →
</a>
</div>
<div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
<img
src="/mirami-banner.jpg"
alt="MiraMi Uygulama Görseli"
className="w-full h-auto object-cover"
/>
</div>
</div>
</div>
</section>
{/* --- HİZMETLERİMİZ --- */}
<section id="services" className="py-16 max-w-7xl mx-auto px-4">
<div className="text-center mb-12">
<h2 className="text-3xl font-black text-white">Hizmetlerimiz</h2>
<p className="text-slate-400 mt-2 text-sm">İhtiyacınıza uygun dijital çözümü seçin, hemen başlayalım.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
{/* Hizmet 1 */}
<div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-slate-700 transition flex flex-col justify-between">
<div>
<div className="text-xs text-orange-400 font-bold uppercase mb-2">Next.js & Hızlı Kurulum</div>
<h3 className="text-xl font-bold text-white mb-2">Web Sitemiz & Kurumsal Tasarım</h3>
<p className="text-slate-400 text-sm mb-4 leading-relaxed">
İşletmeniz veya kişisel markanız için arama motoru dostu, hızlı ve modern web siteleri.
</p>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
<span className="text-lg font-black text-white">Teklif Alın</span>
<a href="#order-form" className="text-xs font-bold text-orange-400 hover:underline">Talep Gönder →</a>
</div>
</div>
{/* Hizmet 2 */}
<div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-slate-700 transition flex flex-col justify-between">
<div>
<div className="text-xs text-orange-400 font-bold uppercase mb-2">React Native & Expo</div>
<h3 className="text-xl font-bold text-white mb-2">Mobil Uygulama Geliştirme</h3>
<p className="text-slate-400 text-sm mb-4 leading-relaxed">
iOS ve Android marketlerde yerinizi alacak yüksek performanslı mobil çözümler.
</p>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
<span className="text-lg font-black text-white">Teklif Alın</span>
<a href="#order-form" className="text-xs font-bold text-orange-400 hover:underline">Talep Gönder →</a>
</div>
</div>
{/* Hizmet 3 */}
<div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-slate-700 transition flex flex-col justify-between">
<div>
<div className="text-xs text-orange-400 font-bold uppercase mb-2">OpenAI & LLM</div>
<h3 className="text-xl font-bold text-white mb-2">Yapay Zeka Entegrasyonları</h3>
<p className="text-slate-400 text-sm mb-4 leading-relaxed">
Sitenize veya uygulamanıza akıllı botlar, chatbotlar ve özel yapay zeka modülleri bağlama.
</p>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
<span className="text-lg font-black text-white">Teklif Alın</span>
<a href="#order-form" className="text-xs font-bold text-orange-400 hover:underline">Talep Gönder →</a>
</div>
</div>
{/* Hizmet 4 */}
<div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-slate-700 transition flex flex-col justify-between">
<div>
<div className="text-xs text-orange-400 font-bold uppercase mb-2">Node.js Otomasyon</div>
<h3 className="text-xl font-bold text-white mb-2">Özel Bot & Otomasyon</h3>
<p className="text-slate-400 text-sm mb-4 leading-relaxed">
Manuel işlerinizi otonom hale getiren veri çekme, bildirim ve süreç botları.
</p>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
<span className="text-lg font-black text-white">Teklif Alın</span>
<a href="#order-form" className="text-xs font-bold text-orange-400 hover:underline">Talep Gönder →</a>
</div>
</div>
{/* Hizmet 5 */}
<div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-slate-700 transition flex flex-col justify-between sm:col-span-2 lg:col-span-2">
<div>
<div className="text-xs text-orange-400 font-bold uppercase mb-2">Yenileme & Modernizasyon</div>
<h3 className="text-xl font-bold text-white mb-2">Arayüz Tasarımı & UX/UI Yenileme</h3>
<p className="text-slate-400 text-sm mb-4 leading-relaxed">
Mevcut yavaş ve eski sitelerinizi baştan aşağı güncel ajans standartlarına taşıyoruz.
</p>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
<span className="text-lg font-black text-white">Teklif Alın</span>
<a href="#order-form" className="text-xs font-bold text-orange-400 hover:underline">Talep Gönder →</a>
</div>
</div>
</div>
</section>
{/* --- ILETIŞIM / FORM --- */}
<section id="order-form" className="py-16 max-w-3xl mx-auto px-4">
<div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/80 text-center">
<h2 className="text-2xl font-bold text-white mb-2">Projeniz İçin Teklif Alın</h2>
<p className="text-slate-400 text-sm mb-6">Detayları iletin, en kısa sürede geri dönüş yapalım.</p>
<form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
<div>
<label className="block text-xs font-medium text-slate-300 mb-1">Adınız / Firma Adı</label>
<input
type="text"
placeholder="Örn: Ahmet Yılmaz"
className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-orange-500"
/>
</div>
<div>
<label className="block text-xs font-medium text-slate-300 mb-1">İletişim Numaranız veya E-posta</label>
<input
type="text"
placeholder="Örn: 05xx xxx xx xx"
className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-orange-500"
/>
</div>
<div>
<label className="block text-xs font-medium text-slate-300 mb-1">Proje Detayları</label>
<textarea
rows={4}
placeholder="İstediğiniz web sitesi veya uygulama detaylarını kısaca yazın..."
className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-orange-500"
/>
</div>
<button
type="submit"
className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold text-sm hover:opacity-90 transition shadow-lg shadow-orange-500/20"
>
Talep Gönder
</button>
</form>
</div>
</section>
{/* --- FOOTER --- */}
<footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500">
© 2026 MIRAMISI WEB & MOBİL UYGULAMA YAPMA OFİSİ. TÜM HAKLARI SAKLIDIR.
</footer>
</div>
);
}
