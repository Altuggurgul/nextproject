'use client';
import React, { useState, useRef } from 'react';
import { cardsData } from '../data/cards';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

const Cards = ({ searchTerm = '', category }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const swiperRef = useRef(null);
  const [showFullImage, setShowFullImage] = useState(false); // Eksik olan useState

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
        {/* Görsel */}
        <div className="relative w-full h-64 bg-gray-200">
          <img
            src={card.imageSrc.src}
            alt={card.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-xl brightness-75 group-hover:brightness-100"
          />
        </div>

        {/* Kartın Alt Bilgi Alanı */}
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <h3 className="text-lg font-semibold text-white">{card.title}</h3>
  {/* Detaylar Linki */}
  <button
    onClick={() => openModal(card)} // Modal açmak için
    className="flex items-center text-sm text-blue-400 hover:underline mt-2"
  >
    Detaylar
    <ArrowRightIcon className="w-4 h-4 ml-1" />
  </button>
        </div>

        {/* Çizgi ve Kategori Bilgisi */}
        <div
          className={`absolute top-4 left-4 px-3 py-1 rounded-lg text-white text-sm font-semibold ${
            card.category === 'HR'
              ? 'bg-orange-500'
              : card.category === 'Marketing'
              ? 'bg-red-500'
              : card.category === 'Sales'
              ? 'bg-teal-500'
              : card.category === 'Finance'
              ? 'bg-amber-500'
              : 'bg-gray-500'
          }`}
        >
          {card.category}
        </div>

        {/* Beyaz Kenarlık Hover Efekti */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-xl transition-all duration-500"></div>
      </div>
    ))}
  </div>

  {selectedCard && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center transition-opacity duration-300 ease-in-out">
    <div className="relative w-full h-full bg-gray-900 flex flex-col">
      {/* Üst Bölüm */}
      <div className="flex flex-col md:flex-row h-4/5 p-6">
        {/* Sol Resim */}
        <div className="w-full md:w-2/3 h-full flex items-center justify-center bg-gray-800 rounded-lg">
          <img
            src={
              selectedCard.modalImages[selectedImageIndex]?.default?.src ||
              selectedCard.imageSrc.src
            }
            alt={selectedCard.title}
            className="max-h-full max-w-full object-contain rounded-md"
            onClick={() => setShowFullImage(true)} // Küçük ekranlarda resmi büyütmek için
          />
        </div>

        {/* Sağ Bilgi Alanı */}
        <div className="w-full md:w-1/3 p-4 flex flex-col justify-between overflow-y-auto">
          {/* Başlık ve Açıklama */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">{selectedCard.title}</h2>
            <p className="text-gray-300 text-base">{selectedCard.description}</p>
          </div>

          {/* En İyi Görüşler */}
          <div className="mt-6 space-y-3">
            <h3 className="text-lg font-semibold text-white">En İyi Görüşler</h3>
            <ul className="space-y-2 text-sm">
              {selectedCard.insights.map((insight, index) => (
                <li key={index} className="text-gray-300">
                  <span className="font-semibold text-white">{insight.title}: </span>
                  {insight.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Alt Thumbnail Bölümü */}
      <div className="w-full h-1/5 bg-gray-800 p-4 overflow-x-auto flex space-x-4">
        {selectedCard.modalImages.map((image, index) => (
          <div
            key={index}
            className={`w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg cursor-pointer border-2 ${
              index === selectedImageIndex
                ? 'border-white'
                : 'border-transparent'
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

      {/* Kapatma Butonu */}
      <button
        className="absolute top-4 right-4 text-gray-400 hover:text-white transition duration-300 ease-in-out"
        onClick={closeModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </div>
)}


{showFullImage && (
  <div className="fixed inset-0 z-[60] bg-black bg-opacity-95 flex items-center justify-center">
    <img
      src={
        selectedCard.modalImages[selectedImageIndex]?.default?.src ||
        selectedCard.imageSrc.src
      }
      alt="Büyük Resim"
      className="object-contain max-w-full max-h-full"
    />
    <button
      className="absolute top-4 right-4 text-gray-400 hover:text-white transition duration-300 ease-in-out"
      onClick={() => setShowFullImage(false)} // Büyütülen resmi kapatma
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
)}






</div>












  );
};

export default Cards;
