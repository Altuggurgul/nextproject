'use client';

import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

const PowerBIDashboards = () => {
  return (
    <div className="w-full px-6 py-12 font-display">
      {/* Sayfa Başlığı */}
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800">Neden Hazır POWER BI Çözümleri?</h1>
        <p className="text-gray-600 mt-4">
          Hazır çözümlerle, iş süreçlerinizi hızlandırabilir ve veri odaklı kararlar almak için güçlü araçlara erişebilirsiniz.
        </p>
      </header>

      {/* Faydalar Bölümü */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Hazır Çözümlerin Sunduğu Faydalar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Hızlı Başlangıç */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800">Hızlı Başlangıç</h3>
            <p className="text-sm text-gray-600 mt-4">
              Günlerce süren geliştirme süreçlerini atlayarak anında kullanıma hazır dashboardlarla işinize başlayabilirsiniz.
            </p>
          </div>

          {/* Düşük Maliyet */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800">Düşük Maliyet</h3>
            <p className="text-sm text-gray-600 mt-4">
              Özel geliştirme maliyetlerini ortadan kaldırarak, ekonomik ve etkili çözümler elde edin.
            </p>
          </div>

          {/* Uzmanlıkla Geliştirilmiş */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800">Uzmanlıkla Geliştirilmiş</h3>
            <p className="text-sm text-gray-600 mt-4">
              Veri analitiği ve iş zekası uzmanlarımız tarafından tasarlanan dashboardlarla güvenilir sonuçlara erişin.
            </p>
          </div>

          {/* Esneklik ve Özelleştirme */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800">Esneklik ve Özelleştirme</h3>
            <p className="text-sm text-gray-600 mt-4">
              İhtiyacınıza uygun olarak dashboardları kolayca özelleştirin ve iş hedeflerinize odaklanın.
            </p>
          </div>

          {/* Güvenilir Veri Analizi */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800">Güvenilir Veri Analizi</h3>
            <p className="text-sm text-gray-600 mt-4">
              Verilerinizi anlamlandırmak ve doğru kararlar almak için hazır metriklere dayalı analizlere erişin.
            </p>
          </div>

          {/* Hızlı Karar Alma */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800">Hızlı Karar Alma</h3>
            <p className="text-sm text-gray-600 mt-4">
              Önceden hazırlanmış dashboardlarla zaman kaybetmeden stratejik kararlar alabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* Çözüm Öne Çıkarma */}
      <section className="bg-gray-100 py-12 px-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Hazır Çözümlerimiz</h2>
        <p className="text-gray-600 mb-8">
          Aşağıdaki hazır POWER BI dashboardları ile süreçlerinizi optimize edin:
        </p>
        <ul className="space-y-6">
          <li className="flex items-start">
            <ArrowRightIcon className="w-6 h-6 text-blue-600 mr-4" />
            <span className="text-gray-700">
              <strong>HR (İnsan Kaynakları):</strong> Çalışan bağlılığı, performans ve iş gücü devir hızı.
            </span>
          </li>
          <li className="flex items-start">
            <ArrowRightIcon className="w-6 h-6 text-blue-600 mr-4" />
            <span className="text-gray-700">
              <strong>CRM:</strong> Müşteri segmentasyonu, satış trendleri ve müşteri memnuniyeti.
            </span>
          </li>
          <li className="flex items-start">
            <ArrowRightIcon className="w-6 h-6 text-blue-600 mr-4" />
            <span className="text-gray-700">
              <strong>Satış:</strong> Bölgesel satış performansı, gelir artışı ve hedef takibi.
            </span>
          </li>
        </ul>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-500 transition">
          Çözümleri İncele
        </button>
      </section>
    </div>
  );
};

export default PowerBIDashboards;
