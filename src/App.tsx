// fără: import React from 'react';
import CookieBanner from '@/components/legal/CookieBanner';
import Footer from '@/components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-semibold">LocalGovApp</h1>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
