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
          <elevenlabs-convai agent-id="ceXkA4PJYCxqUZVRX9ep"></elevenlabs-convai>
          <script src="https://elevenlabs.io/convai-widget/index.js" async type="text/javascript"></script>
        </div>
      </div>
      <script src="https://elevenlabs.io/convai-widget/index.js" async type="text/javascript"></script>
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
          <div style={{fontWeight: 'bold'}}>Trainer:</div>
          <ul>
            <li>
              This is a tool designed to help you practice and enhance your sales skills through realistic client interactions over the phone. It provides a safe environment to refine your approach, handle objections, and improve your closing techniques, tailored to various sales stages and client profiles.
            </li>
            <li>
              <div style={{fontWeight: 'bold'}}>How to Use:</div>
              <ul>
                <li>Start the Simulation:</li>
                <li>Product or Service: Specify what you are selling.</li>
                <li>Target Client: Define who you are selling to.</li>
                <li>Client's Role or Position: Mention who you will be speaking with (e.g., CEO, manager, procurement officer).</li>
                <li>Specific Objectives: Define what you aim to achieve in this conversation (e.g., schedule a meeting, close a sale, gather information).</li>
                <li>Conversation Difficulty (1-10): Indicate how challenging you would like the conversation to be.</li>
                <li>Client Status: State whether the client is new, existing, or someone you have lost contact with.</li>
                <li>Sales Stage: Specify whether this is an initial contact, a follow-up, or a closing conversation.</li>
              </ul>
            </li>
            <li>
              <div style={{fontWeight: 'bold'}}>Engage in Conversation:</div>
              <ul>
                <li>The simulator will assume the role of a client and initiate a phone conversation based on the details you have provided.</li>
                <li>It will simulate realistic factors such as time constraints, competitor involvement, budget considerations, urgency level, and the client's pain points, depending on the difficulty level you have set.</li>
              </ul>
            </li>
            <li>
              <div style={{fontWeight: 'bold'}}>Receive Feedback:</div>
              <ul>
                <li>At any point, you can say feedback to end the simulation.</li>
                <li>The simulator will provide constructive feedback on your performance, highlighting strengths and offering suggestions for improvement.</li>
              </ul>
            </li>
            <li>
              Remember, the more details you provide, the more personalized and effective your practice session will be. Let's get started whenever you are ready!
            </li>
          </ul>
        </Typography>
      </Box>
    </div>
  );
}
