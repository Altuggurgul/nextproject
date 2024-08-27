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
      title: 'Müşteri Segmentasyonu ve Analizi',
      description: 'Veri analitiği teknikleri kullanarak müşteri segmentlerini belirleme ve bu segmentlere yönelik stratejiler geliştirme.',
      examples: [
        'RFM analizi ile müşteri segmentlerinin belirlenmesi.',
        'K-Means algoritması ile müşteri gruplarının ayrıştırılması.',
        'Demografik ve davranışsal verilerin analiz edilmesi yoluyla segmentasyon yapılması.'
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
      category: 'Customer Sentiment Analysis',
      title: 'Müşteri Duygu Analizi',
      description: 'Müşteri geri bildirimleri ve sosyal medya verileri kullanılarak duygu analizi yapılması.',
      examples: [
        'Doğal dil işleme teknikleri ile müşteri geri bildirimlerinin analiz edilmesi.',
        'Duygu analizi modelleri kullanılarak müşteri memnuniyeti değerlendirilmesi.',
        'Sosyal medya verilerinden elde edilen içgörüler ile duygu analizi yapılması.'
      ],
      technologiesList: [
        "Python", 
        "NLTK", 
        "TextBlob", 
        "VADER", 
        "Scikit-Learn"
      ]
    },
    {
      category: 'Sales Forecasting',
      title: 'Satış Tahminleme ve Envanter Optimizasyonu',
      description: 'Geçmiş satış verilerini analiz ederek gelecekteki talep tahminleri yapılması ve envanter ihtiyaçlarının optimize edilmesi.',
      examples: [
        'ARIMA modeli ile satış tahminlerinin gerçekleştirilmesi.',
        'Zaman serisi analizi ile talep tahminleri yapılması.',
        'Envanter yönetimi için stok seviyelerinin optimize edilmesi.'
      ],
      technologiesList: [
        "Python", 
        "SQL", 
        "ARIMA", 
        "Statsmodels", 
        "Pandas"
      ]
    },
    {
      category: 'Customer Churn',
      title: 'Müşteri Kayıp Analizi (Churn Analizi)',
      description: 'Müşteri davranışlarını analiz ederek kayıp oranlarının belirlenmesi ve kayıpların önlenmesi.',
      examples: [
        'Lojistik regresyon modeli ile churn tahminlerinin yapılması.',
        'Müşteri davranışlarına dayalı olarak churn riskinin hesaplanması.',
        'Veri madenciliği teknikleri ile churn modellerinin oluşturulması.'
      ],
      technologiesList: [
        "Python", 
        "SQL", 
        "Scikit-Learn", 
        "Logistic Regression", 
        "Random Forest"
      ]
    },
    {
      category: 'Marketing Analytics',
      title: 'Pazarlama Kampanyası Performans Analizi',
      description: 'Kampanyaların başarısını ölçmek ve ROI\'yi artırmak için analitik yöntemler kullanarak kampanya verilerinin incelenmesi.',
      examples: [
        'A/B testleri ile kampanya performanslarının karşılaştırılması.',
        'Pazarlama verilerinin analiz edilmesi yoluyla kampanya optimizasyonu yapılması.',
        'ROI hesaplamaları ile kampanya etkinliğinin değerlendirilmesi.'
      ],
      technologiesList: [
        "Python", 
        "SQL", 
        "Pandas", 
        "A/B Testing", 
        "Matplotlib"
      ]
    },
    {
      category: 'Customer Lifetime Value (CLTV) Prediction',
      title: 'Müşteri Yaşam Boyu Değeri Tahmini',
      description: 'Müşteri yaşam boyu değerinin tahmin edilmesi ve stratejik kararların alınması için bu değerin kullanılması.',
      examples: [
        'CLTV hesaplamaları ile müşteri segmentlerinin değerlendirilmesi.',
        'Zaman serisi verileri kullanarak müşteri değerinin projeksiyonlarının yapılması.',
        'Müşteri bağlılığını artırmak için CLTV modellerinin oluşturulması.'
      ],
      technologiesList: [
        "Python", 
        "SQL", 
        "LTV", 
        "Cohort Analysis", 
        "Pandas"
      ]
    },
    {
      category: 'Social Media Analytics',
      title: 'Sosyal Medya Analitiği ve Duygu Analizi',
      description: 'Sosyal medya verilerini analiz ederek marka algısını ölçmek ve müşteri geri bildirimlerinden içgörüler elde etmek.',
      examples: [
        'Sosyal medya verilerinin toplanması ve analiz edilmesi.',
        'Duygu analizi ile müşteri memnuniyeti ve marka algısının değerlendirilmesi.',
        'Geri bildirimlerin analiz edilmesi yoluyla stratejik kararların alınması.'
      ],
      technologiesList: [
        "Python", 
        "SQL", 
        "NLTK", 
        "TextBlob", 
        "Seaborn"
      ]
    },
    {
      category: 'Time Series Forecasting',
      title: 'Zaman Serisi Analizi ile Talep Tahmini',
      description: 'Zaman serisi verileri analiz edilerek talep tahminleri yapılması ve bu tahminlere dayalı kararlar alınması.',
      examples: [
        'Zaman serisi modelleri ile talep projeksiyonlarının yapılması.',
        'SARIMA ve Prophet modelleri kullanarak tahminlerin gerçekleştirilmesi.',
        'Sezonluk ve trend bileşenlerinin analiz edilmesi yoluyla talep tahmini yapılması.'
      ],
      technologiesList: [
        "Python", 
        "SQL", 
        "SARIMA", 
        "Prophet", 
        "Statsmodels"
      ]
    },
    {
      category: 'Customer Retention Analysis',
      title: 'Müşteri Tutma Analizi',
      description: 'Mevcut müşterilerin elde tutulmasını sağlamak amacıyla müşteri davranışlarını ve memnuniyetini analiz etme.',
      examples: [
        'Müşteri memnuniyeti anketlerinin analizi.',
        'Müşteri davranış verilerinin analiz edilmesi yoluyla sadakat programlarının optimize edilmesi.',
        'Müşteri bağlılığını artırmaya yönelik stratejilerin geliştirilmesi.'
      ],
      technologiesList: [
        "Python", 
        "SQL", 
        "Churn Analysis", 
        "Retention Modeling", 
        "Pandas"
      ]
    },
    {
      category: 'Recommendation Systems',
      title: 'Ürün Öneri Sistemi Optimizasyonu',
      description: 'Kullanıcı davranış verilerini analiz ederek öneri sistemlerinin performansını artırma.',
      examples: [
        'İşbirlikçi filtreleme yöntemleri ile ürün önerilerinin kişiselleştirilmesi.',
        'Öneri algoritmalarının performans değerlendirmelerinin yapılması.',
        'Kullanıcı etkileşim verilerine dayalı olarak öneri sistemlerinin optimizasyonu.'
      ],
      technologiesList: [
        "Python", 
        "SQL", 
        "Scikit-Learn", 
        "Surprise", 
        "Collaborative Filtering"
      ]
    }
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
    <div className="bg-gray-100 w-full max-w-3xl h-auto relative rounded-lg shadow-lg flex flex-col overflow-hidden mx-4 md:mx-8 my-8 md:my-16">
      <button
        className="absolute top-2 right-4 text-gray-400 bg-opacity-70 p-2 focus:outline-none transition-transform transform hover:text-gray-700"
        onClick={closeModal}
        style={{ zIndex: 1000 }}
      >
        <XMarkIcon aria-hidden="true" className="h-8 w-8" />
      </button>
      <div className="flex-grow flex flex-col justify-center items-center pt-16 px-4 md:px-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedCard.title}</h3>
        <p className="text-gray-600 mb-6 text-center">{selectedCard.description}</p>
      </div>
      <div className="bg-white w-full">
        <div className="p-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Kullanılan Teknolojiler:</h4>
          <p className="text-gray-700 mb-4">
            {selectedCard.technologiesList.join(' | ')}
          </p>
          <h4 className="mt-4 text-lg font-semibold text-gray-800 mb-3">Yapılan İşlemler:</h4>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            {selectedCard.examples.map((tech, idx) => (
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
