import { ServerIcon, ShieldCheckIcon, LightBulbIcon, ChartBarIcon, CogIcon } from '@heroicons/react/24/outline';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function PowerBIHizmetleri() {
  const services = [
    {
      id: 1,
      title: 'Problem Tespiti ve Değerlendirme',
      icon: LightBulbIcon,
      description: 'Power BI sorunlarınızın ve gereksinimlerinizin belirlenmesi ve değerlendirilmesi',
      items: [
        'Kullanılmayan raporların tespiti',
        'Veritabanı bağlantılarının kontrolü',
        'Performans sorunları olan dashboardların belirlenmesi',
        'Yanlış yapılandırılmış veri modellerinin düzeltilmesi',
        'İşlem sürelerini uzatan veri akışlarının (Dataflow) optimize edilmesi',
      ],
    },
    {
      id: 2,
      title: 'Uygulama ve Entegrasyon',
      icon: ChartBarIcon,
      description: 'Power BI uygulamaları ve entegrasyon hizmetleri',
      items: [
        'Veri kaynaklarının Power BI ile entegrasyonu',
        'Mevcut uygulamalarla Power BI entegrasyonu sağlama',
        'Azure Data Factory ile veri akışlarının (Dataflow) yapılandırılması',
        'SQL Server üzerinden veri senkronizasyonu',
        'Veri ambarından Power BI’a veri çekme',
      ],
    },
    {
      id: 3,
      title: 'Özelleştirme ve Tasarım',
      icon: CogIcon,
      description: 'Power BI panolarınızı iş ihtiyaçlarınıza göre özelleştirme',
      items: [
        'Şirket logonuz ve renklerinizle uyumlu dashboard tasarımı',
        'Kullanıcı bazlı özel raporlar oluşturma (RLS - Satır Düzeyinde Güvenlik)',
        'Veri görselleştirme şablonlarının geliştirilmesi',
        'Datamart yapısının optimize edilmesi ve yönetimi',
        'Mobil cihazlara uygun dashboard dizaynı',
      ],
    },
    {
      id: 4,
      title: 'Geliştirme Hizmetleri',
      icon: ServerIcon,
      description: 'Power BI raporları ve iş süreçleri için özel geliştirmeler',
      items: [
        'Özel DAX ve M sorgularının yazılması',
        'SSAS Küpleri ve Tabular Modeller oluşturma',
        'Veri modeli optimizasyonu',
        'ETL süreçlerinin geliştirilmesi',
        'Veri setlerinin Power BI’a entegre edilmesi',
      ],
    },
    {
      id: 5,
      title: 'Test, Eğitim ve Destek',
      icon: ShieldCheckIcon,
      description: 'Power BI çözümleriniz için test, eğitim ve sürekli destek hizmetleri',
      items: [
        'Kullanıcı kabul testlerinin gerçekleştirilmesi',
        'Veri doğruluğunun kontrol edilmesi',
        'Power BI eğitimi ile kullanıcıların bilgilendirilmesi',
        'Power BI raporlarının düzenli bakım ve optimizasyonu',
        '7/24 teknik destek sağlanması',
      ],
    },
  ];


  const expertise = [
    'Azure Data Lake/Delta Lake',
    'Azure Data Factory, Azure Event Hub',
    'Azure Synapse Analytics',
    'SQL Server Analysis Services (SSAS)',
    'SQL Server Integration Services (SSIS)',
    'İlişkisel veri tabanlarına, OLAP küplerine, Tabular Modellerine ve REST API\'lerine dayalı Power BI raporları oluşturma',
    'SSAS Küpleri/Tabular Modelleri oluşturma ve MDX ve DAX ile hesaplamalar ve hesaplanmış ölçümler yazma',
    'T-SQL Stored Procedures yazma, veri birleştirme, veri toplama, veri birliği ve veri dönüştürme hizmetleri sunma',
    'Power BI Report Server, Power BI Service',
    'Microsoft Fabric',
    'SQL Veritabanı, SQL Veri Ambarı',
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 font-display">
      {/* Büyük Ekranlar için Grid Layout */}
      <div className="hidden lg:grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="bg-white p-10 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <service.icon className="h-10 w-10 text-indigo-600" aria-hidden="true" />
              <h3 className="ml-4 text-xl leading-6 font-semibold text-gray-900">{service.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="text-base text-gray-500 list-disc pl-5 space-y-2">
              {service.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Küçük Ekranlar için Swiper Slider */}
      <div className="lg:hidden">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: '.custom-pagination', // Pagination'ı özelleştirmek için kullanılır
          }}
          modules={[Pagination]}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="bg-white p-10 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <service.icon className="h-10 w-10 text-indigo-600" aria-hidden="true" />
                  <h3 className="ml-4 text-xl leading-6 font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-base text-gray-500 list-disc pl-5 space-y-2">
                  {service.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Pagination için özel bir div */}
        <div className="custom-pagination mt-4 flex justify-center"></div>
      </div>

      {/* Yeni Eklenen Bölüm */}
      <div className="mt-16">
        <h3 className="text-2xl leading-tight font-semibold tracking-tight text-gray-900 text-left mb-8">
          Deneyimler
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 text-gray-600 text-base">
          {expertise.map((item, index) => (
            <div key={index}>
              <li className="list-disc list-inside">{item}</li>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
