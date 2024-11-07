import React from 'react';
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { IconSeparator, IconVercel } from '@/components/ui/icons'
import EnvCard from './cards/envcard'

export async function Header() {
  const avatarUrls = [
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    'https://images.unsplash.com/photo-1554151228-14d9def656e4',
    'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9',
  ];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-white ">
      <EnvCard />
      <Link href="/" rel="nofollow" className="mr-2 font-bold">
      Money maker
      </Link>
      <IconSeparator />
      <Link
        href="/genui"
        className={cn(buttonVariants({ variant: 'link' }), "mr-auto font-normal")}
      >
        <span className="hidden md:flex">Sales Training Agent</span>
      </Link>
      <div className="flex -space-x-4 mr-4">
        {avatarUrls.map((url, index) => (
          <div
            key={index}
            className="w-9 h-9 rounded-full border-2 border-white overflow-hidden transform transition-transform duration-200 hover:scale-200"
            title={`User ${index + 1}`}
          >
            <img src={url} alt={`User ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <Link
        href=""
        target="_blank"
        className={cn(buttonVariants())}
      >
        <span className="hidden sm:block">Share</span>
        <span className="sm:hidden">Share</span>
      </Link>
    </header>
  )
}
