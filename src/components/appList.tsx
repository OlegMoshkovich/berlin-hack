'use client';

import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { type CoreMessage } from 'ai';
import { useState } from 'react';
import { continueTextConversation } from '@/app/actions';
import { readStreamableValue } from 'ai/rsc';
import SimpleCard from "@/components/SimpleCard";

export const maxDuration = 30;

export default function AppList() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack
      direction="column"
      spacing={3}
      justifyContent="center"
      alignItems="center"
      sx={{ width: '100%', padding: isMobile ? '8px' : '16px' }}
    >
      <Typography variant="overline" gutterBottom sx={{ fontWeight: 'bold',paddingTop: isMobile ? '50px' : '0' }}>
        Apps
      </Typography>
      <Typography
        variant="caption"
        gutterBottom
        sx={{
          width: isMobile ? '90%' : '720px',
          paddingBottom: '16px',
          backgroundColor: 'transparent',
          padding: '16px',
          borderRadius: '12px',
          textAlign: 'center',

        }}
      >
        Apps are specialized experiences crafted to enhance the skills of team members. They are supported by AI agents, either voice or text-based, that are pre-trained and pre-prompted to interact with the team in a highly effective and focused manner. These apps are designed to provide targeted assistance, ensuring that team members can develop their abilities in a streamlined and efficient way.
      </Typography>
      <Stack
        direction={isMobile ? 'column' : 'row'}
        spacing={2}
        sx={{ width: '100%', alignItems: 'center' }}
      >
        <SimpleCard
          title="Sales Trainer"
          height="180px"
          description="Simulate sales calls to improve your pitch and closing skills."
          lastChanged="September 15, 2024"
          link="/sales"
        />
        <SimpleCard
          title="Speaking Coach"
          height="180px"
          description="Enhance your public speaking skills with personalized feedback and practice sessions."
          lastChanged="October 5, 2024"
          link="/coach"
        />
        <SimpleCard
          title="Therapist"
          height="180px"
          description="Engage in guided therapy sessions to explore your thoughts and emotions."
          lastChanged="August 20, 2024"
          link="/therapist"
        />
      </Stack>
    </Stack>
  );
}
