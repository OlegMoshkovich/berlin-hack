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
          {avatarUrls.map((_, index) => (
            <div
              key={index}
              className="w-9 h-9 rounded-full border-2 border-white overflow-hidden transform transition-transform duration-200 hover:scale-200"
              title={`User ${index + 1}`}
              style={{ backgroundColor: `hsl(0, 0%, ${index * 10 + 20}%)` }}
            >
            </div>
          ))}
        </div>
      </Box>
      <Box sx={{ position: 'absolute', top: '80px', right: '24px' }}>

      </Box>
      <Stack direction='column' justifyContent="center" alignItems="center" spacing={2} sx={{ position: 'absolute', top: '20px' }}>
        <Typography variant="overline" gutterBottom sx={{ fontWeight: 'bold' }}>
            Mobile wireframe workspace
          </Typography>
            <Typography variant="caption" gutterBottom sx={{ width: '720px', paddingBottom: '16px', backgroundColor: 'white', padding: '16px', borderRadius: '12px' }}>
          Projects serve as collaborative workspaces where teams can engage in meaningful discussions and share insights related to their specific tasks. These projects house essential documents, ensuring that all team members, including project custodians, are well-informed about the project&apos;s context. Additionally, projects can include experts who contribute their knowledge and expertise to discussions when invited, fostering a rich environment for collaboration and innovation.
          </Typography>
      </Stack>

      <Box sx={{ width: '100%', maxWidth: '600px', marginBottom: '40px', marginTop:'120px' }}>
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
                    <Button type="submit" sx={{ border:'1px solid lightgrey', borderRadius:'8px', backgroundColor:'black' }} disabled={!input.trim()}>
                      <ArrowUpwardIcon sx={{ color:'white' }}/>
                    </Button>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: 'black',
                    },
                  },
                }}
              />
            </Box>
          </form>
        </Card>
      </Box>

      <Box sx={{ width: '100%', maxWidth: '600px', height: '200px', overflowY: 'auto', borderRadius: '8px', padding: '16px' }}>
        {messages.map((message, index) => (
          <Box key={index} sx={{ whiteSpace: 'pre-wrap', display: 'flex', marginBottom: '16px' }}>
            <Box
              sx={{
                backgroundColor: message.role === 'user' ? '#B4C5D6' : '#B4C5D6',
                padding: '6px',
                marginLeft: message.role === 'user' ? 'auto' : undefined,
                borderRadius: '4px',
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
