import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'AiAgri — off-grid monitoring for the land',
  description:
    'A solar-powered LoRa sensor network with a local AI agent that watches soil, water, livestock and land, and triggers the right response without internet.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}