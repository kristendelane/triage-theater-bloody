import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const skeletonArt = "/assets/skeleton_landing_art.png";
const flatlineAudio = new Audio("/assets/flatline.mp3");

const randomizedTooltips = [
  "this sticky note is a psych consult now",
  "your copay was your soul",
  "you were flagged in the system",
  "still think it's just anxiety?",
  "they’re watching from the nurse’s station",
  "Room 237 is available… for you",
  "there’s no discharge plan",
];

function randomTooltip() {
  return randomizedTooltips[Math.floor(Math.random() * randomizedTooltips.length)];
}

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
        className="skeleton-image w-full object-cover"
      />

      {/* 1 */}
      <Link
        to="/StorySelector"
        title={randomTooltip()}
        className="absolute dev-hitbox flex items-center justify-center text-white text-xs"
        style={{
          top: "44%",
          left: "70%",
          width: "160px",
          height: "70px",
          zIndex: 10,
        }}
      >
        1
      </Link>

      {/* 2 */}
      <Link
        to="/StoryIntro"
        title={randomTooltip()}
        className="absolute group dev-hitbox flex items-center justify-center text-white text-xs"
        style={{
          top: "82%",
          left: "58%",
          width: "160px",
          height: "50px",
          zIndex: 10,
        }}
      >
        2
      </Link>

      {/* 3 */}
      <Link
        to="/forbidden"
        title={randomTooltip()}
        className="absolute rounded-full dev-hitbox flex items-center justify-center text-white text-xs"
        style={{
          top: "22%",
          left: "61%",
          width: "32px",
          height: "32px",
          zIndex: 10,
        }}
      >
        3
      </Link>

      {/* 4 */}
      <Link
        to="/void"
        title={randomTooltip()}
        className="absolute dev-hitbox flex items-center justify-center text-white text-xs"
        style={{
          top: "12%",
          left: "20%",
          width: "60px",
          height: "60px",
          zIndex: 10,
        }}
      >
        4
      </Link>

      {/* 5 */}
      <Link
        to="/ambulance-argument"
        title={randomTooltip()}
        className="absolute rounded-full dev-hitbox flex items-center justify-center text-white text-xs"
        style={{
          top: "67%",
          left: "48%",
          width: "64px",
          height: "64px",
          zIndex: 10,
        }}
      >
        5
      </Link>

      {/* 6 */}
      <button
        onClick={handleHauntedChart}
        title={randomTooltip()}
        className="absolute dev-hitbox flex items-center justify-center text-white text-xs"
        style={{
          top: "8%",
          left: "88%",
          width: "42px",
          height: "42px",
          zIndex: 10,
        }}
        aria-label="Trigger cursed chart event"
      >
        6
      </button>
    </div>
  );
}