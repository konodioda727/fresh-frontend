import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import lazyLoad from '../components/pages/lazyload';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={lazyLoad({ component: false, path: 'main' })}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
