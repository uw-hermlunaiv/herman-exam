import axios from '.';

const resource = '/client/orders';

const ordersAPI = {
  getOrders: (limit = 100, offset = 0): Promise<any> => axios.get(`${resource}?limit=${limit}&offset=${offset}`),
  createOrders: (body: any) => axios.post(resource, body),
  updateOrders: (body: any) => axios.post(resource, body),
  deleteOrders: (id: number) => axios.delete(`${resource}/${id}`),
};

export default ordersAPI;
