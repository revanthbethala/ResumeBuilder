import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey='pk_test_YWJzb2x1dGUtZ29vc2UtNzMuY2xlcmsuYWNjb3VudHMuZGV2JA'>
      <App />
    </ClerkProvider>
  </StrictMode>
);
