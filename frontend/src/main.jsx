import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Internationalization
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<div>Loading translations…</div>}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
