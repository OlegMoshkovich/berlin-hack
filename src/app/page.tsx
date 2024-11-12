import React, { useState, useEffect } from 'react';
import Home from "@/components/home";
import LoadingScreen from "@/components/loadingScreen"; // Import the LoadingScreen component
import { Box } from '@mui/material';

export default function HomePage() {
  return (
    <Box
      sx={{
        width: '100dvw',
        height: '100dvh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        pb: 10,
      }}
    >
      <Home />
    </Box>
  );
}
