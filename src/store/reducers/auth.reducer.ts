import {
  createSlice,
} from '@reduxjs/toolkit';
import type {
  RootState,
} from '..';
import signInUser from '../thunks/auth.thunk';

export interface IAuthState {
  authenticated: boolean;
  loading: boolean;
  name: string;
  email: string;
  id?: number | null;
}

const initialState: IAuthState = {
  authenticated: false,
  loading: false,
  name: '',
  email: '',
  id: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(signInUser.rejected, (state) => ({
        ...state,
        ...initialState,
      }))
      .addCase(signInUser.fulfilled, (state, { payload }) => {
        if (payload?.UserToken?.user_token) {
          localStorage.setItem('herman-app-user-token', payload.UserToken.user_token);

          return {
            ...state,
            authenticated: true,
            loading: false,
            name: payload.Name,
            email: payload.Email,
            id: payload.UserId,
          };
        }

        return {
          ...state,
          authenticated: false,
          loading: false,
        };
      });
  },

});

export const isAuthenticated = (state: RootState) => state.auth.authenticated;

export default authSlice.reducer;
