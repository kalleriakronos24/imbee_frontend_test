import React from 'react';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import CheckoutPage from './pages/Checkout';

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      {/* Public */}
      {/* <Route path="*" element={<Error />} /> */}
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/checkout' element={<CheckoutPage />} />
    </Routes>
  );
};

export default App;
