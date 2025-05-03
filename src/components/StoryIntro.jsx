import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const skeletonArt = "/assets/skeleton_landing_art.png";
const flatlineAudio = new Audio("/assets/flatline.mp3");

export default function LandingPage() {
  const handleHauntedChart = () => {
    flatlineAudio.play();
    setTimeout(() => {
      window.location.href = "/haunted-chart";
    }, 2000);
  };

  return (
    <div className="landing-container relative animate-fade-in">
      {/* Background Image */}
      <img
        src={skeletonArt}
        alt="Skeleton rising from the abyss"
        className="skeleton-image w-full h-auto object-cover"
      />

      {/* 1. Spin the Wheel */}
      <Link
        to="/StorySelector"
        title="Spin the wheel of misfortune. Land on trauma. Win nothing."
        className="absolute border border-red-500"
        style={{
          top: "76%",
          left: "49%",
          width: "201px",
          height: "100px",
          zIndex: 10,
        }}
      />

      {/* 2. Sticky Note - Enter the Hospital (ONLY hitbox with visible text) */}
      <Link
        to="/StoryIntro"
        title="the chart says 'noncompliant' now… hope you like psych holds"
        className="absolute group"
        style={{
          top: "72%",
          left: "21%",
          width: "180px",
          height: "60px",
          zIndex: 10,
          textDecoration: "none",
        }}
      >
        <span
          className="absolute w-full h-full flex items-center justify-center pointer-events-none"
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "11px",
            color: "rgba(30,30,30,0.55)",
            fontStyle: "normal",
            letterSpacing: "0.5px",
            textShadow: "0 0 1px rgba(0,0,0,0.25)",
            opacity: 0.85,
          }}
        >
          enter if you dare
        </span>
      </Link>

      {/* 3. Skeleton Right Eye - Secret Eye */}
      <Link
        to="/forbidden"
        title="You looked into the eye. The hospital saw you. You’re flagged now."
        className="absolute rounded-full border border-red-500"
        style={{
          top: "32%",
          left: "63.4%",
          width: "30px",
          height: "30px",
          zIndex: 10,
        }}
      />

      {/* 4. Whisper-Eye Easter Egg (bottom right) */}
      <Link
        to="/void"
        title="Welcome to billing purgatory. We eat souls and send reminders."
        className="absolute border border-red-500"
        style={{
          bottom: "10px",
          right: "10px",
          width: "50px",
          height: "50px",
          zIndex: 10,
        }}
      />

      {/* 5. Nurse Call Button */}
      <Link
        to="/ambulance-argument"
        title="Press to summon disappointment, delay, or an untrained tech."
        className="absolute rounded-full border border-red-500"
        style={{
          top: "81%",
          left: "27.5%",
          width: "64px",
          height: "64px",
          zIndex: 10,
        }}
      />

      {/* 6. Haunted Chart - Flatline Audio Trigger */}
      <button
        onClick={handleHauntedChart}
        title="Access denied: you don’t meet criteria for being alive"
        className="absolute border border-red-500"
        style={{
          top: "2%",
          right: "2%",
          width: "40px",
          height: "40px",
          zIndex: 10,
        }}
        aria-label="Trigger cursed chart event"
      />
    </div>
  );
}
