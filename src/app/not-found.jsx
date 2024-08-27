import Link from 'next/link'

import { Button } from '@/components/Button'
import logo from '@/images/Group 7.svg';
import { SlimLayout } from '@/components/SlimLayout'

export default function NotFound() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <img
            alt="Your Company"
            src={logo.src}
            className="block h-12 w-auto"
          />
        </Link>
      </div>
      <p className="mt-20 text-sm font-medium text-gray-700">404</p>
      <h1 className="mt-3 text-lg font-semibold text-gray-900">
        Sayfa bulunamadı
      </h1>
      <p className="mt-3 text-sm text-gray-700">
        Üzgünüz, aradığınız sayfayı bulamadık.
      </p>
      <Button href="/" className="mt-10">
        Ana Sayfaya geri dön
      </Button>
    </SlimLayout>
  )
}
