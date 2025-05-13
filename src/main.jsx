import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Internationalization
import './i18n';

// Style lIbraries
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<div>Loading translations…</div>}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
