// src/components/LandingPage.jsx

import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import skeletonLandingArt from '../assets/skeleton_landing_art.png';
import './LandingPage.css';

export default function LandingPage() {
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

      {/* Fade overlay for fade-to-black effect */}
      {fadeOut && (
        <div className="fixed inset-0 bg-black opacity-0 animate-fadeToBlack z-50" />
      )}

      {/* Fade-in Skeleton Background */}
      <div
        className="landing-container absolute inset-0 bg-cover bg-center opacity-0 animate-fadeIn"
        style={{ backgroundImage: `url(${skeletonLandingArt})` }}
      >
        {/* First Invisible Hitbox - Story Selector */}
        <div
          onClick={() => handleNavigate('/story-selector')}
          className="absolute top-[35%] left-[29%] w-[400px] h-[140px] cursor-pointer rounded-2xl opacity-0 hover:opacity-100 hover:ring-2 hover:ring-red-900 hover:animate-pulse transition-all duration-300"
          title="Spin the Wheel of Medical Madness"
        />

        {/* Second Invisible Hitbox - How Madness Began */}
        <div
          onClick={() => handleNavigate('/enter-the-madness')}
          className="absolute top-[58%] left-[30%] w-[360px] h-[90px] cursor-pointer opacity-0 hover:opacity-100 hover:ring-2 hover:ring-red-900 hover:animate-pulse transition-all duration-300"
          title="How the Madness Began"
        />

        {/* Third Invisible Hitbox - Enter the Hospital */}
        <div
          onClick={() => handleNavigate('/ambulance')}
          className="absolute bottom-[8%] right-[8%] w-[320px] h-[80px] cursor-pointer opacity-0 hover:opacity-100 hover:ring-2 hover:ring-red-900 hover:animate-pulse transition-all duration-300"
          title="Enter the Hospital (If You Dare)"
        />

        {/* Bloody Footer */}
        <div className="absolute bottom-2 w-full text-center text-xs text-red-900 opacity-30 hover:opacity-70 transition-all duration-300 font-spooky">
          Built by the sick, for the sick — because if you wait for a diagnosis, you’ll miss your own funeral.
        </div>
      </div>
    </div>
  );
}
