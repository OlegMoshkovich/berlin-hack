import React from 'react';
import EnvCard from './cards/envcard'
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import { Link, Stack } from '@mui/material';

export async function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-white">
        <Link href="/" rel="nofollow" variant="overline" style={{ color: 'black', textDecoration: 'none' }}>
          Home
        </Link>
        <Stack direction="row" spacing={2}>
          <Link href="/apps" className="font-small" variant="overline" style={{ color: 'black', textDecoration: 'none' }}>
            Apps
          </Link>
          <Link href="/experts" variant="overline" style={{ color: 'black', textDecoration: 'none' }}>
            Experts
          </Link>
          <Link variant="overline" style={{ color: 'grey', textDecoration: 'none' }}>
            Projects
          </Link>
        </Stack>
      <PortraitOutlinedIcon sx={{ width: 24, height: 24 }} />
    </header>
  )
}
