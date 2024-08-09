import {
  Container,
  Heading,
  Box,
  Button,
  FormLabel,
  Input,
  VStack,
  Textarea,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { courseRequest } from '../../redux/actions/other';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';

const Request = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');

  const dispatch = useDispatch();
  const {
    loading,
    error,
    message: stateMessage,
  } = useSelector(state => state.admin);

  const submitHandler = e => {
    e.preventDefault();
    dispatch(courseRequest(name, email, course));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (stateMessage) {
      toast.success(stateMessage);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, stateMessage]);

  return (
    <Container h={'92vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={16}>
        <Heading children="Request New Course" />
        <form onSubmit={submitHandler} style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Please enter your name"
              type="text"
              focusBorderColor="red.500"
            />
          </Box>
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
            <FormLabel htmlFor="course" children="Course" />
            <Textarea
              required
              id="course"
              value={course}
              onChange={e => setCourse(e.target.value)}
              placeholder="Courses Explanation"
              focusBorderColor="red.500"
            />
          </Box>

          <Box>
            <Button isLoading={loading} my={4} colorScheme="red" type="submit">
              Send Mail
            </Button>
            <Box my={'4'}>
              See Available Course ! ?{'  '}
              <Link to={'/courses'}>
                <Button colorScheme="red" variant={'link'}>
                  Click
                </Button>{' '}
                {'  '}
                here
              </Link>
            </Box>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Request;
