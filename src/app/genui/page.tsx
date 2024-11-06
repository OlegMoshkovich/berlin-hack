'use client';

import { useState } from 'react';
import { continueConversation, Message } from '@/app/actions';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { IconArrowUp } from '@/components/ui/icons';
import GenUICard from '@/components/cards/genuicard';
export const maxDuration = 30;

export default function GenUI() {
  const [conversation, setConversation] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const handleSubmit = async () => {
    const { messages } = await continueConversation([
      // exclude React components from being sent back to the server:
      ...conversation.map(({ role, content }) => ({ role, content })),
      { role: 'user', content: input },
    ]);
    setInput("")
    setConversation(messages);
  }
  const handleKeyDown = (e: { key: string; }) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }
  return (
    <div className="relative flex h-[calc(100vh_-_theme(spacing.16))] overflow-hidden pb-10 flex-col justify-center items-center">
      {/* Eleven Labs Widget */}
      <div className="flex justify-center my-10">
        <elevenlabs-convai agent-id="gPtF50ZrlDJhUN9ta3U6"></elevenlabs-convai>
      </div>
      <script src="https://elevenlabs.io/convai-widget/index.js" async type="text/javascript"></script>
    </div>
  );
}
