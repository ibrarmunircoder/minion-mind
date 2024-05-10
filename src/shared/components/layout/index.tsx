import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { Sidebar } from './Sidebar';

export const MainLayout = () => {
  const boxStyles = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    minHeight: '100vh',
    overflowX: 'auto',
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
