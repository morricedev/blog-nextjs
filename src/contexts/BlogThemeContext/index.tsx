import React, { createContext, useState, useEffect, useCallback } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

export type BlogThemeProviderProps = {
  children: React.ReactNode;
};

export type BlogThemeContextValues = {
  theme: DefaultTheme;
  setTheme?: (mode: 'light' | 'dark') => void;
};

export const BlogThemeContext = createContext<BlogThemeContextValues>({
  theme: theme,
});

export const BlogThemeProvider = ({ children }: BlogThemeProviderProps) => {
  const [blogTheme, setBlogTheme] = useState(theme);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (!localTheme) return;

    const currentTheme = JSON.parse(localTheme);

    setBlogTheme(currentTheme);
  }, []);

  const handleSetTheme: BlogThemeContextValues['setTheme'] = useCallback(
    (mode = 'light') => {
      if (mode === 'light') {
        setBlogTheme(theme);
        localStorage.setItem('theme', JSON.stringify(theme));
      } else {
        const darkTheme = {
          ...theme,
          name: 'dark',
          colors: {
            primary: '#FFF',
            darkText: '#EEEE',
            secondary: '#dc143c',
            white: '#000',
            mediumGray: '#BBBFCA',
            darkGray: '#E8E8E8',
          },
        };

        setBlogTheme(darkTheme);
        localStorage.setItem('theme', JSON.stringify(darkTheme));
      }
    },
    [],
  );

  return (
    <BlogThemeContext.Provider
      value={{ theme: blogTheme, setTheme: handleSetTheme }}
    >
      <ThemeProvider theme={blogTheme}>{children}</ThemeProvider>
    </BlogThemeContext.Provider>
  );
};
