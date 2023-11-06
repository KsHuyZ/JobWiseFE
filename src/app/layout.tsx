import '@/styles/global.css';

import type { Metadata } from 'next';

import AntdStyledComponentRegistry from '@/context/AntdStyledComponentsRegistry';
import ThemeProvider from '@/styles/theme/ThemeProvider';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/psyduck.png',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AntdStyledComponentRegistry>
          <ThemeProvider>{children}</ThemeProvider>
        </AntdStyledComponentRegistry>
      </body>
    </html>
  );
}
