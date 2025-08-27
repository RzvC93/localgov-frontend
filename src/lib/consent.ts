// src/lib/consent.ts
import type { CookieCategory } from '@/constants/cookieCategories';
import axios from 'axios';

const LOCAL_STORAGE_KEY = 'cookieConsent';
export const OPEN_CONSENT_EVENT = 'open-consent';

export type ConsentPreferences = Partial<Record<CookieCategory, boolean>>;

export function saveConsent(preferences: ConsentPreferences) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(preferences));
}

export function getConsent(): ConsentPreferences | null {
  const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
  return raw ? (JSON.parse(raw) as ConsentPreferences) : null;
}

export function hasConsent(): boolean {
  return !!getConsent();
}

export async function sendConsentToApi(preferences: ConsentPreferences) {
  await axios.post('/api/legal/consent', {
    preferences,
    userId: null,
  });
}

export function resetConsentLocal() {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

export function openConsentUI() {
  window.dispatchEvent(new CustomEvent(OPEN_CONSENT_EVENT));
}
