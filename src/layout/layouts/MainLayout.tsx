// import { Outlet } from 'react-router-dom';
// import Header from '@/components/layout/Header';
// import Footer from '@/components/layout/Footer';

// const MainLayout = () => {
//   return (
//     <>
//       <Header />
//       <main className="min-h-screen px-4 py-6 max-w-6xl mx-auto">
//         <Outlet />
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default MainLayout;

// MainLayout.tsx
import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/legal/CookieBanner';

const MainLayout = () => (
  <>
    <Header />
    <main className="min-h-screen px-4 py-6 max-w-6xl mx-auto">
      <Outlet />
    </main>
    <Footer />
    <CookieBanner />
  </>
);

export default MainLayout;
