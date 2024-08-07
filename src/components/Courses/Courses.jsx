import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import engBook from '../../assets/images/engBook.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../../redux/actions/cousre';
import { toast } from 'react-hot-toast';
import { addToPlaylist } from '../../redux/actions/profile';
import { loadUser } from '../../redux/actions/user';

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlayListHandler,
  creator,
  description,
  lectureCount,
  loading,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW={'200px'}
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text noOfLines={2} />
      <HStack>
        <Text
          // fontWeight={'bold'}
          // textTransform={'uppercase'}
          children={description}
        />
      </HStack>
      <Text noOfLines={2} />
      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform={'uppercase'}
          children={`Creator -`}
        />
        <Text children={creator} />
      </HStack>
      <Heading
        textAlign={'center'}
        size={'xs'}
        children={`Lectures - ${lectureCount}`}
        textTransform={'uppercase'}
      />
      <Heading
        size={'xs'}
        children={`Views - ${views}`}
        textTransform={'uppercase'}
      />
      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Link to={`/course/${id}`}>
          <Button colorScheme={'red'}> Watch Now </Button>
        </Link>
        <Button
          isLoading={loading}
          variant={'ghost'}
          colorScheme={'red'}
          onClick={() => addToPlayListHandler(id)}
        >
          Add to playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();
  const addToPlayListHandler = async courseId => {
    // console.log('addToPlayListHandler', courseId);
    await dispatch(addToPlaylist(courseId));
    dispatch(loadUser);
  };
  const categories = [
    'Hindi',
    'English',
    'Maths',
    'Physics',
    'Chemistry',
    'History',
  ];

  const { loading, courses, error, message } = useSelector(
    state => state.course
  );
  useEffect(() => {
    dispatch(getAllCourses(category, keyword));

    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearError' });
    }
  }, [dispatch, error, category, keyword]);
  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a courses..."
        type={'text'}
        focusBorderColor="red.500"
      />
      <HStack
        overflow={'auto'}
        padding={'8'}
        // hiding Scroll bar
        // css={{ '&::-webkit-scrollbar': { display: 'none' } }}
      >
        {categories.map((item, index) => (
          <Button minW={'60'} key={index} onClick={() => setCategory(item)}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        {Array.isArray(courses) && courses.length > 0 ? (
          courses.map(item => (
            <Course
              key={item._id}
              title={item.title}
              description={item.description}
              views={item.views}
              imageSrc={item.poster.url}
              id={item._id}
              creator={item.createdBy}
              lectureCount={item.numOfVideos}
              addToPlayListHandler={addToPlayListHandler}
              loading={loading}
            />
          ))
        ) : (
          <Heading children="Courses not found" />
        )}
      </Stack>
    </Container>
  );
};

export default Courses;
