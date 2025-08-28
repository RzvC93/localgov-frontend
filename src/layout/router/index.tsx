import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/layout/layouts/MainLayout';
import HomePage from '@/layout/pages/HomePage';
import InfoPage from '@/layout/pages/InfoPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'info', element: <InfoPage /> },
    ],
  },
]);

export default router;
