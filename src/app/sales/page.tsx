'use client';

import { useState } from 'react';
import { Typography, Box } from '@mui/material';
export const maxDuration = 30;

export default function GenUI() {
  const [input, setInput] = useState<string>('');
  return (
    <div className="relative flex h-[calc(100vh_-_theme(spacing.16))] overflow-hidden pb-10 flex-col justify-center items-center">

      {/* Eleven Labs Widget */}
      <div className="flex justify-center items-center h-screen">
        <div className="flex justify-center my-10">
        <elevenlabs-convai agent-id="gPtF50ZrlDJhUN9ta3U6"></elevenlabs-convai><script src="https://elevenlabs.io/convai-widget/index.js" async type="text/javascript"></script>        </div>
      </div>
      <Box
        sx={{
          position: 'absolute',
          top: '10px',
          right: '40px',
          width: '90%',
          maxHeight: '450px',
          borderRadius: '12px',
          padding: '16px',
          overflowY: 'auto',
        }}
      >
        <Typography variant="caption" sx={{ whiteSpace: 'pre-wrap' }}>
          <div style={{ fontWeight: 'bold' }}>Trainer:</div>
          <ul>
            <li>
              This tool is designed to help you practice and enhance your sales skills through realistic client interactions over the phone. It provides a safe environment to refine your approach, handle objections, and improve your closing techniques, tailored to various sales stages and client profiles.
            </li>
            <li>
              <div style={{ fontWeight: 'bold' }}>How to Use:</div>
              <ul>
                <li>Start the Simulation:</li>
                <li>Product or Service: Specify what you will be selling.</li>
                <li>Target Client: Define who you are speaking to.</li>
                <li>Role or Position of the Client: Mention who you will be addressing (e.g., decision-maker, influencer).</li>
                <li>Sales Objectives: Define what you aim to achieve in this conversation (e.g., close a deal, gather information).</li>
                <li>Conversation Difficulty (1-10): Indicate how challenging you would like the conversation to be.</li>
                <li>Client Status: State whether the client is new, existing, or a lead you have lost contact with.</li>
                <li>Sales Stage: Specify whether this is an initial pitch, a follow-up, or a closing call.</li>
              </ul>
            </li>
            <li>
              <div style={{ fontWeight: 'bold' }}>Engage in Conversation:</div>
              <ul>
                <li>The simulator will assume the role of a client and initiate a conversation based on the details you have provided.</li>
                <li>It will simulate realistic factors such as time constraints, client engagement, product relevance, urgency level, and the expectations of the client, depending on the difficulty level you have set.</li>
              </ul>
            </li>
            <li>
              <div style={{ fontWeight: 'bold' }}>Receive Feedback:</div>
              <ul>
                <li>At any point, you can request feedback to end the simulation.</li>
                <li>The simulator will provide constructive feedback on your performance, highlighting strengths and offering suggestions for improvement.</li>
              </ul>
            </li>
            <li>
              Remember, the more details you provide, the more personalized and effective your practice session will be. Let us get started whenever you are ready!
            </li>
          </ul>
        </Typography>
      </Box>
    </div>
  );
}
