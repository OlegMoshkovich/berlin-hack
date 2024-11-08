'use client';

import { Box, Card, TextField, Button, Typography, Stack, Switch, FormControlLabel, Select, MenuItem } from '@mui/material';
import { type CoreMessage } from 'ai';
import { useState } from 'react';
import { continueTextConversation } from '@/app/actions';
import { readStreamableValue } from 'ai/rsc';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import SimpleCard from "@/components/SimpleCard";

export const maxDuration = 30;

export default function Home() {
  const [messages, setMessages] = useState<CoreMessage[]>([]);
  const [input, setInput] = useState<string>('');
  const [showCards, setShowCards] = useState<boolean>(true);
  const [selectedModel, setSelectedModel] = useState<string>('chatgpt');

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
    <Box sx={{ width: '100%', overflow: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', minHeight: '100vh' }}>


      <Box sx={{ width: '100%', maxWidth: '710px', height: '240px', overflowY: 'auto', borderRadius: '8px', padding: '16px' }}>
        {!messages.length && (
          <Stack direction='column' spacing={2} justifyContent="center" alignItems="center" sx={{ width: '100%' }}>
            <Typography variant='overline' sx={{ fontWeight: 'bold' }}>Orchestrated AI workspace | Prototype</Typography>
            <Typography variant="caption" gutterBottom sx={{ width: '720px', paddingBottom: '16px', backgroundColor: 'white', padding: '16px', borderRadius: '12px' }}>
            This framework was developed during 24h hackathon organized by Milvus and Google in Berlin.
            <br/>
            It is built with the intenion to demonstrate integration of AI applications, expert systems, and workspaces. </Typography>
          </Stack>
        )}
        {messages.map((message, index) => (
          <Box key={index} sx={{ whiteSpace: 'pre-wrap', display: 'flex', marginBottom: '16px' }}>
            <Box
              sx={{
                backgroundColor: message.role === 'user' ? '#D9E1EA' : '#D9E1EA',
                padding: '6px',
                marginLeft: message.role === 'user' ? 'auto' : undefined,
                borderRadius: '4px',
              }}
            >
              <Typography variant='body2' sx={{ fontSize:'13px' }} >{message.content as string}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box sx={{ width: '100%', maxWidth: '750px', marginBottom: '0px' }}>
        <Card sx={{ padding: '16px', backgroundColor:'transparent' }} elevation={0}>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Select
                value={selectedModel}
                onChange={event => setSelectedModel(event.target.value)}
                sx={{
                  height: '56px',
                  width: '150px',
                  marginRight: '8px',
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black',
                  },
                  '& .MuiSelect-select': {
                    color: 'black',
                  },
                }}
              >
                <MenuItem value="chatgpt">ChatGPT</MenuItem>
                <MenuItem value="claude">Claude</MenuItem>
                <MenuItem value="custom">Custom</MenuItem>
              </Select>
              <TextField
                type="text"
                value={input}
                onChange={event => {
                  setInput(event.target.value);
                }}
                fullWidth
                variant="outlined"
                placeholder='How can I help?'
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
      <Typography variant="caption" sx={{ marginBottom: '4px', textAlign: 'left', width: '100%', maxWidth: '720px', marginTop:'20px' }}>Threads</Typography>
      <Box sx={{ width: '100%', maxWidth: '720px', borderBottom: '1px solid lightgrey', marginBottom: '20px', backgroundColor:'lightgrey' }} />
      <>
        {showCards ? (
          <Stack direction='column' spacing={2} sx={{paddingTop:'0px'}}>
            <Stack direction="row" spacing={2}>
              <SimpleCard
                title="Sprint retro"
                description="Discussion about the recent sprint, contains notes and feedback from the team."
                lastChanged="September 15, 2023"
                link="/"
              />
              <SimpleCard
                title="Feature planning"
                description="Contains notes and feedback from the team about the upcoming features."
                lastChanged="October 5, 2023"
                link="/"
              />
              <SimpleCard
                title="Collab Epic"
                description="We are in the process of building a new epic. We will discuss the details and get feedback from the team."
                lastChanged="August 20, 2023"
                link="/"
              />
            </Stack>
          </Stack>
        ) : (
          <Stack direction='column' spacing={2} >
            <Stack direction="row" spacing={2}>
              <SimpleCard
                title="Github questions"
                description="Learn how to manage your private conversations securely."
                lastChanged="October 10, 2023"

              />
              <SimpleCard
                title="Legal questions"
                description="Understand and configure your privacy settings for private chats."
                lastChanged="October 12, 2023"

              />
              <SimpleCard
                title="Time management"
                description="Understand and configure your privacy settings for private chats."
                lastChanged="October 12, 2023"
              />
            </Stack>
          </Stack>
        )}
        <Box sx={{position:'absolute', bottom:0, display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <Button
            variant={showCards ? 'contained' : 'outlined'}
            onClick={() => setShowCards(true)}
            sx={{
              backgroundColor: showCards ? 'black' : 'transparent',
              color: showCards ? 'white' : 'black',
              borderColor: 'black',
              size: 'small',
              marginRight: '8px',
              '&:hover': {
                backgroundColor: showCards ? 'black' : 'rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            Public
          </Button>
          <Button
            variant={!showCards ? 'contained' : 'outlined'}
            onClick={() => setShowCards(false)}
            size='small'
            sx={{
              backgroundColor: !showCards ? 'black' : 'transparent',
              color: !showCards ? 'white' : 'black',
              borderColor: 'black',
              '&:hover': {
                backgroundColor: !showCards ? 'black' : 'rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            Private
          </Button>
        </Box>
      </>
    </Box>
  );
}
