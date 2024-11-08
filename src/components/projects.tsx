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

export const maxDuration = 30;

export default function ChatComponent() {
  const [messages, setMessages] = useState<CoreMessage[]>([]);
  const [input, setInput] = useState<string>('');

  return (
    <Stack direction='column' spacing={3} justifyContent="center" alignItems="center">
          <Typography variant="overline" gutterBottom sx={{ fontWeight: 'bold' }}>
          Projects
          </Typography>
          <Typography variant="caption" gutterBottom sx={{ width: '720px', paddingBottom: '16px', backgroundColor: 'white', padding: '16px', borderRadius: '12px' }}>
          Projects serve as collaborative workspaces where teams can engage in meaningful discussions and share insights related to their specific tasks. These projects house essential documents, ensuring that all team members, including project custodians, are well-informed about the project&apos;s context. Additionally, projects can include experts who contribute their knowledge and expertise to discussions when invited, fostering a rich environment for collaboration and innovation.
          </Typography>
          <Stack direction="row" spacing={2}>
            <SimpleCard
              title="Add a project + "
              description=""
              lastChanged=""
              height="180px"
              link=""
              modified={false}
            />
            <SimpleCard
              title="Feature Highlights"
              height="180px"
              description="Discover the new features added recently."
              lastChanged="October 5, 2023"
              link="/sample-project"
            />
            <SimpleCard
              title="User Guide"
              height="180px"
              description="A comprehensive guide to help you navigate."
              lastChanged="August 20, 2023"
              link="/sample-project"
            />
          </Stack>
        </Stack>
  );
}
