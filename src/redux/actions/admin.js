import { server } from '../store';
import axios from 'axios';

export const createCoursesLectures = formData => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    };
    dispatch({ type: 'createCoursesRequest' });
    const { data } = await axios.post(
      `${server}/createCourse`,
      formData,
      config
    );
    dispatch({ type: 'createCoursesSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'createCoursesFail',
      payload: error.response.data.message,
    });
  }
};
export const deleteCoursesLectures = id => async dispatch => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: 'deleteCoursesRequest' });
    const { data } = await axios.delete(`${server}/deleteCourse/${id}`, config);
    dispatch({ type: 'deleteCoursesSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'deleteCoursesFail',
      payload: error.response.data.message,
    });
  }
};
export const addLectures = (id, formData) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    };
    dispatch({ type: 'addLectureRequest' });
    const { data } = await axios.post(
      `${server}/addLecture/${id}`,
      formData,
      config
    );
    dispatch({ type: 'addLectureSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'addLectureFail',
      payload: error.response.data.message,
    });
  }
};
export const deleteLectures = (courseId, lectureId) => async dispatch => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: 'deleteLectureRequest' });
    const { data } = await axios.delete(
      `${server}/deleteLecture?courseId=${courseId}&lectureId=${lectureId}`,
      config
    );
    dispatch({ type: 'deleteLectureSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'deleteLectureFail',
      payload: error.response.data.message,
    });
  }
};
