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
              This tool is designed to help you practice and enhance your persuasion skills through realistic client interactions over the phone. It provides a safe environment to refine your approach, handle objections, and improve your closing techniques, tailored to various persuasion stages and client profiles.
            </li>
            <li>
              <div style={{ fontWeight: 'bold' }}>How to Use:</div>
              <ul>
                <li>Initiate the Training Session:</li>
                <li>Product or Service: Define the item or service you will be persuading about.</li>
                <li>Target Audience: Identify the individual or group you are addressing.</li>
                <li>Audience Role: Specify the role or position of your audience (e.g., decision-maker, influencer).</li>
                <li>Persuasion Goals: Clarify what you aim to achieve in this interaction (e.g., convince, inform).</li>
                <li>Challenge Level (1-10): Set the difficulty level for the persuasion scenario.</li>
                <li>Audience Status: Indicate whether the audience is new, familiar, or previously engaged.</li>
                <li>Interaction Stage: Define whether this is an introduction, a follow-up, or a concluding argument.</li>
              </ul>
            </li>
            <li>
              <div style={{ fontWeight: 'bold' }}>Engage in Persuasion:</div>
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
