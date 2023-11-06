import '@/styles/global.css';

import type { AppProps } from 'next/app';

import ThemeProvider from '@/styles/theme/ThemeProvider';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
