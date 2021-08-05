import { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';

import { GlobalStyles } from '../styles/global-styles';
import { BlogThemeProvider } from '../contexts/BlogThemeContext';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BlogThemeProvider>
      <Component {...pageProps} />
      <GlobalStyles />
      <NextNprogress
        color={theme.colors.secondary}
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
        options={{ showSpinner: false }}
      />
    </BlogThemeProvider>
  );
}

export default MyApp;
