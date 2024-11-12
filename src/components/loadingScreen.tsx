import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const LoadingScreen: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'white',
        color: 'lightgray',
        backgroundImage: 'radial-gradient(gray 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }}
    >
      <Typography
        component="div"
        sx={{
          fontWeight: 'bold',
          color: 'black',
          letterSpacing: '14px',
          fontSize: {
            xs: theme.typography.h5.fontSize, // Mobile
            sm: theme.typography.h2.fontSize, // Default
          },
          position: 'relative',
          top: {
            xs: '-100px', // Move up by 60px on mobile
            sm: '-40px',   // Default position on larger screens
          },
        }}
      >
        WORKSPACE
      </Typography>
    </Box>
  );
};

export default LoadingScreen;
