import { Spinner } from '@chakra-ui/react';

export const FullPageCircularSpinner = () => {
  return (
    <Spinner
      size="lg"
      sx={{
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
      }}
    />
  );
};
