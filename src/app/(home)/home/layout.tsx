import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Jobwise',
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
