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
        <div className="flex justify-center items-center h-screen">
          <div className="flex justify-center my-10">
          <elevenlabs-convai agent-id="gPtF50ZrlDJhUN9ta3U6"></elevenlabs-convai><script src="https://elevenlabs.io/convai-widget/index.js" async type="text/javascript"></script>        </div>
        </div>
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
          <div style={{ fontWeight: 'bold' }}>Therapist:</div>
          <ul>
            <li>
              This tool is designed to support you in navigating challenging situations or when you need to talk through a problem. It offers a safe and interactive environment to explore your thoughts and feelings, helping you gain clarity and develop effective coping strategies.
            </li>
            <li>
              <div style={{ fontWeight: 'bold' }}>How to Use:</div>
              <ul>
                <li>Start the Session:</li>
                <li>Identify the Issue: Specify the problem or challenge you are facing.</li>
                <li>Define Your Goals: Clarify what you hope to achieve from this session (e.g., understanding, resolution, emotional relief).</li>
                <li>Set the Difficulty Level (1-10): Indicate how complex or intense you feel the situation is.</li>
                <li>Describe Your Current Status: Share whether this is a new issue, an ongoing challenge, or something resurfacing.</li>
                <li>Session Stage: Specify whether this is an initial exploration, a follow-up discussion, or a concluding reflection.</li>
              </ul>
            </li>
            <li>
              <div style={{ fontWeight: 'bold' }}>Engage in the Process:</div>
              <ul>
                <li>The tool will guide you through a structured conversation, simulating a supportive dialogue based on the details you have provided.</li>
                <li>It will consider factors such as time constraints, emotional engagement, and the relevance of topics, tailored to your specified difficulty level.</li>
              </ul>
            </li>
            <li>
              <div style={{ fontWeight: 'bold' }}>Receive Insights:</div>
              <ul>
                <li>At any point, you can request insights to conclude the session.</li>
                <li>The tool will offer constructive feedback, highlighting key takeaways and suggesting potential next steps for your situation.</li>
              </ul>
            </li>
            <li>
              Remember, the more details you provide, the more personalized and beneficial your session will be. Feel free to begin whenever you&apos;re ready!
            </li>
          </ul>
        </Typography>
      </Box>
    </div>
  );
}
