'use client';

import { useState } from 'react';
import Experts from '@/components/experts'; // Ensure the correct path to the Chat component

export const maxDuration = 30;

export default function GenUI() {

  return (
    <div className="relative flex h-[calc(100vh_-_theme(spacing.16))] overflow-hidden pb-10 flex-col justify-center items-center">
      <div className="flex justify-center my-10">
        <Experts />
      </div>
    </div>
  );
}
