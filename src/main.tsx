import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Debug: log root element and guard render to capture startup errors
const rootEl = document.getElementById('root');
console.debug('main.tsx: root element', rootEl);
if (!rootEl) {
  console.error('main.tsx: root element not found — aborting render');
} else {
  try {
    createRoot(rootEl).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  } catch (err) {
    console.error('main.tsx: render failed', err);
  }
}
