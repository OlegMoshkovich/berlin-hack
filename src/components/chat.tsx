'use client';

import { Box, Card, TextField, Button, Typography, Stack } from '@mui/material';
import { type CoreMessage } from 'ai';
import { useState } from 'react';
import { continueTextConversation } from '@/app/actions';
import { readStreamableValue } from 'ai/rsc';
import { IconArrowUp } from '@/components/ui/icons';
import Link from "next/link";
import AboutCard from "@/components/cards/aboutcard";
import SimpleCard from "@/components/SimpleCard";

export const maxDuration = 30;

export default function ChatComponent() {
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
    <Box sx={{ width: '100%', overflow: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Box sx={{ width: '100%', maxWidth: '600px', marginBottom: '40px' }}>
        <Card sx={{ padding: '16px' }}>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex' }}>
              <TextField
                type="text"
                value={input}
                onChange={event => {
                  setInput(event.target.value);
                }}
                fullWidth
                variant="outlined"
                placeholder='How can I help you'
                InputProps={{
                  endAdornment: (
                    <Button type="submit" disabled={!input.trim()}>
                      <IconArrowUp />
                    </Button>
                  ),
                }}
              />
            </Box>
          </form>
        </Card>
      </Box>
      {messages.length > 0 ? (
        <Box sx={{ width: '100%', maxWidth: '600px', height: '400px', overflowY: 'auto', border: '1px solid lightgrey', borderRadius: '8px', padding: '16px' }}>
          {messages.map((message, index) => (
            <Box key={index} sx={{ whiteSpace: 'pre-wrap', display: 'flex', marginBottom: '16px' }}>
              <Box
                sx={{
                  backgroundColor: message.role === 'user' ? 'lightgrey' : 'transparent',
                  marginLeft: message.role === 'user' ? 'auto' : undefined,
                  padding: '16px',
                  borderRadius: '8px',
                }}
              >
                <Typography>{message.content as string}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      ) : (
        <Stack direction='column' spacing={2}>
          <Stack direction="row" spacing={2}>
            <SimpleCard
              title="Chat Introduction"
              description="Learn how to use the chat effectively."
              lastChanged="September 15, 2023"
              link="/chat-introduction"
            />
            <SimpleCard
              title="Feature Highlights"
              description="Discover the new features added recently."
              lastChanged="October 5, 2023"
              link="/feature-highlights"
            />
            <SimpleCard
              title="User Guide"
              description="A comprehensive guide to help you navigate."
              lastChanged="August 20, 2023"
              link="/user-guide"
            />
          </Stack>
          <Stack direction="row" spacing={2}>
            <SimpleCard
              title="FAQ"
              description="Frequently asked questions about the chat."
              lastChanged="July 30, 2023"
              link="/faq"
            />
            <SimpleCard
              title="Support"
              description="Contact support for any issues or queries."
              lastChanged="October 1, 2023"
              link="/support"
            />
            <SimpleCard
              title="Updates"
              description="Stay updated with the latest news and updates."
              lastChanged="September 25, 2023"
              link="/updates"
            />
          </Stack>
        </Stack>
      )}
    </Box>
  );
}
