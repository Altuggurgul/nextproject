'use client';
import React, { useState } from 'react';
import { cardsData } from '../data/cards';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

const Cards = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [infoModalOpen, setInfoModalOpen] = useState(false); // Info Modal Durumu


  const filteredCategories = ['All', ...new Set(
    cardsData
      .filter(
        (card) =>
          card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          card.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((card) => card.category)
  )];

  const filteredCards = cardsData.filter((card) => {
    const matchesCategory =
      selectedCategory === 'All' || card.category === selectedCategory;
    const matchesSearch =
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openModal = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  const toggleInfoModal = () => {
    setInfoModalOpen(!infoModalOpen);
  };

  return (
    <div className="w-full h-full px-4 py-8 font-display">
      {/* Arama Kutusu */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Kart başlığı veya içeriğine göre ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-lg px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
                <button
          onClick={toggleInfoModal}
          className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-500 transition"
        >
          Bilgi
        </button>
      </div>

      {/* Tab Menüsü */}
      <div className="overflow-x-auto whitespace-nowrap border-b border-gray-300 pb-4 mb-6">
        <div className="inline-flex space-x-2">
          {filteredCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 text-sm font-medium rounded-full transition ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-800 hover:bg-blue-100 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Kartlar */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 cursor-pointer"
            onClick={() => openModal(card)}
          >
            {/* Görsel */}
            <div className="relative">
              <img
                src={card.imageSrc.src}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded shadow-md">
                {card.category}
              </div>
            </div>

            {/* İçerik */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
              <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                {card.description}
              </p>
              <div className="mt-4 flex items-center">
                <button
                  onClick={() => openModal(card)}
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  Detaylar
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info Modal */}
{infoModalOpen && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
    <div className="relative max-w-3xl w-full bg-white rounded-lg shadow-lg overflow-hidden p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Sadelik ve Güç Buluşuyor</h2>
      <ul className="space-y-2 text-gray-700 text-sm">
        <li>
          <strong>Pakete Dahil Olanlar:</strong>
        </li>
        <li>- Gereksinim Analizi için 5 Saatlik Oturumlar</li>
        <li>- Marka Yönergelerine Uygun Olarak Tasarım Değişiklikleri (Logo, Renkler) için 5 Saatlik Destek</li>
        <li>- Önceden Belirlenmiş Panoların Özelleştirilmesi için 10 Saatlik Destek – Yönetici Özeti, Çeşitlilik, Yetenek Kazanımı, Performans ve İşgücü Devir Hızı</li>
        <li>- Veri Doğrulama Süreci için 3 Saat</li>
        <li>- Canlı Eğitim Oturumu için 2 Saat</li>
        <li>
          <strong>Ek Hizmetler:</strong>
        </li>
        <li>- Veri Modelleme ve ETL Süreçleri</li>
        <li>- Özel Rapor Geliştirme</li>
        <li>- Role Dayalı Güvenlik</li>
        <li>- Özel Veri Entegrasyonu</li>
      </ul>
      <button
        onClick={toggleInfoModal}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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


      {/* Modal */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
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
                />
              </div>

              {/* Sağ Bilgi Alanı */}
              <div className="w-full md:w-1/3 p-4 flex flex-col justify-between overflow-y-auto">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-white">{selectedCard.title}</h2>
                  <p className="text-gray-300 text-base">{selectedCard.description}</p>
                </div>

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
    </div>
  );
};

export default Cards;
