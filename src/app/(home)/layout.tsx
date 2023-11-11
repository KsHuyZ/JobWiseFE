import '@/styles/global.css';

import { Layout } from 'antd';
import type { Metadata } from 'next';

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
    <>
      <Loading
        color="#00695c"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl
        showSpinner
        easing="ease"
        speed={200}
        template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        zIndex={1600}
        showAtBottom={false}
      />
      <Header />
      <Layout className="h-full w-full">{children}</Layout>
    </>
  );
}
