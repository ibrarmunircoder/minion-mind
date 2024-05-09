import { Heading } from '@chakra-ui/react';

export const PageTitle = ({ title }: { title: string }) => {
  return (
    <Heading
      mt={10}
      mb={5}
      fontWeight={400}
      as="h1"
      size="xl"
      lineHeight={'48px'}
    >
      {title}
    </Heading>
  );
};
