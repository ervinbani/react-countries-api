import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './styles/main.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

// Unregister any existing service workers and clear caches — one-time cleanup
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  try {
    navigator.serviceWorker.getRegistrations().then((regs) => {
      regs.forEach((r) => r.unregister());
    });
  } catch (e) {
    // ignore
  }
}
if (typeof window !== 'undefined' && 'caches' in window) {
  try {
    caches.keys().then((keys) => keys.forEach((k) => caches.delete(k)));
  } catch (e) {
    // ignore
  }
}

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
