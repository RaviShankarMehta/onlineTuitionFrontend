import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/introVideo.mp4';
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndCondition from '../../assets/docs/termsAndCondition'
const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar
        src="https://media.licdn.com/dms/image/D4D03AQG4CldlBgH6hQ/profile-displayphoto-shrink_800_800/0/1694918633968?e=1701302400&v=beta&t=piGR1Va2zyguxXUkTry1oWhqicNwo1lCN8X1sO1h0t8"
        boxSize={['40', '48']}
      />
      <Text children="Co-Founder" opacity={'0.7'} />
    </VStack>
    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Ravi Shankar Mehta" size={['md', 'xl']} />
      <Text
        textAlign={['center', 'left']}
        children={`Hi, I am a MERN stack developer and our mission is to provide quality content at reasonable price `}
      />
    </VStack>
  </Stack>
);

const VideoPlayer = () => (
  <Box>
    <video
      autoPlay
      loop
      muted
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      src={introVideo}
    ></video>
  </Box>
);

const TermsAndCondition = () => (
  <Box>
    <Heading
      size={'md'}
      children="Terms and Condition"
      textAlign={['center', 'left']}
      my={'4'}
    />
    <Box h={'sm'} p={'4'} overflow={'scroll'}>
      <Text
        letterSpacing={'widest'}
        fontFamily={'heading'}
        textAlign={['center', 'left']}
      >
        {termsAndCondition}
      </Text>
      <Heading
        my={'4'}
        size={'xs'}
        children="Refund only applicable for cancellation within 7 days."
      />
    </Box>
  </Box>
);

const About = () => {
  return (
    <Container padding={'16'} boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />
      <Stack m={'8'} direction={['column', 'row']} alignItems={'center'}>
        <Text fontFamily={'cursive'} m={'8'} textAlign={['center', 'left']}>
          We are a video Streaming platform with some premium courses available
          only form premium users.
        </Text>
        <Link to={'/subscribe'}>
          <Button variant={'ghost'} colorScheme="red">
            Checkout Out plan
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />
      <TermsAndCondition termsAndCondition={termsAndCondition} />

      <HStack margin={'4'} padding={'4'}>
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily={'sans-serif'}
          textTransform={'uppercase'}
          children={'Payment is secured by RazorPay'}
        />
      </HStack>
    </Container>
  );
};

export default About;
