import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { RiDashboardFill, RiLogoutBoxRLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
  <Link onClick={onClose} to={url}>
    <Button variant={'ghost'}>{title}</Button>
  </Link>
);

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const isAuthenticated = true;
  const user = {
    role: 'admin',
  };
  const logoutHandler = () =>onClose();;
  

  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme="red"
        width={'12'}
        height={'12'}
        rounded={'full'}
        zIndex={'overlay'}
        position={'fixed'}
        top={'6'}
        left={'6'}
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={'blur(3px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>COURSE BUNDLER</DrawerHeader>
          <DrawerBody>
            <VStack spacing={'4'} alignItems={'flex-start'}>
              <LinkButton onClose={onClose} url="/" title="Home" />
              <LinkButton
                onClose={onClose}
                url="/courses"
                title="Browse All Courses"
              />
              <LinkButton
                onClose={onClose}
                url="/request"
                title="Request A Course"
              />
              <LinkButton onClose={onClose} url="/contact" title="Contact Us" />
              <LinkButton onClose={onClose} url="/about" title="About" />
            </VStack>
            <HStack
              justifyContent={'space-evenly'}
              position={'absolute'}
              bottom={'2rem'}
              width={'80%'}
            >
              {isAuthenticated ? (
                <>
                  <VStack>
                    <HStack>
                      <Link onClick={onClose} to={'/profile'}>
                        <Button variant={'ghost'} colorScheme="red">
                          Profile
                        </Button>
                      </Link>
                      <Button
                        colorScheme="red"
                        variant={'ghost'}
                        onClick={logoutHandler}
                      >
                        <RiLogoutBoxRLine />
                        LogOut
                      </Button>
                    </HStack>

                    {user && user.role === 'admin' && (
                      <Link onClick={onClose} to={'/admin/dashboard'}>
                        <Button>
                          <RiDashboardFill />
                          Dashboard
                        </Button>
                      </Link>
                    )}
                  </VStack>
                </>
              ) : (
                <>
                  <Link onClick={onClose} to={'/login'}>
                    <Button colorScheme="red">LogIn</Button>
                  </Link>
                  <p>OR</p>
                  <Link onClick={onClose} to={'/register'}>
                    <Button colorScheme="red">SignUp</Button>
                  </Link>
                </>
              )}
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
