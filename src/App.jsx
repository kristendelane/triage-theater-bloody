import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DrAmalStory from './components/DrAmalStory';
import CurseChart from './components/CursedChart';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dr-amal" element={<DrAmalStory />} />
        <Route path="/curse-chart" element={<CurseChart />} />
      </Routes>
    </BrowserRouter>
  );
}