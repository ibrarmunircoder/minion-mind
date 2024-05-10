import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';

type Props = {
  children: React.ReactNode;
} & BoxProps;

export const StickySidebar: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Box
      as="aside"
      flexShrink={0}
      minHeight="100vh"
      height="100%"
      position="sticky"
      top={0}
      bgColor="clay.500"
      width="206px"
      p={1}
      display="flex"
      flexDirection="column"
      overflowY="auto"
      {...rest}
    >
      {children}
    </Box>
  );
};
