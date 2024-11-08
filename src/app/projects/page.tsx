'use client';

import { useState } from 'react';
import Chat from '@/components/projects'; // Ensure the correct path to the Chat component

export const maxDuration = 30;

export default function GenUI() {
  const [input, setInput] = useState<string>('');

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
    <div className="relative flex h-[calc(100vh_-_theme(spacing.16))] overflow-hidden pb-10 flex-col justify-center items-center">
      <div className="flex justify-center my-10">
        <Chat />
      </div>
    </div>
  );
}
