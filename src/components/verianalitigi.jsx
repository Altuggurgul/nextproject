'use client';
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/solid';

const Cardsdata = ({ searchTerm = '', category }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const swiperRef = useRef(null);

  const cardsData = [
    {
      category: 'Customer Analytics',
      title: 'Müşteri Segmentasyonu ve Hedefli Pazarlama',
      description: 'Veri analitiği teknikleri kullanarak müşteri segmentlerini belirleme ve bu segmentlere yönelik hedefli pazarlama stratejileri geliştirme.',
      technologies: [
        'Python: Pandas ve Scikit-Learn kütüphaneleri kullanılarak müşteri segmentasyonu yapılmıştır.',
        'K-Means: Müşteriler çeşitli segmentlere ayırmak için K-Means algoritması kullanılmıştır.',
        'Data Visualization: Segmentlerin görselleştirilmesi için Matplotlib ve Seaborn kullanılmıştır.'
      ],
      technologiesList: [
        "Python", 
        "SQL", 
        "K-Means", 
        "Scikit-Learn", 
        "Matplotlib", 
        "Seaborn"
      ]
    },
    {
      category: 'Anomaly Detection',
      title: 'Makine Öğrenmesi ile Anomali Tespiti',
      description: 'Veri setlerinde olağandışı veya beklenmeyen veri noktalarını tespit etmek için makine öğrenmesi algoritmaları kullanılmıştır.',
      technologies: [
        'Python: TensorFlow ve Keras kütüphaneleri kullanılarak derin öğrenme modelleri oluşturulmuştur.',
        'Autoencoder: Anomali tespiti için bir Autoencoder modeli eğitilmiştir.',
        'Data Preprocessing: Verilerin normalizasyonu ve temizlenmesi için Pandas ve NumPy kullanılmıştır.'
      ],
      technologiesList: [
        "Python", 
        "TensorFlow", 
        "Keras", 
        "Autoencoder", 
        "Pandas", 
        "NumPy"
      ]
    },
    {
      category: 'Sales Forecasting',
      title: 'Satış Tahminleme ve Envanter Optimizasyonu',
      description: 'Geçmiş satış verilerini analiz ederek gelecekteki talep tahminleri yapılmış ve envanter ihtiyaçları optimize edilmiştir.',
      technologies: [
        'Python: Statsmodels kütüphanesi kullanılarak zaman serisi analizi yapılmıştır.',
        'ARIMA: ARIMA modeli kullanılarak satış tahminleri gerçekleştirilmiştir.',
        'Data Visualization: Tahmin sonuçları Matplotlib ve Seaborn ile görselleştirilmiştir.'
      ],
      technologiesList: [
        "Python", 
        "SQL", 
        "Statsmodels", 
        "ARIMA", 
        "Matplotlib", 
        "Seaborn"
      ]
    },
    {
      category: 'Customer Churn',
      title: 'Müşteri Kayıp Analizi (Churn Analizi)',
      description: 'Müşteri davranışlarını analiz ederek kayıp oranları belirlenmiş ve müşteri sadakatini artırma stratejileri geliştirilmiştir.',
      technologies: [
        'Python: Scikit-Learn kütüphanesi kullanılarak lojistik regresyon modeli eğitilmiştir.',
        'Random Forest: Churn tahmini için Random Forest modeli kullanılmıştır.',
        'Data Processing: Pandas ve NumPy kullanılarak veri ön işleme ve özellik mühendisliği gerçekleştirilmiştir.'
      ],
      technologiesList: [
        "Python", 
        "SQL", 
        "Scikit-Learn", 
        "Random Forest", 
        "Pandas", 
        "NumPy"
      ]
    },
    {
      category: 'Marketing Analytics',
      title: 'Pazarlama Kampanyası Performans Analizi',
      description: 'Kampanyaların başarısını ölçmek ve ROI\'yi artırmak için analitik yöntemler kullanarak kampanya verileri incelenmiştir.',
      technologies: [
        'Python: Pandas ve Numpy ile veri manipülasyonu yapılmıştır.',
        'A/B Testing: Kampanyalar arasındaki performans farkını değerlendirmek için A/B testi yapılmıştır.',
        'Data Visualization: Kampanya performansı Matplotlib ve Plotly ile görselleştirilmiştir.'
      ],
      technologiesList: [
        "Python", 
        "SQL", 
        "Pandas", 
        "A/B Testing", 
        "Matplotlib", 
        "Plotly"
      ]
    },
    {
      category: 'Data Visualization',
      title: 'Veri Görselleştirme ve İş Zekası Dashboard Geliştirme',
      description: 'Karmaşık veri setlerini görsel olarak anlamlı hale getiren etkileşimli iş zekası dashboardları oluşturulmuştur.',
      technologies: [
        'Python: Plotly ve Dash kütüphaneleri kullanılarak etkileşimli grafikler oluşturulmuştur.',
        'Dashboard Design: Kullanıcı dostu arayüzler geliştirilmiş, veri filtreleme ve analiz imkanı sunulmuştur.',
        'Data Processing: Büyük veri setleri Pandas ve Dask kullanılarak işlenmiştir.'
      ],
      technologiesList: [
        "Python", 
        "SQL", 
        "Plotly", 
        "Dash", 
        "Pandas", 
        "Dask"
      ]
    },
    {
      category: 'Social Media Analytics',
      title: 'Sosyal Medya Analitiği ve Duygu Analizi',
      description: 'Sosyal medya verilerini analiz ederek marka algısı ölçülmüş ve müşteri geri bildirimlerinden değerli içgörüler çıkarılmıştır.',
      technologies: [
        'Python: NLTK ve TextBlob kullanılarak duygu analizi gerçekleştirilmiştir.',
        'Web Scraping: Sosyal medya verileri BeautifulSoup ve Scrapy ile toplanmıştır.',
        'Data Visualization: Analiz sonuçları Matplotlib ve Seaborn ile görselleştirilmiştir.'
      ],
      technologiesList: [
        "Python", 
        "SQL", 
        "NLTK", 
        "TextBlob", 
        "BeautifulSoup", 
        "Scrapy"
      ]
    },
    {
      category: 'Time Series Forecasting',
      title: 'Zaman Serisi Analizi ile Talep Tahmini',
      description: 'Zaman serisi verileri analiz edilerek talep tahminleri yapılmış ve bu tahminlere dayalı kararlar alınmıştır.',
      technologies: [
        'Python: Statsmodels ve Prophet kütüphaneleri ile zaman serisi modelleri oluşturulmuştur.',
        'SARIMA: Talep tahmini için Seasonal ARIMA modeli kullanılmıştır.',
        'Data Visualization: Zaman serisi verileri Matplotlib ve Seaborn ile görselleştirilmiştir.'
      ],
      technologiesList: [
        "Python", 
        "SQL", 
        "Statsmodels", 
        "Prophet", 
        "SARIMA", 
        "Matplotlib", 
        "Seaborn"
      ]
    },
    {
      category: 'Supply Chain Analytics',
      title: 'Tedarik Zinciri Verimlilik Analizi',
      description: 'Tedarik zinciri süreçlerindeki verileri analiz ederek verimlilik artırılmış ve maliyetler düşürülmüştür.',
      technologies: [
        'Python: Pandas ve NumPy kullanılarak veri analizi yapılmıştır.',
        'Optimization: Tedarik zinciri optimizasyonu için Linear Programming ve PuLP kütüphanesi kullanılmıştır.',
        'Data Visualization: Analiz sonuçları Plotly ve Matplotlib ile görselleştirilmiştir.'
      ],
      technologiesList: [
        "Python", 
        "SQL", 
        "Pandas", 
        "NumPy", 
        "Linear Programming", 
        "PuLP"
      ]
    },
    {
      category: 'Recommendation Systems',
      title: 'Ürün Öneri Sistemi Optimizasyonu',
      description: 'Kullanıcı davranış verileri analiz edilerek öneri sistemlerinin performansı artırılmıştır.',
      technologies: [
        'Python: Scikit-Learn ve Surprise kütüphaneleri ile öneri algoritmaları geliştirilmiştir.',
        'Collaborative Filtering: Kullanıcı bazlı işbirlikçi filtreleme modeli kullanılmıştır.',
        'Data Processing: Veri ön işleme ve özellik mühendisliği Pandas ve NumPy ile yapılmıştır.'
      ],
      technologiesList: [
        "Python", 
        "SQL", 
        "Scikit-Learn", 
        "Surprise", 
        "Collaborative Filtering", 
        "Pandas", 
        "NumPy"
      ]
    },
  ];



  const filteredCards = cardsData
    .filter((card) => category === 'All' || card.category === category)
    .filter((card) => card.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const openModal = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 font-display">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredCards.map((card, index) => (
    <div
      key={index}
      className="bg-white rounded-lg shadow-sm border font-display hover:shadow-xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-1 cursor-pointer"
      onClick={() => openModal(card)}
    >
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800">
          {card.title} 
        </h3>
        <p className="text-gray-600 text-sm mt-2">{card.description}</p>
      </div>
    </div>
  ))}
</div>


{selectedCard && (
  <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-50 z-50 flex items-center justify-center transition-opacity duration-300">
    <div className="bg-gray-100 w-full max-w-3xl h-auto md:h-auto relative rounded-lg shadow-lg flex flex-col z-60 overflow-hidden mx-4 md:mx-8 my-8 md:my-16">
      <button
        className="absolute top-2 right-4 text-gray-400 bg-opacity-70 p-2 z-70 focus:outline-none transition-transform transform hover:text-gray-700"
        onClick={closeModal}
        style={{ zIndex: 1000 }}
      >
        <XMarkIcon aria-hidden="true" className="h-8 w-8" />
      </button>
      <div className="flex-grow flex flex-col justify-center items-center relative pt-16 px-4 md:px-8">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedCard.title}</h3>
        <p className="text-gray-700 mb-4">{selectedCard.description}</p>
      </div>
      <div className="bg-white w-full">
        <div className="p-4 mx-4">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">Kullanılan Teknolojiler:</h4>
          <p className="text-gray-700">
            {selectedCard.technologiesList.join(' | ')}
          </p>
          <h4 className="mt-4 text-lg font-semibold text-gray-800 mb-2">Kullanılan Teknolojiler:</h4>
          <ul className="list-disc list-inside text-gray-700">
            {selectedCard.technologies.map((tech, idx) => (
              <li key={idx}>{tech}</li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  </div>
)}









    </div>
  );
};

export default Cardsdata;
