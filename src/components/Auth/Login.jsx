import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children={'Welcome to Online Tuition'} />
        <form style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Please enter your email"
              type="email"
              focusBorderColor="red.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="password" children="Password" />
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Please enter your password"
              type="password"
              focusBorderColor="red.500"
            />
          </Box>
          <Box>
            <Link to="/forgetPassword">
              <Button fontSize={'sm'} variant={'link'}>
                Forget Password
              </Button>
            </Link>
          </Box>
          <Box>
            <Button my={4} colorScheme="red" type="submit">
              Login
            </Button>
            <Box my={'4'}>
              New User ?{'  '}
              <Link to={'/register'}>
                <Button colorScheme="red" variant={'link'}>
                  Sign Up
                </Button> {"  "}
                here
              </Link>
            </Box>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
