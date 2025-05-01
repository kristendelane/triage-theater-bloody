import React from 'react';

export default function LandingPage() {
  return (
    <div
      className="landing-container animate-fade-in"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'black',
      }}
    >
      <img
        src="/assets/skeleton_landing_art.png"
        alt="Skeleton rising from the abyss"
        style={{
          maxWidth: '800px',
          width: '100%',
          height: 'auto',
          display: 'block',
          margin: '0 auto',
        }}
      />

      <div className="menu">
        {/* 1. Spin the Wheel — DO NOT TOUCH */}
        <div
          className="menu-item"
          style={{
            top: '76%',
            left: '49%',
            width: '201px',
            height: '100px',
          }}
        >
          <button
            className="hitbox"
            onClick={() => window.location.href = '/stories/wheel-of-madness'}
            aria-label="Spin the Wheel-Medical Madness"
            title="Spin the Wheel-Medical Madness"
          />
        </div>

        {/* 2. Sticky Note — Enter the Madness */}
        <div
          className="menu-item"
          style={{
            top: '79.5%',
            left: '68.5%',
            width: '140px',
            height: '140px',
          }}
        >
          <button
            className="hitbox"
            onClick={() => window.location.href = '/stories/story-selector'}
            aria-label="Enter the Madness"
            title="Enter the Madness"
          />
        </div>

        {/* 3. Skeleton Right Eye — Dr. Amal */}
        <div
          className="menu-item circular-hitbox"
          style={{
            top: '41%',
            left: '34%',
            width: '40px',
            height: '40px',
          }}
        >
          <button
            className="hitbox circular-hitbox"
            onClick={() => window.location.href = '/stories/dr-amal'}
            aria-label="You shouldn't be here"
            title="You shouldn't be here"
          />
        </div>

        {/* 5. Nurse Call Button — Backstory */}
        <div
          className="menu-item circular-hitbox"
          style={{
            top: '85%',
            left: '58%',
            width: '40px',
            height: '40px',
          }}
        >
          <button
            className="hitbox circular-hitbox"
            onClick={() => window.location.href = '/stories/backstory-coming-soon'}
            aria-label="My cursed origin"
            title="The cursed origin story"
          />
        </div>

        {/* 6. Corner Curse Chart — Top Left */}
        <div
          className="menu-item"
          style={{
            top: '3%',
            left: '3%',
            width: '30px',
            height: '30px',
          }}
        >
          <button
            className="hitbox"
            onClick={() => window.location.href = '/stories/curse-chart'}
            aria-label="Curse Chart"
            title="Curse Chart"
          />
        </div>
      </div>

      {/* 4. Whisper Text + Hidden Hitbox */}
      <div
        className="easter-egg-wrapper"
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '24px',
          width: '260px',
          height: '30px',
          zIndex: 20,
        }}
        onClick={() => window.location.href = '/stories/enter-if-you-dare'}
        title="Enter the hospital if you dare"
      >
        <div className="hitbox" />
        <div className="easter-egg">
          Enter the hospital if you dare...
        </div>
      </div>
    </div>
  );
}
