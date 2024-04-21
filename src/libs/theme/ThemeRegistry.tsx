'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';

export const ThemeRegistry = (props: { children: React.ReactNode }) => {
  // カスタムシーン
  const theme = createTheme({
    palette: { mode: 'dark' }, // ここを'light', 'dark'と設定すると一発で変わる
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};
