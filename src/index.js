import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import TodoContainer from './components/TodoContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Navbar from './pages/NavBar';
import NotMatch from './pages/NotMatch';
import './App.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
