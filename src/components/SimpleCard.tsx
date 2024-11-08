import React from 'react';
import { Paper, Typography, Stack } from '@mui/material';
import Link from 'next/link';

interface SimpleCardProps {
  title: string;
  description: string;
  lastChanged: string;
  link: string;
  modified?: boolean;
  height?: string;
}

// Utility function to truncate the title
const truncateTitle = (title: string, maxLength: number = 20) => {
  return title.length > maxLength ? `${title.substring(0, maxLength - 3)}...` : title;
};

const SimpleCard: React.FC<SimpleCardProps> = ({ title, description, lastChanged, link, modified = true, height = '140px' }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: '16px',
        margin: '16px',
        width: '230px',
        height: height,
        cursor: 'pointer',
        borderRadius: '12px',
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
          boxShadow: 6,
        },
      }}
      onClick={() => window.location.href = link}
    >
      <Stack direction="column" justifyContent="space-between" height="100%">
        <Typography variant="overline" component="h2" gutterBottom sx={{ lineHeight: '1.6' }}>
          {truncateTitle(title)}
        </Typography>
        <Typography variant="caption" gutterBottom sx={{ lineHeight: '1.3', color: 'grey', height: '60px', marginBottom: '6px' }}>
          {description}
        </Typography>
        {modified && (
          <Typography variant="caption" color="textSecondary">
            Modified: {lastChanged}
          </Typography>
        )}
      </Stack>
    </Paper>
  );
};

export default SimpleCard;
