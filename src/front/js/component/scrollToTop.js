// src/component/ScrollToTop.jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // Ejecutar el efecto cuando cambie la ubicación

  return children;
};

export default ScrollToTop;

