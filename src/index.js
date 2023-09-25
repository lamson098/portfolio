import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rent from './Rentcar';
import Architech from './Architech';
import Restaurant from './Restaurant';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/architech" element={<Architech />} />
        <Route path="/restaurant" element={<Restaurant />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

