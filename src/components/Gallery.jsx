'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import resim1 from '@/images/Report1/07_Sat_page_1.jpg';
import resim2 from '@/images/Report2/1Satıs_page_1.jpg';
import resim3 from '@/images/Report3/Stok__page_1.jpg';
import resim4 from '@/images/Report4/1_Uru_page_1.jpg';
import resim5 from '@/images/Report5/001_Satıs_page_1.jpg';
import resim6 from '@/images/Report6/2HR_Da_page_1.jpg';
import resim7 from '@/images/Report7/Sosya_page_1.jpg';
import resim8 from '@/images/Report8/Muste_page_1.jpg';
import resim9 from '@/images/Report9/1_Fin_page_1.jpg';
import resim10 from '@/images/Report10/1_Web_page_1.jpg';
import resim11 from '@/images/Report11/HR_Da_page_1.jpg';
import resim12 from '@/images/Report12/Satıs_page_1.jpg';

const importAllImages = (r) => {
  return r.keys().map(r);
};

const Cards = ({ searchTerm = '', category }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const swiperRef = useRef(null);

  const report1Images = importAllImages(require.context('@/images/Report1', false, /\.(jpe?g)$/));
  const report2Images = importAllImages(require.context('@/images/Report2', false, /\.(jpe?g)$/));
  const report3Images = importAllImages(require.context('@/images/Report3', false, /\.(jpe?g)$/));
  const report4Images = importAllImages(require.context('@/images/Report4', false, /\.(jpe?g)$/));
  const report5Images = importAllImages(require.context('@/images/Report5', false, /\.(jpe?g)$/));
  const report6Images = importAllImages(require.context('@/images/Report6', false, /\.(jpe?g)$/));
  const report7Images = importAllImages(require.context('@/images/Report7', false, /\.(jpe?g)$/));
  const report8Images = importAllImages(require.context('@/images/Report8', false, /\.(jpe?g)$/));
  const report9Images = importAllImages(require.context('@/images/Report9', false, /\.(jpe?g)$/));
  const report10Images = importAllImages(require.context('@/images/Report10', false, /\.(jpe?g)$/));
  const report11Images = importAllImages(require.context('@/images/Report11', false, /\.(jpe?g)$/));
  const report12Images = importAllImages(require.context('@/images/Report12', false, /\.(jpe?g)$/));

  const cardsData = [
    {
      category: 'Sales',
      imageSrc: resim1,
      modalImages: report1Images,
      title: 'Rapor 1',
      description: 'Satış performansını analiz eden önemli metrikler ve trendler.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiY2FiZGI5OTUtZDU3MC00Yzg0LTg3ZTItNGE4NmVhOGIzNTlkIiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9'
    },
    {
      category: 'Sales',
      imageSrc: resim2,
      modalImages: report2Images,
      title: 'Rapor 2',
      description: 'Satış performansını analiz eden önemli metrikler ve trendler.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiM2QwMzM1YzUtY2VlNi00ODM5LWI2ODAtM2ZiNDEyNzkwNjQ3IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9'
    },
    {
      category: 'Sales',
      imageSrc: resim3,
      modalImages: report3Images,
      title: 'Rapor 3',
      description: 'Satış performansını analiz eden önemli metrikler ve trendler.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiNDQ1YmEzZjYtOGZhNC00OGVlLTg0MTgtYjQ3OTI0YWE2MDg4IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9'
    },
    {
      category: 'Marketing',
      imageSrc: resim4,
      modalImages: report4Images,
      title: 'Rapor 4',
      description: 'Pazarlama stratejileri ve müşteri kazanımı üzerine analizler.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiZjlmMjRhY2EtYjg2OS00ZWY3LWE1ZTUtN2ZiMTQ0MzhmMWI5IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9'
    },
    {
      category: 'Sales',
      imageSrc: resim5,
      modalImages: report5Images,
      title: 'Rapor 5',
      description: 'Satış performansını analiz eden önemli metrikler ve trendler.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiZTc5NzJhYzItYjU4Ny00MzkwLWJmMjMtODU1Y2M0ZTFmOGI3IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9'
    },
    {
      category: 'HR',
      imageSrc: resim6,
      modalImages: report6Images,
      title: 'Rapor 6',
      description: 'İnsan kaynakları süreçleri ve performans değerlendirmeleri.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiYjc0ZTA5MmEtZWY3OC00Y2RlLWE2N2ItZDk1OTc1ZGQ5NDkyIiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9'
    },
    {
      category: 'Marketing',
      imageSrc: resim7,
      modalImages: report7Images,
      title: 'Rapor 7',
      description: 'Sosyal medya platformlarında içerik görüntülenme analizleri.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiYTZhODMxNGEtZjQ4ZC00NjNjLTg2MmUtODYzM2NiNDkyYWIxIiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9'
    },
    {
      category: 'Marketing',
      imageSrc: resim8,
      modalImages: report8Images,
      title: 'Rapor 8',
      description: 'Müşteri bazında satış, karlılık ve performans analizleri.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiMzhlODAxYzctNTBmYS00NGU3LTg1ZWItYzI4ZjM3NzZlZTQ4IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9'
    },
    {
      category: 'Finance',
      imageSrc: resim9,
      modalImages: report9Images,
      title: 'Rapor 9',
      description: 'Bu, finans sektörüne yönelik bir raporun özetini içerir.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiMzhlODAxYzctNTBmYS00NGU3LTg1ZWItYzI4ZjM3NzZlZTQ4IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9'
    },
    {
      category: 'Marketing',
      imageSrc: resim10,
      modalImages: report10Images,
      title: 'Rapor 10',
      description: 'Web sitesi sayfa görüntülenme ve kullanıcı davranış analizleri.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiMzhlODAxYzctNTBmYS00NGU3LTg1ZWItYzI4ZjM3NzZlZTQ4IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9'
    },
    {
      category: 'HR',
      imageSrc: resim11,
      modalImages: report11Images,
      title: 'Rapor 11',
      description: 'İnsan kaynakları süreçleri ve performans değerlendirmeleri.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiZDNmZmNmMWQtNWM1Yy00ZmIwLTgwYTYtYWViYTZkMmE1ZWMxIiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9'
    },
    {
      category: 'Sales',
      imageSrc: resim12,
      modalImages: report12Images,
      title: 'Rapor 12',
      description: 'Satış performansını analiz eden önemli metrikler ve trendler.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiYzRjZWRiMGYtYTg3ZC00NGFjLWJhZWQtNDcxM2Q3Yjc0MWY1IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9'
    },
  ];

  // Category'ye göre filtreleme
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
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        slidesPerView={1}  
        breakpoints={{
          640: {
            slidesPerView: 1,  // Küçük ekranlar için 1 slayt
          },
          1024: {
            slidesPerView: 3,  // Büyük ekranlar için 3 slayt
          },
        }}
        pagination={{
          clickable: true,
          el: '.custom-swiper-pagination',
        }}
        navigation={{
          nextEl: '.custom-swiper-button-next',
          prevEl: '.custom-swiper-button-prev',
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="relative"
      >
        {filteredCards.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-white rounded-lg shadow-sm border font-display hover:shadow-xl transition-shadow duration-300 overflow-hidden transform cursor-pointer"
              onClick={() => openModal(card)}
            >
              <img
                src={card.imageSrc.src}
                alt={card.title}
                className="w-full h-full lg:h-48 object-cover pt-6 px-4"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800">
                  {card.title} <span className="text-sm text-gray-600">({card.modalImages.length} sayfa)</span>
                </h3>
                <p className="text-gray-600 text-sm mt-2">{card.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="flex flex-col items-center justify-center mt-12 relative">
          <div className="custom-swiper-pagination text-center flex-grow mb-4"></div>
          <div className="flex space-x-3 z-10">
            <button className={`custom-swiper-button-prev border bg-white p-3 rounded-md shadow transition duration-300 ease-in-out hover:bg-gray-100`}>
              <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
            </button>
            <button className={`custom-swiper-button-next border bg-white p-3 rounded-md shadow transition duration-300 ease-in-out hover:bg-gray-100`}>
              <ChevronRightIcon className="h-6 w-6 text-gray-800" />
            </button>
          </div>
        </div>
      </Swiper>

      {selectedCard && (
        <div className="fixed inset-0 px-4 backdrop-blur-sm bg-black bg-opacity-50 z-50 flex items-center justify-center transition-opacity duration-300">
          <div className="bg-gray-100 w-full px-4 md:w-3/4 lg:w-2/3 xl:w-full h-5/6 md:h-auto relative rounded-lg shadow-lg flex flex-col z-60 overflow-hidden">
            <button
              className="absolute top-4 right-4 text-gray-400 bg-opacity-70 p-2 z-70 focus:outline-none transition-transform transform hover:text-gray-700"
              onClick={closeModal}
              style={{ zIndex: 1000 }}
            >
              <XMarkIcon aria-hidden="true" className="h-8 w-8" />
            </button>
            <div className="flex-grow flex flex-col justify-center items-center relative pt-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedCard.title}</h3>
              <p className="text-gray-700 mb-4">{selectedCard.description}</p>
              
              {/* Slider for Modal */}
              <Swiper
                ref={swiperRef}
                spaceBetween={10}
                navigation
                onSlideChange={(swiper) => {
                  const thumbnails = document.querySelectorAll('.thumbnail-image');
                  thumbnails.forEach((thumbnail, index) => {
                    if (index === swiper.activeIndex) {
                      thumbnail.classList.add('opacity-50');
                      thumbnail.classList.remove('opacity-100');
                    } else {
                      thumbnail.classList.add('opacity-100');
                      thumbnail.classList.remove('opacity-50');
                    }
                  });
                }}
                modules={[Pagination, Navigation]}
                className="w-full h-full max-h-[calc(90vh-120px)]"
              >
                {selectedCard.modalImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image.default.src}
                      alt={`Image ${index + 1}`}
                      className="w-full xl:h-fit object-contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <a
                href={selectedCard.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-blue-500 hover:text-blue-700 transition-colors"
              >
                Raporu Görüntüle
              </a>
            </div>
            <div className="p-4 bg-gray-100 bg-opacity-70 flex justify-center space-x-4 overflow-x-auto px-4">
              {selectedCard.modalImages.map((image, idx) => (
                <img
                  key={idx}
                  src={image.default.src}
                  alt={`${selectedCard.title} Thumbnail ${idx + 1}`}
                  className={`thumbnail-image w-24 h-24 object-cover rounded-md cursor-pointer transition-transform transform hover:scale-105 ${idx === 0 ? 'opacity-50' : 'opacity-100'}`}
                  onClick={() => swiperRef.current?.swiper?.slideTo(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
