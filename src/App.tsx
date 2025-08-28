import { RouterProvider } from 'react-router-dom';
import router from '@/router';
import CookieBanner from '@/components/legal/CookieBanner';

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <CookieBanner />
    </>
  );
}
