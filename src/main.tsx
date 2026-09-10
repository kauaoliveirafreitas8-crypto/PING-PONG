import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initAutoUtmForwarding } from './utils/utm';

// Inicia o rastreamento e repasse automático de parâmetros para todos os links de checkout
initAutoUtmForwarding();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
