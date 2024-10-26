'use client';
import React, { useState, useRef } from 'react';
import { cardsData } from '../data/cards';

const Cards = ({ searchTerm = '', category }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const swiperRef = useRef(null);

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
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);  // selectedImageIndex tanımlandı

  return (
<div className="w-full h-full px-4 py-8 font-display">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCards.map((card, index) => (
          <div
            key={index}
            className="group relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
            onClick={() => openModal(card)}
          >
            <div className="relative w-full h-64 bg-gray-200">
              <img
                src={card.imageSrc.src}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-xl brightness-75 group-hover:brightness-100"  // Parlaklığı azaltıldı
                />
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>  {/* Koyulaştırma efekti */}
            </div>

            {/* Çizgi ve Kategori Bilgisi - Üste Sola Dayalı */}
            <div className={`absolute bottom-8 left-0 w-36 h-12 flex items-center justify-start shadow-2xl ${
    card.category === 'HR' ? 'bg-orange-500' :
    card.category === 'Marketing' ? 'bg-red-500' :
    card.category === 'Sales' ? 'bg-teal-500' :
    card.category === 'Finance' ? 'bg-amber-500' :
    'bg-gray-500'  // Varsayılan renk, eğer tanımlanan bir kategori yoksa
  }`}>
    <div className="ml-4 text-white text-base font-semibold">
      {card.category}
    </div>
  </div>




            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-xl transition-all duration-500"></div>  {/* İnce beyaz kenarlık hover sırasında gelir */}
          </div>
        ))}
      </div>

      {selectedCard && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center transition-opacity duration-300 ease-in-out">
  <div className="relative w-full h-full flex flex-col-reverse md:flex-row">
    {/* Thumbnail Bölümü - Küçük ekranlarda yatay kaydırılabilir */}
    <div className="w-full md:w-1/5 h-full flex items-center justify-center p-4 bg-gray-900 max-h-screen overflow-x-auto md:overflow-y-auto">
      <div className="flex flex-wrap md:flex-col md:space-x-0 gap-4 md:space-y-4">
        {selectedCard.modalImages.map((image, index) => (
          <div
            key={index}
            className={`w-24 sm:w-48 h-24 flex-shrink-0 overflow-hidden rounded-lg cursor-pointer border-2 ${
              index === selectedImageIndex ? 'border-white' : 'border-transparent'
            } hover:border-gray-400 transition-all duration-300`}
            onClick={() => setSelectedImageIndex(index)}
          >
            <img
              src={image.default.src}
              alt={`Thumbnail ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>

    {/* Büyük resim bölümü */}
    <div className="w-full md:w-4/5 h-full flex items-center justify-center bg-gray-800">
      <div
        className="relative w-full px-8 h-full flex items-center justify-center transition-all duration-500 transform ease-in-out opacity-0 translate-x-10 scale-90"
        style={{ opacity: 1, transform: 'translateX(0) scale(1)' }}
      >
        <img
          src={selectedCard.modalImages[selectedImageIndex]?.default?.src || selectedCard.imageSrc.src}
          alt={selectedCard.title}
          className="max-h-full rounded-md max-w-full object-contain"
        />
      </div>
    </div>

    {/* Kapatma butonu */}
    <button
      className="absolute top-6 right-6 text-gray-400 hover:text-white transition duration-300 ease-in-out z-50"
      onClick={closeModal}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</div>




      )}
    </div>











  );
};

export default Cards;
