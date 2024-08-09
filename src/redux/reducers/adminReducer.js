import { createReducer } from '@reduxjs/toolkit';

export const adminReducer = createReducer(
  {},
  {
    getAdminStatsRequest: state => {
      state.loading = true;
    },
    getAdminStatsSuccess: (state, action) => {
      state.loading = false;
      state.stats = action.stats;
      state.subscriptionsCount = action.subscriptionsCount;
      state.usersCount = action.usersCount;
      state.viewsCount = action.viewsCount;
      state.subscriptionsPercentage = action.subscriptionsPercentage;
      state.viewsPercentage = action.viewsPercentage;
      state.usersPercentage = action.usersPercentage;
      state.subscriptionsProfit = action.subscriptionsProfit;
      state.viewsProfit = action.viewsProfit;
      state.usersProfit = action.usersProfit;
    },
    getAdminStatsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getAllUsersRequest: state => {
      state.loading = true;
    },
    getAllUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    getAllUsersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateUserRoleRequest: state => {
      state.loading = true;
    },
    updateUserRoleSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateUserRoleFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserRequest: state => {
      state.loading = true;
    },
    deleteUserSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
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
