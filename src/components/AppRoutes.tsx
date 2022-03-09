import {
  useRoutes,
  useNavigate,
} from 'react-router-dom';
import {
  useSelector,
} from 'react-redux';
import {
  useEffect,
} from 'react';
import Create from '../pages/orders/Create';
import List from '../pages/orders/List';
import SignIn from '../pages/SignIn';
import Update from '../pages/orders/Update';
import {
  RootState,
} from '../store';

const AppRoutes = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state: RootState) => state.auth.authenticated);

  useEffect(() => {
    if (!isAuthenticated) navigate('/');
    else navigate('/orders');
  }, [isAuthenticated]);

  return useRoutes([
    {
      path: '',
      element: <SignIn />,
    },
    {
      path: '/orders',
      element: <List />,
      children: [
        {
          path: 'add',
          element: <Create />,
        },
        {
          path: 'edit',
          element: <Update />,
        },
      ],
    },
  ]);
};

export default AppRoutes;
