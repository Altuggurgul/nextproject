'use client';

import { useState } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import logo from '@/images/Group 7.svg';

const topics = [
  { id: 1, name: 'Raporlama ve Dashboard Oluşturma' },
  { id: 2, name: 'Veri Modelleme ve DAX' },
  { id: 3, name: 'Veri Kaynaklarına Bağlantı ve Veri Dönüştürme' },
  { id: 4, name: 'Kurumsal Veri Yönetimi' },
  { id: 5, name: 'Güvenlik ve Erişim Yönetimi' },
];


export default function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName,
        email,
        topic: selectedTopic.name,
        message,
      }),
    });

    const data = await response.json();
    if (response.status === 200) {
      alert('E-posta başarıyla gönderildi!');
      setFullName('');
      setEmail('');
      setSelectedTopic(topics[0]);
      setMessage('');
    } else {
      alert('E-posta gönderilirken bir hata oluştu.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="relative isolate bg-white px-6 py-12 sm:py-8 lg:px-4">
      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">Projeniz hakkında konuşalım</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
        POWER BI ile veri odaklı çözümler geliştiriyor ve işletmelerin içgörü kazanmalarını sağlıyoruz.
        </p>
        <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          <form onSubmit={handleSubmit} className="lg:flex-auto">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="full-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Adınız Soyadınız
                </label>
                <div className="mt-2.5">
                  <input
                    id="full-name"
                    name="full-name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    autoComplete="name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  E-posta
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <Listbox value={selectedTopic} onChange={setSelectedTopic} disabled={isSubmitting}>
                  <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">Konu</Listbox.Label>
                  <div className="relative mt-2">
                    <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6" disabled={isSubmitting}>
                      <span className="block truncate">{selectedTopic.name}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                      </span>
                    </ListboxButton>
                    <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {topics.map((topic) => (
                        <ListboxOption
                          key={topic.id}
                          value={topic}
                          className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
                        >
                          <span className={`block truncate ${selectedTopic.id === topic.id ? 'font-semibold' : 'font-normal'}`}>
                            {topic.name}
                          </span>
                          {selectedTopic.id === topic.id && (
                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                              <CheckIcon aria-hidden="true" className="h-5 w-5" />
                            </span>
                          )}
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </div>
                </Listbox>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Mesaj
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
              </button>
            </div>
          </form>
          <div className="lg:mt-6 lg:w-80 lg:flex-none">
            <img alt="" src={logo.src} className="h-12 w-auto" />
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-xl">
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                  </dt>
                  <dd>
                    Istanbul, Türkiye
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                  </dt>
                  <dd>
                    <a href="tel:+90 (536) 3115412" className="hover:text-gray-900">
                      +90 (536) 3115412
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                  </dt>
                  <dd>
                    <a href="mailto:altug.gurgul@gmail.com" className="hover:text-gray-900">
                      altug.gurgul@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
