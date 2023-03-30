import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import App from './App';
import Main from './pages/Main/Main';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        
      </Routes>
    </BrowserRouter>
  );
}
