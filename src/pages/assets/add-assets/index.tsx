import { PageTitle } from '@/shared/components/PageTitle';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Progress,
  Text,
} from '@chakra-ui/react';
import cloudUploadSrc from 'assets/cloud-upload.png';
import cancelSrc from 'assets/cancel.svg';
import pngSrc from 'assets/files/png.png';
import pdfSrc from 'assets/files/pdf.png';
import UploadIcon from 'assets/btn-upload.svg?react';

const AddAssets = () => {
  return (
    <Box as="main" p={4}>
      <PageTitle title="Upload Files" />
      <Text mt="-13px">PDF, text, images or videos. Max 10MB each.</Text>
      <Box as="form" my="15px">
        <FormControl width="100%" maxWidth="538px">
          <FormLabel>File Title</FormLabel>
          <Input type="text" />
        </FormControl>
        <Box maxWidth="798px" width="100%" my={4}>
          <Box
            p={2}
            cursor="pointer"
            as="label"
            display="flex"
            borderWidth={1}
            borderColor="#6D31ED"
            borderStyle="dashed"
            borderRadius="8px"
            height="274px"
            justifyContent="center"
            alignItems="center"
            htmlFor="file-upload"
          >
            <input type="file" hidden id="file-upload" multiple />
            <Flex direction="column" alignItems="center" gap={2}>
              <Image width="80px" height="80px" src={cloudUploadSrc} />
              <Text>Drag & drop your files here</Text>
              <Text>Or</Text>
              <Button variant="solid" colorScheme="brand" bg="#02649699">
                Browse Files
              </Button>
            </Flex>
          </Box>

          <Flex justifyContent="flex-end" mt={4}>
            <Button
              leftIcon={<UploadIcon />}
              variant="solid"
              colorScheme="brand"
            >
              Upload
            </Button>
          </Flex>
        </Box>
        <Box maxWidth="661px" display="flex" flexDirection="column" gap={2}>
          <Heading size="sm">Uploading files</Heading>
          <Flex
            p={1}
            borderWidth="1px"
            borderColor="#BDC1CA"
            borderRadius="6px"
          >
            <Box flexGrow="1">
              <Text fontSize="14px">Product Image Variant 1</Text>
              <Flex alignItems="center" gap={1}>
                <Image src={pngSrc} />
                <Flex flexGrow="1" direction="column">
                  <Flex width="100%" justifyContent="space-between">
                    <Text fontSize="12px">Image-00.png</Text>
                    <Text color="#9095A1" fontSize="12px">
                      76%
                    </Text>
                  </Flex>
                  <Progress
                    borderRadius="3px"
                    colorScheme="blue"
                    size="sm"
                    value={76}
                  />
                </Flex>
              </Flex>
            </Box>
            <Image p={3} py={0} src={cancelSrc} />
          </Flex>
          <Flex p={1} borderWidth={1} borderColor="#BDC1CA" borderRadius={6}>
            <Box flexGrow="1">
              <Text fontSize={14}>Product Image Variant 1</Text>
              <Flex alignItems="center" gap={1}>
                <Image src={pdfSrc} />
                <Flex flexGrow="1" direction="column">
                  <Flex width="100%" justifyContent="space-between">
                    <Text fontSize={12}>Image-00.png</Text>
                    <Text color="#9095A1" fontSize={12}>
                      56%
                    </Text>
                  </Flex>
                  <Progress
                    borderRadius={3}
                    colorScheme="blue"
                    size="sm"
                    value={56}
                  />
                </Flex>
              </Flex>
            </Box>
            <Image p={3} py={0} src={cancelSrc} />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default AddAssets;
