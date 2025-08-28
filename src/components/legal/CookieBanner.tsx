// src/components/legal/CookieBanner.tsx
import { useEffect, useState } from 'react';
import { COOKIE_CATEGORIES } from '@/constants/cookieCategories';
import type { CookieCategory } from '@/constants/cookieCategories';
import { saveConsent, getConsent, sendConsentToApi, OPEN_CONSENT_EVENT } from '@/lib/consent';
import type { ConsentPreferences } from '@/lib/consent';

export default function CookieBanner() {
  console.log('👀 CookieBanner montat');

  const [visible, setVisible] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>({});

  const initDefaultPrefs = () => {
    const initial: ConsentPreferences = {};
    COOKIE_CATEGORIES.forEach(cat => {
      initial[cat.key] = cat.required ? true : false;
    });
    setPreferences(initial);
  };

  useEffect(() => {
    const existing = getConsent();
    console.log('🔍 Consent în localStorage:', existing);
    if (!existing) {
      initDefaultPrefs();
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    const handler = () => {
      initDefaultPrefs();
      setVisible(true);
    };
    window.addEventListener(OPEN_CONSENT_EVENT, handler);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, handler);
  }, []);

  const handleChange = (category: CookieCategory, value: boolean) => {
    setPreferences(prev => ({ ...prev, [category]: value }));
  };

  const handleAccept = async () => {
    saveConsent(preferences);
    await sendConsentToApi(preferences);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-100 border-t p-4 shadow-lg z-50">
      <h2 className="text-lg font-semibold mb-2">Consimțământ cookies</h2>
      <p className="mb-4 text-sm text-gray-700">Selectează ce tipuri de cookie-uri accepți:</p>
      <form>
        {COOKIE_CATEGORIES.map(cat => (
          <div key={cat.key} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={cat.key}
              checked={preferences[cat.key] ?? false}
              onChange={e => handleChange(cat.key, e.target.checked)}
              disabled={cat.required}
              className="mr-2"
            />
            <label htmlFor={cat.key}>
              <strong>{cat.label}</strong>: <span className="text-sm">{cat.description}</span>
            </label>
          </div>
        ))}
      </form>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded" onClick={handleAccept}>
        Salvează preferințele
      </button>
    </div>
  );
}
