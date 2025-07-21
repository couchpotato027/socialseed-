import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // ✅ Make sure this path and name matches your file
import { ClerkProvider } from '@clerk/clerk-react';

const clerkPubKey = "pk_test_cHVtcGVkLWJhcm5hY2xlLTI1LmNsZXJrLmFjY291bnRzLmRldiQ";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ClerkProvider publishableKey={clerkPubKey}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ClerkProvider>
);
