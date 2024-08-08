import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buySubscription } from '../../redux/actions/user';
import { server } from '../../redux/store';
import { toast } from 'react-hot-toast';
import logo from '../../assets/images/logo.png';
const Subscribe = ({ user }) => {
  const dispatch = useDispatch();
  const [key, setKey] = useState('');
  const { loading, error, subscriptionId } = useSelector(
    state => state.subscription
  );
  const { error: courseError } = useSelector(state => state.subscription);
  const subscribeHandler = async () => {
    const {
      data: { key },
    } = await axios.get(`${server}/getRazorPayKey`);
    setKey(key);
    dispatch(buySubscription());
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (courseError) {
      toast.error(courseError);
      dispatch({ type: 'clearError' });
    }
    if (subscriptionId) {
      const openPopUp = () => {
        const options = {
          key,
          name: 'OnlineTuition',
          description: 'Get access to all Premium Content',
          image: logo,
          subscription_id: subscriptionId,
          callback_url: `${server}/paymentVerification`,
          prefill: {
            name: user.name,
            email: user.email,
            contact: '',
          },
          notes: {
            address: 'Online Tuition',
          },
          theme: {
            color: '#FFC800',
          },
        };
        const razor = new window.Razorpay(options);
        razor.open();
      };
      openPopUp();
    }
  }, [
    dispatch,
    error,
    user.name,
    user.email,
    key,
    subscriptionId,
    courseError,
  ]);

  return (
    <Container h="90vh" p="16">
      <Heading children="Welcome" my={8} textAlign={'center'} />

      <VStack
        boxShadow={'lg'}
        alignItems={'stretch'}
        borderRadius={'lg'}
        spacing={'0'}
      >
        <Box bg={'red.400'} p={'4'} css={{ borderRadius: '8px 8px 0 0' }}>
          <Text color={'black'} children={'Pro Pack - ₹299.00'} />
        </Box>
        <Box p={'4'}>
          <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
            <Text children={'Join Pro Pack and get access to all content'} />
            <Heading size={'md'} children={'₹299 Only'} />
          </VStack>
          <Button
            my={'8'}
            w={'full'}
            colorScheme={'red'}
            onClick={subscribeHandler}
            isLoading={loading}
          >
            Buy Now
          </Button>
        </Box>
        <Box
          bg={'blackAlpha.600'}
          p={'4'}
          css={{ borderRadius: '0 0 8px 8px' }}
        >
          <Heading
            color={'white'}
            textTransform={'uppercase'}
            size={'dm'}
            children={'100% refund at cancellation'}
          />
          <Text
            fontSize={'xs'}
            color={'white'}
            children={'Terms & Conditions Apply'}
          />
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
