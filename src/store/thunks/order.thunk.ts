import {
  createAsyncThunk,
} from '@reduxjs/toolkit';

import orderAPI from '../../api/orders';
import {
  IAuthState,
} from '../reducers/auth.reducer';

const getOrders = createAsyncThunk(
  'orders/getOrders',
  async (args, { getState }) => {
    const { auth } = getState() as {auth: IAuthState};

    if (auth.authenticated) {
      const response = await orderAPI.getOrders();
      return response;
    }

    return null;
  },
);

export default getOrders;
