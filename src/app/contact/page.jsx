'use client'
import Gallery from '@/components/Gallery'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState, useEffect } from 'react';
import logo from '@/images/Group 6.svg';
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
import Contact from '@/components/Contact'


const items = [
  {
    category: 'Finance',
    name: 'Kart Başlık 1',
    description: 'Bu, finans sektörüne yönelik bir raporun özetini içerir.',
    link: 'https://www.example.com/finance-report'
  },
  {
    category: 'Sales',
    name: 'Kart Başlık 2',
    description: 'Satış performansını analiz eden önemli metrikler ve trendler.',
    link: 'https://www.example.com/sales-report'
  },
  {
    category: 'Sales',
    name: 'Kart Başlık 3',
    description: 'Satış performansını analiz eden önemli metrikler ve trendler.',
    link: 'https://www.example.com/hr-report'
  },
  {
    category: 'Marketing',
    name: 'Kart Başlık 4',
    description: 'Pazarlama stratejileri ve müşteri kazanımı üzerine analizler.',
    link: 'https://www.example.com/marketing-report'
  },
  {
    category: 'Marketing',
    name: 'Kart Başlık 5',
    description: 'Pazar eğilimleri ve kampanya başarılarının incelendiği rapor.',
    link: 'https://www.example.com/marketing-trends'
  },
  {
    category: 'HR',
    name: 'Kart Başlık 6',
    description: 'İnsan kaynakları süreçleri ve performans değerlendirmeleri.',
    link: 'https://www.example.com/marketing-trends'
  },
  {
    category: 'Marketing',
    name: 'Kart Başlık 7',
    description: 'Pazar eğilimleri ve kampanya başarılarının incelendiği rapor.',
    link: 'https://www.example.com/marketing-trends'
  },
  {
    category: 'Marketing',
    name: 'Kart Başlık 8',
    description: 'Pazar eğilimleri ve kampanya başarılarının incelendiği rapor.',
    link: 'https://www.example.com/marketing-trends'
  },
  {
    category: 'Sales',
    title: 'Kart Başlık 9',
    description: 'Satış performansını analiz eden önemli metrikler ve trendler.',
    link: 'https://app.powerbi.com/view?r=eyJrIjoiMzhlODAxYzctNTBmYS00NGU3LTg1ZWItYzI4ZjM3NzZlZTQ4IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9'
  },
  {
    category: 'Sales',
    title: 'Kart Başlık 10',
    description: 'Satış performansını analiz eden önemli metrikler ve trendler.',
    link: 'https://app.powerbi.com/view?r=eyJrIjoiMzhlODAxYzctNTBmYS00NGU3LTg1ZWItYzI4ZjM3NzZlZTQ4IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9'
  },
  {
    category: 'HR',
    title: 'Kart Başlık 11',
    description: 'İnsan kaynakları süreçleri ve performans değerlendirmeleri.',
    link: 'https://www.example.com/marketing-trends'
  },
];


const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '/', current: false },
  { name: 'Predictive Analytics', href: '/bilgi', current: false, requiresAuth: true },
  { name: 'Contact', href: '/contact', current: true },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '/bilgi' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems =
    query === ''
      ? []
      : items.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );
  
        const categories = ['All', ...new Set(items.map(item => item.category))];

        const [selectedCategory, setSelectedCategory] = useState('All');

        const categoryCounts = {
          All: items.length,
          ...categories.reduce((acc, category) => {
            if (category !== 'All') {
              acc[category] = items.filter(item => item.category === category).length;
            }
            return acc;
          }, {}),
        };

        const [isAuthenticated, setIsAuthenticated] = useState(false); // Giriş durumu
        const handleLinkClick = (e, requiresAuth) => {
          if (requiresAuth && !isAuthenticated) {
            e.preventDefault(); // Linkin normal davranışını engelle
            window.location.href = '/login'; // Kullanıcıyı login sayfasına yönlendir
          }
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
      <div className="min-h-full">
        <div className="bg-indigo-600 pb-32">
          <Disclosure as="nav" className="border-b border-indigo-300 border-opacity-25 bg-indigo-600 lg:border-none">
            <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
              <div className="relative flex h-16 items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
                <div className="flex items-center px-2 lg:px-0">
                  <div className="flex-shrink-0">
                    <img
                      alt="Your Company"
                      src={logo.src}
                      className="block h-8 w-auto"
                    />
                  </div>
                  <div className="hidden lg:ml-10 lg:block">
                    <div className="flex space-x-4">
                    {navigation.map((item) => (
        <Link href={item.href} key={item.name} legacyBehavior>
          <a
            onClick={(e) => handleLinkClick(e, item.requiresAuth)}
            aria-current={item.current ? 'page' : undefined}
            className={classNames(
              item.current
                ? 'bg-indigo-700 text-white'
                : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
              'rounded-md px-3 py-2 text-sm font-medium',
            )}
          >
            {item.name}
          </a>
        </Link>
      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
      <div className="w-full max-w-lg lg:max-w-xs">
        <Combobox
          as="div"
          value={searchTerm}
          onChange={(item) => {
            setSearchTerm(item?.name || '');
            setQuery(item?.name || '');
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
                            {item.name}
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
  
                <div className="flex lg:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-indigo-600 p-2 text-indigo-200 hover:bg-indigo-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                    <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                  </DisclosureButton>
                </div>
                <div className="hidden lg:ml-4 lg:block">
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="relative flex-shrink-0 rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon aria-hidden="true" className="h-6 w-6" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3 flex-shrink-0">
                      <div>
                        <MenuButton className="relative flex rounded-full bg-indigo-600 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img alt="" src={user.imageUrl} className="h-8 w-8 rounded-full" />
                        </MenuButton>
                      </div>
                      <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                      >
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          <Link href={item.href} legacyBehavior>
                            <a 
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                              {item.name}
                            </a>
                          </Link>
                        </MenuItem>
                      ))}
                      </MenuItems>
                    </Menu>
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
                    as="a"
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-indigo-700 text-white' : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
                      'block rounded-md px-3 py-2 text-base font-medium',
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
              <div className="border-t border-indigo-700 pb-3 pt-4">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img alt="" src={user.imageUrl} className="h-10 w-10 rounded-full" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">{user.name}</div>
                    <div className="text-sm font-medium text-indigo-300">{user.email}</div>
                  </div>
                  <button
                    type="button"
                    className="relative ml-auto flex-shrink-0 rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  {userNavigation.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </div>
              </div>
            </DisclosurePanel>
          </Disclosure>
          <div className="relative py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center lg:flex-row lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Contact</h1>
        </div>
        <div className="w-full max-w-lg mt-4 lg:mt-0">
          <Tab.Group onChange={(index) => setSelectedCategory(categories[index])}>
            <Tab.List className="flex space-x-1 rounded-xl bg-gray-800 p-1">
              {categories.map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      'w-full py-2.5 text-sm leading-5 font-medium text-white rounded-lg',
                      selected ? 'bg-blue-600 shadow' : 'text-blue-100 hover:bg-gray-700 hover:text-white'
                    )
                  }
                >
                  {category} ({categoryCounts[category]})
                </Tab>
              ))}
            </Tab.List>
          </Tab.Group>
        </div>
      </div>

    </div>
        </div>

        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
              
              {/* Your content */}
              <Contact/>
              </div>
          </div>
        </main>
      </div>
    </>
  )
}
