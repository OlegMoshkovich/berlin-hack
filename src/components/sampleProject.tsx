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
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Image from 'next/image';

export const maxDuration = 30;
const avatarUrls = [
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
  'https://images.unsplash.com/photo-1554151228-14d9def656e4',
  'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9',
];

export default function SampleProject() {
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
      <Box sx={{ position: 'absolute', top: '20px', right: '0px' }}>
        <div className="flex -space-x-4 mr-4">
          {avatarUrls.map((url, index) => (
            <div
              key={index}
              className="w-9 h-9 rounded-full border-2 border-white overflow-hidden transform transition-transform duration-200 hover:scale-200"
              title={`User ${index + 1}`}
            >
              <img src={url} alt={`User ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </Box>
      <Box sx={{ position: 'absolute', top: '80px', right: '24px' }}>
        <Box
          sx={{
            width: '300px',
            height: '300px',
            backgroundColor: 'lightgrey',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/project.png"
            alt="Project Image"
            layout="fill"
            objectFit="cover"
          />
        </Box>

      </Box>
      <Box sx={{ position: 'absolute', top: '400px', right: '24px' }}>

      </Box>




      <Box sx={{ width: '100%', maxWidth: '600px', marginBottom: '40px' }}>
      <Card sx={{ padding: '16px', backgroundColor:'transparent' }} elevation={0}>
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
                      <ArrowUpwardIcon sx={{ color:'black ' }}/>
                    </Button>
                  ),
                }}
              />
            </Box>
          </form>
        </Card>
      </Box>

      <Box sx={{ width: '100%', maxWidth: '600px', height: '280px', overflowY: 'auto', border: '1px solid lightgrey', borderRadius: '8px', padding: '16px' }}>
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
    </Box>
  );
}
