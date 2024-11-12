'use client';

import { Box, Card, TextField, Button, Typography, Stack, Select, MenuItem } from '@mui/material';
import { type CoreMessage } from 'ai';
import { useState, useEffect } from 'react';
import { continueTextConversation } from '@/app/actions';
import { readStreamableValue } from 'ai/rsc';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import SimpleCard from "@/components/SimpleCard";
import LoadingScreen from './loadingScreen'; // Import the LoadingScreen component

export const maxDuration = 30;

export default function Home() {
  const [messages, setMessages] = useState<CoreMessage[]>([]);
  const [input, setInput] = useState<string>('');
  const [showCards, setShowCards] = useState<boolean>(false);
  const [selectedModel, setSelectedModel] = useState<string>('chatgpt');
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

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

  if (loading) {
    return <LoadingScreen />; // Display the loading screen if loading is true
  }

  return (
    <Box sx={{ width: '100%', overflow: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', minHeight: '100vh' }}>
      <Box sx={{
         width: '100%',
         maxWidth: '774px',
         height: '240px',
         overflowY: 'auto',
         borderRadius: '8px',
         padding: '16px',
         '@media (max-width: 600px)': {
          height: '400px',
        },
         }}>
        {!messages.length && (
          <Stack direction='column' spacing={2} justifyContent="center" alignItems="center" sx={{ width: '100%', borderRadius:'8px' }}>
            <Typography variant='overline' sx={{ fontWeight: 'bold', paddingTop:'40px' }}>Workspace</Typography>
            <Typography variant="body2" gutterBottom sx={{ width: '100%', padding: '16px', borderRadius: '12px' }}>
              This framework explores integration of AI applications, expert systems, and collaborative project environments.
              <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}><br /></Box>
              It was created during 24h hackathon organized by Milvus and Google in Berlin.
            </Typography>
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
              <Typography variant='body2' sx={{ fontSize:'12px' }} >{message.content as string}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box
      sx={{
         width: '100%',
         maxWidth: '750px',
         marginBottom: '10px',
         marginTop:'-24px',
         '@media (max-width: 600px)': {
          marginTop:'-10px',
        },
         }}>
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
                <MenuItem value="gemini">Gemini</MenuItem>
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
      <Typography
        variant="caption"
        sx={{
          marginBottom: '4px',
          textAlign: 'left',
          width: '100%',
          maxWidth: '720px',
          marginTop: '20px',
          '@media (max-width: 600px)': {
            display: 'none', // Hide on mobile
          },
        }}
      >
        Threads
      </Typography>
      <Box
        sx={{
          width: '100%',
          maxWidth: '720px',
          borderBottom: '1px solid lightgrey',
          marginBottom: '20px',
          backgroundColor: 'lightgrey',
          '@media (max-width: 600px)': {
            display: 'none !important', // Use !important to override other styles
          },
        }}
      />
      <>
        {showCards ? (
          <Stack
            direction="row"
            spacing={2}
            sx={{
              '@media (max-width: 600px)': {
                display: 'none !important', // Use !important to override other styles
              },
            }}
          >
            <SimpleCard
              title="Sprint retro"
              description="Discussion about the recent sprint, contains notes and feedback from the team."
              lastChanged="September 15, 2024"
              link="/"
            />
            <SimpleCard
              title="Feature planning"
              description="Contains notes and feedback from the team about the upcoming features."
              lastChanged="October 5, 2024"
              link="/"
            />
            <SimpleCard
              title="Collab Epic"
              description="We are in the process of building a new epic. We will discuss the details and get feedback from the team."
              lastChanged="August 20, 2024"
              link="/"
            />
          </Stack>
        ) : (
          <Stack
          direction="row"
          spacing={2}
          sx={{
            '@media (max-width: 600px)': {
              display: 'none !important', // Use !important to override other styles
            },
          }}
        >
            <SimpleCard
              title="Development"
              description="This thread contatains the information related to software development topics."
              lastChanged="October 10, 2024"
              link="/"
            />
            <SimpleCard
              title="Moving to Germany"
              description="Thread related to issue associated with moving."
              lastChanged="October 12, 2024"
              link="/"
            />
            <SimpleCard
              title="Time management"
              description="Colelcting information about different ways to manage time for cadence."
              lastChanged="October 12, 2024"
              link="/"
            />
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
