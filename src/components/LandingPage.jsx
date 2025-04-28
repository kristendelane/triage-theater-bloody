// src/components/LandingPage.jsx

import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import skeletonLandingArt from '../assets/skeleton_landing_art.png';
import './LandingPage.css';

export default function LandingPage() {h
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.volume = 0.2;
        audioRef.current.play().catch((error) => {
          console.log('Audio playback blocked until interaction:', error);
        });
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (path) => {
    setFadeOut(true);
    setTimeout(() => navigate(path), 1000); // Delay navigation to allow fade effect
  };

  return (
    <div className="relative min-h-screen bg-black">
      {/* Heartbeat Sound */}
      <audio ref={audioRef} src="/sounds/heartbeat-faster.mp3" loop />

      {/* Fade-in Skeleton Background */}
      <div
        className="landing-container absolute inset-0 bg-cover bg-center opacity-0 animate-fadeIn slow-zoom"
        style={{ backgroundImage: `url(${skeletonLandingArt})` }}
      >
        {/* Invisible Buttons Go Here */}
        <div
          onClick={() => handleNavigate('/story-selector')}
          className="absolute top-[35%] left-[29%] w-[400px] h-[140px] cursor-pointer rounded-2xl opacity-0 hover:opacity-100 hover:ring-2 hover:ring-ertan/80 hover:animate-pulse transition-all duration-300"
          title="Enter the Medical Madness"
        />
        {/* (etc etc) */}
      </div>
    </div>
  );
}
