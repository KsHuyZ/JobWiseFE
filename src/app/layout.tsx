import '@/styles/global.css';

import type { Metadata } from 'next';

import AntdStyledComponentRegistry from '@/context/AntdStyledComponentsRegistry';
import Providers from '@/context/QueryProvider';
import ThemeProvider from '@/styles/theme/ThemeProvider';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/assets/psyduck.png',
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
        <ThemeProvider>
          <AntdStyledComponentRegistry>
            <Providers>{children}</Providers>
          </AntdStyledComponentRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
