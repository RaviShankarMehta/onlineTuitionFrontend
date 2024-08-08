import { createReducer } from '@reduxjs/toolkit';

export const adminReducer = createReducer(
  {},
  {
    createCoursesRequest: state => {
      state.loading = true;
    },
    createCoursesSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    createCoursesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteCoursesRequest: state => {
      state.loading = true;
    },
    deleteCoursesSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteCoursesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addLectureRequest: state => {
      state.loading = true;
    },
    addLectureSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    addLectureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteLectureRequest: state => {
      state.loading = true;
    },
    deleteLectureSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteLectureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: state => {
      state.error = null;
    },
    clearMessage: state => {
      state.message = null;
    },
  }
);
