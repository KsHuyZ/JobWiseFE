import '@/styles/global.css';

import { Layout } from 'antd';
import type { Metadata } from 'next';
import { Suspense } from 'react';

import Loading from '@/components/Loading';
import Header from '@/layouts/Header';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/assets/psyduck.png',
    },
  ],
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <Layout className="h-full w-full">{children}</Layout>
    </Suspense>
  );
}
