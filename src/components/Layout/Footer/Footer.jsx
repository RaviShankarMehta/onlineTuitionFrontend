import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialInstagramCircular,
  TiSocialYoutubeCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';
const Footer = () => {
  return (
    <Box padding={'4'} bg={'blackAlpha.900'} minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width={'full'}>
          <Heading children="All Rights Reserved" color={'white'} />
          <Heading
            fontFamily={'body'}
            size={'sm'}
            children="@Ravi Shankar Mehta"
            color={'red.400'}
          />
        </VStack>
        <HStack spacing={['2', '10']} justifyContent={'center'} color={'white'} fontSize={50}>
          <a href="https://youtube.com" target={'_blank'}>
            <TiSocialYoutubeCircular />
          </a>
          <a href="https://instagram.com" target={'_blank'}>
            <TiSocialInstagramCircular />
          </a>
          <a href="https://github.com" target={'_blank'}>
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
