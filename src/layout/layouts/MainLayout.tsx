import { Outlet } from 'react-router-dom';
import Header from '@/layout/components/layout/Header';
import Footer from '@/layout/components/layout/Footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen px-4 py-6 max-w-6xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
