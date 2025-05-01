import React from 'react';

export default function CurseChart() {
  return (
    <div style={{
      padding: '2rem',
      color: '#ff6b6b',
      fontFamily: 'monospace',
      backgroundColor: 'black',
      minHeight: '100vh'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        🩸 The Curse Chart
      </h1>
      <p>
        This is where the trauma branches.
      </p>
      <ul>
        <li>👻 Feeding tube replacements (x18)</li>
        <li>🧪 Failed pyloroplasty</li>
        <li>📦 Wrong tubes thrown at patient like a cursed lottery</li>
        <li>🧵 PICC denial + daily IV roulette</li>
        <li>👁 CT tech screams during pain</li>
        <li>🪦 Promised jejunostomy never scheduled</li>
        <li>🧤 “Wait, which tube did you want again?”</li>
        <li>🩻 Blood, bile, no calories, and silence</li>
      </ul>
      <p style={{ marginTop: '2rem' }}>
        This page will eventually contain a branching horror tree — every decision, delay, and dehumanizing moment,
        mapped like the anatomy of neglect. Until then, it's a placeholder of pain.
      </p>
    </div>
  );
}
