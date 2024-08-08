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
    clearError: state => {
      state.error = null;
    },
    clearMessage: state => {
      state.message = null;
    },
  }
);
