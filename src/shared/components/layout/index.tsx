import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Box } from '@chakra-ui/react';

export const MainLayout = () => {
  const boxStyles = {
    display: 'flex',
    flexDirection: 'row',
    minHeight: '100vh',
    main: {
      flexGrow: 1,
    },
  };

  return (
    <Box sx={boxStyles}>
      <Sidebar />
      <Outlet />
    </Box>
  );
};
