'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Inici() {
  return (
    <section id="inici" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bordils.jpg"
          alt="Festival La Llera"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Festival La Llera
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
          Festival de curtmetratges de la Llera del Ter
        </p>
        <p className="text-lg md:text-xl text-white mb-10 max-w-3xl mx-auto drop-shadow-md">
          Descobreix el talent cinematogràfic dels pobles de la Llera del Ter. 
          Una celebració del cinema local amb les millors produccions de curtmetratges.
        </p>
        <Link href="/inscripcions" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 ease-out shadow-lg inline-block">
            Vés a les inscripcions
        </Link>
      </div>

      {/* Scroll Down Arrow */}
      <button
        onClick={() => {
          const element = document.getElementById('festival');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
        aria-label="Scroll down"
      >
        <svg 
          className="w-8 h-8 text-white drop-shadow-lg" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>
    </section>
  );
}
