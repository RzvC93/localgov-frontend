// src/components/legal/ConsentManager.tsx
import React from 'react';
import { openConsentUI, resetConsentLocal, hasConsent } from '@/lib/consent';

const ConsentManager: React.FC = () => {
  const handleModify = () => {
    openConsentUI();
  };

  const handleReset = () => {
    resetConsentLocal();
    openConsentUI();
  };

  return (
    <div className="text-sm text-gray-600">
      <button className="underline mr-3" onClick={handleModify}>
        Modifică preferințele cookie
      </button>
      {hasConsent() && (
        <button className="underline text-red-600" onClick={handleReset}>
          Reset consimțământ
        </button>
      )}
    </div>
  );
};

export default ConsentManager;
