import axios from '.';
import {
  IOrderItem,
} from '../store/reducers/order.reducer';

const resource = '/client/orders';

const ordersAPI = {
  getOrders: (limit = 100, offset = 0): Promise<{
    Items: IOrderItem[],
    Count: number
  }> => axios.get(`${resource}?limit=${limit}&offset=${offset}`),
  createOrders: (body: any) => axios.post(resource, body),
  updateOrders: (body: any) => axios.post(resource, body),
  deleteOrders: (id: number) => axios.delete(`${resource}/${id}`),
};

export default ordersAPI;
