import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import StorySelector from './components/StorySelector';
import StoryIntro from './components/StoryIntro';
import AmbulanceIntro from './components/AmbulanceIntro'; // <-- ADD THIS

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/story-selector" element={<StorySelector />} />
      <Route path="/enter-the-madness" element={<StoryIntro />} />
      <Route path="/ambulance" element={<AmbulanceIntro />} /> {/* <-- FIXED */}
    </Routes>
  );
}
