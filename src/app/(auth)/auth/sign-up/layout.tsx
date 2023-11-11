import type { Metadata } from 'next';
import type React from 'react';

export const metadata: Metadata = {
  title: 'Sign Up',
  description: '...',
};

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
