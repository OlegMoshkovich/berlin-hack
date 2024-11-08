'use client';

import { Box,Typography, Stack} from '@mui/material';
import { type CoreMessage } from 'ai';
import { useState } from 'react';
import { continueTextConversation } from '@/app/actions';
import { readStreamableValue } from 'ai/rsc';
import SimpleCard from "@/components/SimpleCard";

export const maxDuration = 30;

export default function Experts() {
  const [messages, setMessages] = useState<CoreMessage[]>([]);
  const [input, setInput] = useState<string>('');
  const [showCards, setShowCards] = useState<boolean>(true);

  const handleToggleCards = () => {
    setShowCards(!showCards);
  };

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
          Experts
          </Typography>
          <Typography variant="caption" gutterBottom sx={{ width: '720px', paddingBottom: '16px', backgroundColor: 'white', padding: '16px', borderRadius: '12px' }}>
          Experts are highly trained agents developed in collaboration with subject matter experts and specialized technical contributors. They utilize sophisticated architectures tailored to specific use cases, allowing them to act as adept copilots within workflows. Context-aware and highly skilled, these experts can be invited to projects to offer their expertise and provide valuable perspectives.          </Typography>
              <Stack direction="row" spacing={2}>
                <SimpleCard
                  title="Researcher"
                  height="180px"
                  description="Answers your questions by searching our company's documents and providing accurate information along with the source."
                  lastChanged="September 15, 2023"
                  link="/sample-expert"
                />
                <SimpleCard
                  title="Designer"
                  height="180px"
                  description="Answers your questions by searching our company's documents and providing accurate information along with the source."
                  lastChanged="October 5, 2023"
                  link="/sample-expert"
                />
                <SimpleCard
                  title="Developer"
                  height="180px"
                  description="A comprehensive guide to help you navigate. Access detailed chat history and usage tips."
                  lastChanged="August 20, 2023"
                  link="/sample-expert"
                />
              </Stack>
            </Stack>
  );
}
