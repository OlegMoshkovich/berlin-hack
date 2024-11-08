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
          <div style={{ fontWeight: 'bold' }}>Coach:</div>
          <ul>
            <li>
              This tool is designed to assist you in practicing and enhancing your speaking skills through realistic client interactions. It provides a safe environment to refine your communication approach, handle objections, and improve your persuasive techniques, tailored to various speaking scenarios and audience profiles.
            </li>
            <li>
              <div style={{ fontWeight: 'bold' }}>How to Use:</div>
              <ul>
                <li>Start the Simulation:</li>
                <li>Topic or Subject: Specify what you will be discussing.</li>
                <li>Target Audience: Define who you are speaking to.</li>
                <li>Role or Position of the Audience: Mention who you will be addressing (e.g., CEO, manager, team leader).</li>
                <li>Specific Objectives: Define what you aim to achieve in this conversation (e.g., persuade, inform, entertain).</li>
                <li>Conversation Difficulty (1-10): Indicate how challenging you would like the conversation to be.</li>
                <li>Audience Status: State whether the audience is new, familiar, or someone you have lost contact with.</li>
                <li>Speaking Stage: Specify whether this is an introduction, a follow-up, or a closing statement.</li>
              </ul>
            </li>
            <li>
              <div style={{ fontWeight: 'bold' }}>Engage in Conversation:</div>
              <ul>
                <li>The simulator will assume the role of an audience member and initiate a conversation based on the details you have provided.</li>
                <li>It will simulate realistic factors such as time constraints, audience engagement, topic relevance, urgency level, and the expectations of the audience, depending on the difficulty level you have set.</li>
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
