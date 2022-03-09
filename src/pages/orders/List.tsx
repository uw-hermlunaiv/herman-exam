import React, {
  useEffect,
} from 'react';
import {
  useDispatch, useSelector,
} from 'react-redux';
import Table from '../../components/Table';
import {
  RootState,
} from '../../store';
import {
  IOrderItem,
} from '../../store/reducers/order.reducer';
import getOrders from '../../store/thunks/order.thunk';

function List() {
  const dispatch = useDispatch();
  const orders = useSelector((state: RootState) => state.order.items);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <div className="orders p-4 container">
      <p className="text-lg font-bold">Order List</p>
      <Table
        headers={[
          'Label',
          'Description',
          'DeliveryDate',
          'DeliveryMethod',
          'Actions',
        ]}
        data={orders}
        renderTableRow={(item: IOrderItem) => (
          <tr
            className="border-t border-gray-200 transition hover:bg-gray-50"
            key={item?.OrderId || JSON.stringify(item)}
          >
            <td>{item.Label}</td>
            <td>{item.Description}</td>
            <td>{item.DeliveryDate}</td>
            <td>{item.DeliveryMethod}</td>
            {/* TODO: Edit and delete actions */}
            <td>edit | delete actions </td>
          </tr>
        )}
      />
    </div>
  );
}

export default List;
