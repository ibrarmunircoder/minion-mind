import { PageTitle } from '@/shared/components/PageTitle';
import { AddIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import bottleSrc from 'assets/bottle.png';
import { Link } from 'react-router-dom';

const Assets = () => {
  return (
    <Box as="main" p={4}>
      <PageTitle title="Assets" />
      <Flex
        p={4}
        px={8}
        direction={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'flex-start', md: 'center' }}
        border="2px"
        borderRadius="4px"
        borderColor="#BDC1CA"
        height={{ base: 'auto', md: '294px' }}
      >
        <Flex
          mb={4}
          direction="column"
          flexGrow="1"
          alignSelf="flex-start"
          mt={{ md: '32px' }}
          gap={2}
        >
          <Heading as="h3" size="sm">
            Add Assets to your profile
          </Heading>
          <Text>Start by adding images or files related to your product</Text>
          <Button
            as={Link}
            to="/add-assets"
            colorScheme="brand"
            leftIcon={<AddIcon />}
            size="md"
            variant="solid"
            width="166px"
          >
            Add Asset
          </Button>
        </Flex>
        <Image src={bottleSrc} />
      </Flex>
    </Box>
  );
};

export default Assets;
