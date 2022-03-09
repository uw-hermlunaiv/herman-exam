import {
  createAsyncThunk,
} from '@reduxjs/toolkit';
import authAPI from '../../api/auth';
import {
  IUserRequest,
} from '../../interfaces/User';

const signInUser = createAsyncThunk(
  'users/fetchByIdStatus',
  async (form: IUserRequest) => {
    const response = await authAPI.login(form);
    return response;
  },
);

export default signInUser;
