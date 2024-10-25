'use client'
import Gallery from '@/components/Gallery'
import { Disclosure, DisclosureButton, DisclosurePanel, Listbox, Menu, MenuButton, MenuItem, MenuItems, Popover } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, CheckIcon, InformationCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState, useEffect } from 'react';
import logo from '@/images/altug.svg';
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
  Tab
} from '@headlessui/react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { cardsData } from '@/data/cards';
import { ChevronUpDownIcon } from '@heroicons/react/24/solid'




const navigation = [
  { name: 'Dashboard', href: '/', current: true },
  { name: 'Veri Analitiği', href: '/verianalitigi', current: false },
  { name: 'POWER BI', href: '/bilgi', current: false},
  { name: 'İletişim', href: '/contact', current: false },
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
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full bg-slate-100">
        <div className="bg-gray-800 pb-32">
          <Disclosure as="nav" className="border-b border-indigo-300 border-opacity-25 bg-gray-800 lg:border-none">
            <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
              <div className="relative flex h-16 items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
                <div className="flex flex-1 justify-center px-2 lg:ml-0 lg:justify-start">
      <div className="hidden w-full max-w-lg lg:max-w-xs">
        <Combobox
          as="div"
          value={searchTerm}
          onChange={(item) => {
            setSearchTerm(item?.category || '');
            setQuery(item?.category || '');
          }}
        >
          <div className="relative">
            <MagnifyingGlassIcon
              className="pointer-events-none absolute left-4 top-2.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <ComboboxInput
              className="h-10 w-full rounded-md border-0 bg-white pl-10 pr-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              placeholder="Search..."
              onChange={(event) => {
                setQuery(event.target.value);
                setSearchTerm(event.target.value);
              }}
            />
            <Transition
              as="div" // Fragment yerine "div" kullanıyoruz
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery('')}
            >
              {filteredItems.length > 0 && (
                <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredItems.map((item) => (
                    <ComboboxOption
                      key={item.id}
                      value={item}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                        }`
                      }
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {item.category}
                          </span>
                          {selected && (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? 'text-white' : 'text-indigo-600'
                              }`}
                            >
                              <MagnifyingGlassIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          )}
                        </>
                      )}
                    </ComboboxOption>
                  ))}
                </ComboboxOptions>
              )}
            </Transition>
          </div>
        </Combobox>
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
            <InformationCircleIcon aria-hidden="true" className="h-6 w-6" strokeWidth={2.0} />
          </Popover.Button>

          <Popover.Panel className="absolute left-4 z-10 mt-3 w-80 max-w-md bg-white rounded-2xl shadow-xl p-6 transform -translate-x-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">İletişim</h2>
            <div className="px-4 pb-5 pt-5 sm:px-0 sm:pt-0 font-display">
              <dl className="space-y-8 px-4 sm:space-y-6 sm:px-0">
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

            <DisclosurePanel className="lg:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
            <DisclosureButton
              onClick={(e) => handleLinkClick(e, item.requiresAuth)}
              key={item.name}
              as="div"
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-indigo-700 text-white' : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              <Link href={item.href} passHref legacyBehavior>
                <a className="block w-full h-full">{item.name}</a>
              </Link>
            </DisclosureButton>
          ))}
              </div>
            </DisclosurePanel>
          </Disclosure>
          <div className="relative py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center lg:flex-row lg:justify-between">
        <div>
          <h1 className="text-center lg:text-left text-3xl sm:text-4xl font-bold tracking-tight text-white">POWER BI Rapor Örnekleri</h1>
        </div>
        {/* TAB BÖLÜMÜ */}
        <Listbox value={selectedCategory} onChange={setSelectedCategory}>
      <label className="block text-sm font-medium leading-6 text-gray-900">Kategori Seç</label>
      <div className="relative mt-2 w-full max-w-xs">
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
    </Listbox>

      </div>

    </div>
        </div>

        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
              
              {/* Your content */}
              <Gallery searchTerm={searchTerm} category={selectedCategory}/>
              </div>
          </div>
        </main>
      </div>
    </>
  )
}
