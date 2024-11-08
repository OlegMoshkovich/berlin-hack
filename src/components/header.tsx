import React from 'react';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import { Link, Stack, Box } from '@mui/material';

export async function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-white">
        <Link href="/" rel="nofollow" variant="overline" sx={{ color: 'black', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
          <Box sx={{width:'20px',height:'20px',backgroundColor:'black',color:'white', border:'3px solid black', borderRadius:'2px'}}/>
        </Link>
        <Stack direction="row" spacing={2}>

          <Link href="/experts" variant="overline" sx={{ color: 'black', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            Experts
          </Link>
          <Link href="/apps" className="font-small" variant="overline" sx={{ color: 'black', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            Apps
          </Link>
          <Link href="/projects" variant="overline" sx={{ color: 'black', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            Projects
          </Link>
        </Stack>
        <Box sx={{width:'20px',height:'20px',color:'white', border:'3px solid black', borderRadius:'2px'}}/>
    </header>
  )
}
