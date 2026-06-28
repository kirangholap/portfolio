import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import App from './App.jsx';
import './styles/index.css';

const Home = lazy(() => import('./pages/Home.jsx'));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />}>
          <Route
            index
            element={
              <Suspense fallback={<div className="min-h-screen bg-ink" />}>
                <Home />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </React.StrictMode>,
);
