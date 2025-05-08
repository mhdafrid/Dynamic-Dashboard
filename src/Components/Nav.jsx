import React from 'react';
import { Box, Typography } from '@mui/material';
import SearchBar from './SearchBar';

const Nav = ({ onSearch }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 60,
        bgcolor: 'whitesmoke',
        display: 'flex',
        alignItems: 'center',
        px: 2,
        gap: 2,
      }}
    >
      <Typography variant="h6" sx={{ flex: 1 }}>
        Dashboard
      </Typography>
      <Box sx={{ flex: 2 }}>
        <SearchBar onSearch={onSearch} />
      </Box>
    </Box>
  );
};

export default Nav;