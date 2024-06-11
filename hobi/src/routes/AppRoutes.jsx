import {
  createBrowserRouter,
  redirect,
} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../auth/Login';
import Register from '../auth/Register';


const requireAuth = () => {
  if (!localStorage.access_token) {
    return redirect('/login');
  }
  return null;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: requireAuth,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);


export default router;