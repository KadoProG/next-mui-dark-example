'use client';

import { Box, Button, Paper, Stack } from '@mui/material';

export default function Home() {
  return (
    <Paper component={Box} p={2}>
      <Stack spacing={1}>
        <Button variant="outlined">ライト</Button>
        <Button variant="outlined">システム</Button>
        <Button variant="outlined">ダーク</Button>
      </Stack>
    </Paper>
  );
}
