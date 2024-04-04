import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CustomPage } from './Pages/CustomPage/index';
import { UpdateProduct } from './Pages/UpdateProduct/index';
import { Home } from './Pages/Home/index';
import { WebStatistics } from './Pages/WebStastics/index';  // Corrigido o nome da importação para WebStatistics

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/UpdateProduct" element={<UpdateProduct />} />
      <Route path="/WebStatistics" element={<WebStatistics />} />
      <Route path="/CustomPage" element={<CustomPage />} />
    </Routes>
  );
}
