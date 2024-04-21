'use client';

import { Box, Button, Paper, Stack } from '@mui/material';
import { useColorModeContext } from '@/libs/theme/ThemeRegistry';

const Home = () => {
  const { toggleColorMode, selectedMode } = useColorModeContext();
  return (
    <Paper component={Box} p={2}>
      <Stack spacing={1}>
        <Button
          variant={selectedMode === 'light' ? 'contained' : 'outlined'}
          onClick={() => toggleColorMode('light')}
        >
          ライト
        </Button>
        <Button
          variant={selectedMode === 'device' ? 'contained' : 'outlined'}
          onClick={() => toggleColorMode('device')}
        >
          システム
        </Button>
        <Button
          variant={selectedMode === 'dark' ? 'contained' : 'outlined'}
          onClick={() => toggleColorMode('dark')}
        >
          ダーク
        </Button>
      </Stack>
    </Paper>
  );
};
export default Home;
