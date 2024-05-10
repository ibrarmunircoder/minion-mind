import { PageTitle } from '@/shared/components/PageTitle';
import { AddIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import bottleSrc from 'assets/bottle.png';
import { Link } from 'react-router-dom';

const AssetsOverview = () => {
  return (
    <Box as="main" p={4}>
      <PageTitle title="Assets" />
      <Flex
        p={4}
        px={8}
        direction={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'flex-start', md: 'center' }}
        borderWidth={2}
        borderRadius={4}
        borderColor="#BDC1CA"
        height={{ base: 'auto', md: 294 }}
      >
        <Flex
          mb={4}
          direction="column"
          flexGrow="1"
          alignSelf="flex-start"
          mt={{ md: '34px' }}
          gap={2}
        >
          <Heading as="h3" size="sm">
            Add Assets to your profile
          </Heading>
          <Text>Start by adding images or files related to your product</Text>
          <Button
            as={Link}
            to="/assets/add-assets"
            colorScheme="brand"
            leftIcon={<AddIcon />}
            size="md"
            variant="solid"
            width={166}
          >
            Add Asset
          </Button>
        </Flex>
        <Image src={bottleSrc} />
      </Flex>
    </Box>
  );
};

export default AssetsOverview;
