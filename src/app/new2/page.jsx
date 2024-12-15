'use client'
import Gallery from '@/components/Gallery'
import { Disclosure, DisclosureButton, DisclosurePanel, Listbox, Popover } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, CheckIcon, InformationCircleIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react';
import logo from '@/images/altug.svg';
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from '@headlessui/react';
import Link from 'next/link'
import { cardsData } from '@/data/cards';
import { ChevronUpDownIcon } from '@heroicons/react/24/solid'
import Cards1 from '@/components/Gallery1'
import PowerBIDashboards from '@/components/Neden'
import PackageDetails from '@/components/Packagedetails'




const navigation = [
  { name: 'Dashboard', href: '/', current: false },
  { name: 'Avantajlar', href: '/new1', current: false },
  { name: 'POWER BI', href: '/new', current: false},
  { name: 'Paket İçerikleri', href: '/new2', current: true },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);


  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  

  const filteredItems =
    query === ''
      ? []
      : cardsData.filter((item) =>
          item.category.toLowerCase().includes(query.toLowerCase())
        );
  
        const categories = ['All', ...new Set(cardsData.map(item => item.category))];

        const [selectedCategory, setSelectedCategory] = useState('All');

        const categoryCounts = {
          All: cardsData.length,
          ...categories.reduce((acc, category) => {
            if (category !== 'All') {
              acc[category] = cardsData.filter(item => item.category === category).length;
            }
            return acc;
          }, {}),
        };

  return (
    <>
      <div className="min-h-full bg-slate-100">
        <div className="bg-gray-800 pb-32">
          <Disclosure as="nav" className="border-b border-indigo-300 border-opacity-25 bg-gray-800 lg:border-none">
            <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
              <div className="relative flex h-16 items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">

    <div className="flex flex-1 justify-start px-2 lg:ml-0 lg:justify-start">
    <div className=" w-full max-w-lg lg:max-w-lg">
    <div className="hidden md:block">
                  <div className="flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
    </div>
</div>
  

                {/* POPOVER INFO */}
                <div className=" lg:ml-4 lg:block">
      <div className="flex items-center">
        <Popover className="relative">
          <Popover.Button
            className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-0"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            <InformationCircleIcon aria-hidden="true" className="h-6 w-6 lg:size-8" strokeWidth={2.0} />
          </Popover.Button>

          <Popover.Panel className="absolute left-4 z-10 mt-3 w-80 max-w-md bg-white rounded-2xl shadow-xl p-6 transform -translate-x-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">İletişim</h2>
            <div className="px-0 pb-5 pt-5 sm:px-0 sm:pt-0 font-display">
              <dl className="space-y-8 px-2 sm:space-y-6 sm:px-0">
                <div>
                  <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Ad</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                    <p>Altuğ Gürgül</p>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">E-posta</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">altug.gurgul@gmail.com</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Telefon</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">+90 0536 311 5412</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">İletişim</dt>
                  <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 flex items-center space-x-4">
                    {/* LinkedIn Icon */}
                    <a href="https://www.linkedin.com/in/altuggurgul" target="_blank" rel="noopener noreferrer">
                      <img
                        src="/027-linkedin.svg"
                        alt="LinkedIn"
                        className="w-6 h-6 hover:opacity-80"
                      />
                    </a>

                    {/* WhatsApp Icon */}
                    <a href="https://wa.me/905363115412" target="_blank" rel="noopener noreferrer">
                      <img
                        src="/005-whatsapp.svg"
                        alt="WhatsApp"
                        className="w-6 h-6 hover:opacity-80"
                      />
                    </a>
                    {/* Gmail Icon */}
                    <a href="mailto:altug.gurgul@gmail.com" target="_blank" rel="noopener noreferrer">
                      <img
                        src="/gmail.svg"
                        alt="WhatsApp"
                        className="w-6 h-6 hover:opacity-80"
                      />
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </Popover.Panel>
        </Popover>
      </div>
    </div>
              </div>
            </div>
          </Disclosure>
          <div className="relative py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center lg:flex-row lg:justify-between">
        <div>
          <h1 className="text-center lg:text-left text-3xl sm:text-4xl font-bold tracking-tight text-white">POWER BI Dashboardlar</h1>
        </div>
        {/* TAB BÖLÜMÜ */}
        <Listbox value={selectedCategory} onChange={setSelectedCategory}>
  <div className="flex flex-col w-full max-w-xs">
    <label className="hidden lg:block text-sm font-medium leading-6 text-gray-100">Kategori Seç</label>
    <div className="relative mt-4 lg:mt-2 w-full">
      <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
        <span className="block truncate">{selectedCategory}</span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
        </span>
      </Listbox.Button>

      <Listbox.Options
        className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
      >
        {categories.map((category) => (
          <Listbox.Option
            key={category}
            value={category}
            className={({ active }) =>
              `relative cursor-default select-none py-2 pl-8 pr-4 ${
                active ? 'bg-indigo-600 text-white' : 'text-gray-900'
              }`
            }
          >
            <span className={`block truncate ${selectedCategory === category ? 'font-semibold' : 'font-normal'}`}>
              {category} ({categoryCounts[category]})
            </span>

            {selectedCategory === category ? (
              <span className="absolute inset-y-0 left-0 flex items-center pl-1.5 text-indigo-600">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            ) : null}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </div>
  </div>
</Listbox>




      </div>

    </div>
        </div>

        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
              
              {/* Your content */}
              <PackageDetails/>
              </div>
          </div>
        </main>
      </div>
    </>
  )
}
