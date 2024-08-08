import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import cursor from '../../../assets/images/curser.png';
import SideBar from '../SideBar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from './CourseModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCourses,
  getCoursesLectures,
} from '../../../redux/actions/cousre';
import { deleteCoursesLectures } from '../../../redux/actions/admin';
import { toast } from 'react-hot-toast';
const AdminCourses = () => {
  // const courses = [
  //   {
  //     _id: 'sdkjalskdjflasdkjf',
  //     title: 'Hindi Course',
  //     category: 'Hindi ',
  //     poster: {
  //       url: 'https://m.media-amazon.com/images/I/71C12bKgYJL._AC_UF894,1000_QL80_.jpg',
  //     },
  //     createdBy: 'Ravi Shankar',
  //     views: 123,
  //     numOfVideos: 12,
  //   },
  // ];

  const { courses, lectures } = useSelector(state => state.course);
  const { loading, error, message } = useSelector(state => state.admin);

  const dispatch = useDispatch();

  const { isOpen, onClose, onOpen } = useDisclosure();

  const courseDetailsHandler = courseId => {
    dispatch(getCoursesLectures(courseId));
    // lecture no 18 error was their
    onOpen();
  };
  const deleteButtonHandler = courseId => {
    dispatch(deleteCoursesLectures(courseId));
  };

  const deleteLectureHandler = ({ courseId, lectureId }) => {
    alert(courseId, lectureId);
  };

  const addLectureHandler = (e, courseId, title, description, video) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
    dispatch(getAllCourses());
  }, [dispatch, error, message]);

  return (
    <Grid
      css={{
        cursor: `url(${cursor}),default`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box py={['0', '8']} overflow={'auto'}>
        <Heading
          textTransform={'uppercase'}
          children={'All Users'}
          my={'16'}
          textAlign={['center', 'left']}
        />

        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All Available courses in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map(item => (
                <Row
                  courseDetailsHandler={courseDetailsHandler}
                  deleteButtonHandler={deleteButtonHandler}
                  key={item._id}
                  item={item}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <CourseModal
          isOpen={isOpen}
          onClose={onClose}
          id={'fsjdkjadsfkljasdfkljadsf'}
          courseTitle={'hindi course'}
          deleteButtonHandler={deleteLectureHandler}
          addLectureHandler={addLectureHandler}
          lectures={lectures}
          loading={loading}
        />
      </Box>
      <SideBar />
    </Grid>
  );
};

function Row({ item, courseDetailsHandler, deleteButtonHandler, loading }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={'item.poster.url'} />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            isLoading={loading}
            onClick={() => courseDetailsHandler(item._id)}
            variant={'outline'}
            color={'red.500'}
          >
            View Lecture
          </Button>
          <Button
            isLoading={loading}
            onClick={() => deleteButtonHandler(item._id)}
            color={'red.600'}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}

export default AdminCourses;
