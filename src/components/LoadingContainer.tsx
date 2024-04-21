import { Box, CircularProgress } from '@mui/material';
import React from 'react';

interface LoadingContainerProps {
  isLoading: boolean;
  children: React.ReactNode;
}
export const LoadingContainer: React.FC<LoadingContainerProps> = (props) => {
  if (props.isLoading) {
    // ローティング中はローディングの表示
    return (
      <Box
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="fixed"
      >
        <CircularProgress />
      </Box>
    );
  }
  // ロードが終わっていたらchildrenのみ表示
  return props.children;
};
