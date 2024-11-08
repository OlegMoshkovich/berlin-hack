'use client';

import { Box, Stack, Typography } from '@mui/material';
import { type CoreMessage } from 'ai';
import { useState } from 'react';
import { continueTextConversation } from '@/app/actions';
import { readStreamableValue } from 'ai/rsc';
import SimpleCard from "@/components/SimpleCard";

export const maxDuration = 30;

export default function AppList() {
  const [messages, setMessages] = useState<CoreMessage[]>([]);
  const [input, setInput] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newMessages: CoreMessage[] = [
      ...messages,
      { content: input, role: 'user' },
    ];
    setMessages(newMessages);
    setInput('');
    const result = await continueTextConversation(newMessages);
    for await (const content of readStreamableValue(result)) {
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: content as string,
        },
      ]);
    }
  }

  return (
    <Stack direction='column' spacing={3} justifyContent="center" alignItems="center">
          <Typography variant="overline" gutterBottom sx={{ fontWeight: 'bold' }}>
          Apps
          </Typography>
          <Typography variant="caption" gutterBottom sx={{ width: '720px', paddingBottom: '16px', backgroundColor: 'white', padding: '16px', borderRadius: '12px' }}>
          Apps are specialized experiences crafted to enhance the skills of team members. They are supported by AI agents, either voice or text-based, that are pre-trained and pre-prompted to interact with the team in a highly effective and focused manner. These apps are designed to provide targeted assistance, ensuring that team members can develop their abilities in a streamlined and efficient way.
          </Typography>
        <Stack direction="row" spacing={2}>
          <SimpleCard
            title="Sales Trainer"
            height="180px"
            description="Simulate sales calls to improve your pitch and closing skills."
            lastChanged="September 15, 2023"
            link="/sales"
          />
          <SimpleCard
            title="Speaking Coach"
            height="180px"
            description="Enhance your public speaking skills with personalized feedback and practice sessions."
            lastChanged="October 5, 2023"
            link="/coach"
          />
          <SimpleCard
            title="Therapist"
            height="180px"
            description="Engage in guided therapy sessions to explore your thoughts and emotions."
            lastChanged="August 20, 2023"
            link="/therapist"
          />
        </Stack>
      </Stack>
  );
}
