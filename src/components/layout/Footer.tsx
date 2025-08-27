// fără: import React from 'react';
import ConsentManager from '@/components/legal/ConsentManager';

export default function Footer() {
  return (
    <footer className="border-t mt-10 p-4 text-center text-sm text-gray-600">
      <div className="mb-2">© LocalGovApp</div>
      <ConsentManager />
    </footer>
  );
}
