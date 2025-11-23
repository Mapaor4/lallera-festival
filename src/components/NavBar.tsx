'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function NavBar() {
  const [activeSection, setActiveSection] = useState('inici');
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsScrolling(true);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;
      
      const sections = ['inici', 'festival', 'bases', 'faqs', 'organitzacio'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image 
              src="/logo.svg" 
              alt="Festival La Llera" 
              width={120} 
              height={60}
              className="cursor-pointer"
              onClick={() => scrollToSection('inici')}
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('inici')}
              className={`px-3 py-2 text-sm font-medium transition-colors relative group ${
                activeSection === 'inici' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Inici
              <span className={`absolute bottom-0 left-1/2 h-0.5 bg-blue-600 transition-all duration-300 ${
                activeSection === 'inici' 
                  ? 'w-full -translate-x-1/2' 
                  : 'w-0 group-hover:w-full -translate-x-1/2'
              }`}></span>
            </button>
            <button
              onClick={() => scrollToSection('festival')}
              className={`px-3 py-2 text-sm font-medium transition-colors relative group ${
                activeSection === 'festival' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              El Festival
              <span className={`absolute bottom-0 left-1/2 h-0.5 bg-blue-600 transition-all duration-300 ${
                activeSection === 'festival' 
                  ? 'w-full -translate-x-1/2' 
                  : 'w-0 group-hover:w-full -translate-x-1/2'
              }`}></span>
            </button>
            <button
              onClick={() => scrollToSection('bases')}
              className={`px-3 py-2 text-sm font-medium transition-colors relative group ${
                activeSection === 'bases' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Bases
              <span className={`absolute bottom-0 left-1/2 h-0.5 bg-blue-600 transition-all duration-300 ${
                activeSection === 'bases' 
                  ? 'w-full -translate-x-1/2' 
                  : 'w-0 group-hover:w-full -translate-x-1/2'
              }`}></span>
            </button>
            <button
              onClick={() => scrollToSection('faqs')}
              className={`px-3 py-2 text-sm font-medium transition-colors relative group ${
                activeSection === 'faqs' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              FAQs
              <span className={`absolute bottom-0 left-1/2 h-0.5 bg-blue-600 transition-all duration-300 ${
                activeSection === 'faqs' 
                  ? 'w-full -translate-x-1/2' 
                  : 'w-0 group-hover:w-full -translate-x-1/2'
              }`}></span>
            </button>
            <button
              onClick={() => scrollToSection('organitzacio')}
              className={`px-3 py-2 text-sm font-medium transition-colors relative group ${
                activeSection === 'organitzacio' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Organització
              <span className={`absolute bottom-0 left-1/2 h-0.5 bg-blue-600 transition-all duration-300 ${
                activeSection === 'organitzacio' 
                  ? 'w-full -translate-x-1/2' 
                  : 'w-0 group-hover:w-full -translate-x-1/2'
              }`}></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
