import {
  createSlice,
} from '@reduxjs/toolkit';
import getOrders from '../thunks/order.thunk';

export interface IOrderItem {
  OrderId: number,
  Label: string,
  Description?: string | null,
  Reference?: string | null,
  Relation?: string | null,
  Address?: string | null,
  DeliveryDate?: string | null,
  ShippingDateTime?: string | null,
  DeliveryMethod?: string | null,
  OrderType: {
    OrderTypeId: number,
    DisplayValue: string,
  },
  CreateDate: string,
  Remarks?: string | null,
  PaymentCondition?: string | null,
  BillingAddress?: string | null,
  TradingAddress?: string | null,
  TradingRelation?: string | null,
  BillingRelation?: string | null,
  Owner?: string | null,
  PackingRemarks?: string | null,
  Progress: number,
  Status?: string | null,
  Value: number,
  Currency?: string | null,
  ToWarehouse?: string | null,
  FromWarehouse?: string | null,
  DefaultWarehouse?: string | null,
  ParkedAt?: string | null,
  StagedAt: '1',
  InProcessBy?: string | null,
  LastChangedDateTime: string,
}

interface OrderState {
  loading: boolean;
  items: IOrderItem[];
}

const initialState: OrderState = {
  loading: false,
  items: [],
};

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(getOrders.fulfilled, (state, { payload }) => {
        if (payload?.Items) {
          return {
            loading: false,
            items: payload.Items,
          };
        }

        return {
          ...state,
          loading: false,
        };
      });
  },

});

export default orderSlice.reducer;
