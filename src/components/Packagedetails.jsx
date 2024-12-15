'use client';

import React from 'react';

const PackageDetails = () => {
  return (
    <div className="w-full px-6 py-12 font-display">
      {/* Sayfa Başlığı */}
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800">POWER BI Paket İçerikleri</h1>
        <p className="text-gray-600 mt-4">
          İş süreçlerinizi geliştirmek ve veri odaklı kararlar almanız için hazırlanan paket içeriklerini keşfedin.
        </p>
      </header>

      {/* Paket Kartları */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Gereksinim Analizi */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
          <h3 className="text-lg font-semibold text-gray-800">Gereksinim Analizi</h3>
          <p className="text-sm text-gray-600 mt-4">
            İş ihtiyaçlarınızı anlamak ve en iyi çözümü sunmak için 5 saatlik analiz oturumları.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600 text-sm">
            <li>- Veri kaynaklarının belirlenmesi</li>
            <li>- Raporlama ihtiyaçlarının analizi</li>
            <li>- Metrik ve KPI hedeflerinin oluşturulması</li>
          </ul>
        </div>

        {/* Tasarım Değişiklikleri */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
          <h3 className="text-lg font-semibold text-gray-800">Tasarım Değişiklikleri</h3>
          <p className="text-sm text-gray-600 mt-4">
            Markanızın ihtiyaçlarına uygun logo ve renk değişiklikleri için 5 saatlik destek.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600 text-sm">
            <li>- Logo güncellemeleri</li>
            <li>- Renk paleti uyarlamaları</li>
            <li>- Marka yönergelerine uyum</li>
          </ul>
        </div>

        {/* Dashboard Özelleştirme */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
          <h3 className="text-lg font-semibold text-gray-800">Dashboard Özelleştirme</h3>
          <p className="text-sm text-gray-600 mt-4">
            Yönetici Özeti, Çeşitlilik, Yetenek Kazanımı, Performans ve İş Gücü Devir Hızı dashboardları için 10 saatlik özelleştirme.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600 text-sm">
            <li>- Yönetici Özeti</li>
            <li>- Çeşitlilik ve Dahil Etme</li>
            <li>- Performans ve İş Gücü Devir Hızı</li>
          </ul>
        </div>

        {/* Veri Doğrulama */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
          <h3 className="text-lg font-semibold text-gray-800">Veri Doğrulama Süreci</h3>
          <p className="text-sm text-gray-600 mt-4">
            Veri doğruluğunu sağlamak ve tutarlılığı garanti altına almak için 3 saatlik doğrulama desteği.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600 text-sm">
            <li>- Veri kaynaklarının doğruluğu</li>
            <li>- Veri modelleme uyumu</li>
            <li>- Raporlama tutarlılığı</li>
          </ul>
        </div>

        {/* Canlı Eğitim */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
          <h3 className="text-lg font-semibold text-gray-800">Canlı Eğitim Oturumu</h3>
          <p className="text-sm text-gray-600 mt-4">
            Dashboardların verimli bir şekilde kullanımı için 2 saatlik canlı eğitim oturumu.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600 text-sm">
            <li>- Dashboard kullanımı</li>
            <li>- Veri analitiği ipuçları</li>
            <li>- Soru ve cevap oturumu</li>
          </ul>
        </div>

        {/* Ek Hizmetler */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
          <h3 className="text-lg font-semibold text-gray-800">Ek Hizmetler</h3>
          <p className="text-sm text-gray-600 mt-4">
            İhtiyaçlarınıza özel ek hizmetler sunuyoruz:
          </p>
          <ul className="mt-4 space-y-2 text-gray-600 text-sm">
            <li>- Veri Modelleme ve ETL Süreçleri</li>
            <li>- Özel Rapor Geliştirme</li>
            <li>- Role Dayalı Güvenlik</li>
            <li>- Özel Veri Entegrasyonu</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PackageDetails;
