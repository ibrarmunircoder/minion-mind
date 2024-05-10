import { PageTitle } from '@/shared/components/PageTitle';
import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import SearchIcon from 'assets/search.svg?react';
import PreferencesIcon from 'assets/preferences.svg?react';
import FilterMenuIcon from 'assets/filter-menu.svg?react';
import { Link } from 'react-router-dom';
import { AddIcon } from '@chakra-ui/icons';
import docSrc from 'assets/pen.svg';

const Assets = () => {
  return (
    <Box as="main" p={4}>
      <PageTitle title="Assets" />
      <Text mt="-13px">
        Create Manage, and Organize all your assets from this page.
      </Text>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justifyContent={{ base: 'flex-start', md: 'space-between' }}
        alignItems={{ base: 'flex-start', md: 'center' }}
        gap={2}
        mt={10}
        mb={2}
      >
        <Box maxWidth={427} width="100%">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
            >
              <SearchIcon />
            </InputLeftElement>
            <Input
              borderRadius={6}
              bgColor="#F3F4F6"
              placeholder="Enter amount"
            />
            <InputRightElement>
              <PreferencesIcon />
            </InputRightElement>
          </InputGroup>
        </Box>
        <Button
          as={Link}
          to="/assets/add-assets"
          colorScheme="brand"
          leftIcon={<AddIcon />}
          variant="solid"
        >
          Add Asset
        </Button>
      </Flex>
      <Divider />

      <Flex justifyContent="flex-end" gap={8} my={5}>
        <Menu>
          <MenuButton
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius={18}
            borderWidth={1}
            sx={{
              span: {
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
              },
            }}
          >
            <FilterMenuIcon /> Sort: Last Modified
          </MenuButton>
          <MenuList>
            <MenuItem>Option 1</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius={18}
            borderWidth={1}
            sx={{
              span: {
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
              },
            }}
          >
            <FilterMenuIcon /> Filter: Created Date
          </MenuButton>
          <MenuList>
            <MenuItem>New File</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Box overflowX="auto">
        <Table whiteSpace="nowrap" size="lg">
          <Thead bgColor="#DEE1E6">
            <Tr>
              <Th></Th>
              <Th width={520}>Name</Th>
              <Th>Size</Th>
              <Th>Type</Th>
              <Th>Last Modified</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Image src={docSrc} />
              </Td>
              <Td>Culpa magna Lorem exc</Td>
              <Td>62.40KB</Td>
              <Td>
                <Badge borderRadius={8} colorScheme="orangeTag">
                  Video
                </Badge>
              </Td>
              <Td>Sep 29, 2020</Td>
            </Tr>
            <Tr>
              <Td>
                <Image src={docSrc} />
              </Td>
              <Td>Consequat non sit venia</Td>
              <Td>46.40KB</Td>
              <Td>
                <Badge borderRadius={8} colorScheme="purpleTag">
                  Doc
                </Badge>
              </Td>
              <Td>Apr 29, 2020</Td>
            </Tr>
            <Tr>
              <Td>
                <Image src={docSrc} />
              </Td>
              <Td>Consequat non sit venia</Td>
              <Td>46.40KB</Td>
              <Td>
                <Badge borderRadius={8} colorScheme="purpleTag">
                  Doc
                </Badge>
              </Td>
              <Td>Apr 29, 2020</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default Assets;
