// src/components/AmbulanceIntro.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function AmbulanceIntro() {
  return (
    <div className="min-h-screen bg-erbg text-ertan font-spooky p-6 flex flex-col justify-center items-center">
      {/* STORY TEXT */}
      <div className="max-w-3xl space-y-6 text-center leading-relaxed">
        <p>It didn’t start with an ambulance. It started with pain. Not just any pain — character development pain. The kind that wakes you up at 3am, folds you in half like a crusty yoga mat, and whispers, "Good luck, bitch."</p>
        <p>You were a "good patient," remember? You played the game. You did the fiber. The yoga. The low FODMAP sad beige diet. You smiled through the lectures, the pamphlets, the "have you tried breathing?" energy. You even kept your voice calm while the 12-year-old resident explained your own body to you like he was giving a TED Talk called "It’s Just IBS, Sweetheart."</p>
        <p>You’re not a doctor, but you are a PhD in physics with decades of lived experience in "something is very wrong with my stomach and no one believes me." You’ve worked in high-tech labs, helped launch 3D-printed medical devices, and now? You're curled in the fetal position, vibrating like a dying Roomba, covered in flop sweat and regret.</p>
        <p>You haven’t eaten in three days. A bite of yogurt sent you into a full-body exorcism. Even water is playing hard to get.</p>
        <p>Your boss at the 3D printing job — the same one who praised you when you worked through fevers and nausea — called you lazy and put you on a PIP for daring to deteriorate. Because chronic illness makes you unproductive, and unproductive is unacceptable.</p>
        <p>Your partner tiptoes in, haunted. "Do you think it's time to go to the ER?"</p>
        <p>You nod. The Go Bag is already packed.</p>
      </div>

      {/* CHOICES */}
      <div className="mt-12 space-y-4">
        <button
          onClick={() => alert('🚑 Coming soon: Call 911 path')}
          className="block w-full max-w-md px-6 py-4 bg-red-900 text-white font-bold rounded-xl hover:bg-red-700 hover:ring-2 hover:ring-red-500 transition-all duration-300"
        >
          🚑 Tell him to call 911 — because your soul has already left the building.
        </button>

        <button
          onClick={() => alert('🚗 Coming soon: Partner drive path')}
          className="block w-full max-w-md px-6 py-4 bg-red-900 text-white font-bold rounded-xl hover:bg-red-700 hover:ring-2 hover:ring-red-500 transition-all duration-300"
        >
          🚗 Let him drive you — only slightly less dangerous than a squirrel driving a forklift.
        </button>

        <button
          onClick={() => alert('🛁 Coming soon: Bathroom floor death path')}
          className="block w-full max-w-md px-6 py-4 bg-red-900 text-white font-bold rounded-xl hover:bg-red-700 hover:ring-2 hover:ring-red-500 transition-all duration-300"
        >
          🛁 Refuse both. Die on the bathroom floor like a true wellness girlie.
        </button>
      </div>

      {/* RESOURCES */}
      <div className="mt-16 max-w-2xl text-center space-y-2">
        <h2 className="text-xl font-bold underline">Resources:</h2>
        <p>
          <a href="https://www.healthline.com/health/medical-gaslighting" target="_blank" rel="noreferrer" className="text-ertan underline hover:text-red-600">
            Understanding Medical Gaslighting
          </a>
        </p>
        <p className="text-sm italic">
          Support: @LittleMissDiagnosed (TikTok), r/ChronicIllness (Reddit), Facebook Spoonie groups
        </p>
      </div>

      {/* NAVIGATION */}
      <div className="mt-12 space-x-8">
        <Link to="/ambulance" className="inline-block bg-red-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-all duration-300">
          🔄 Start Over
        </Link>
        <Link to="/story-selector" className="inline-block bg-red-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-all duration-300">
          🏠 Return to Main Menu
        </Link>
      </div>
    </div>
  );
}
