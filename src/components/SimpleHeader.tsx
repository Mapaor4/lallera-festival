import Link from 'next/link';

export default function SimpleHeader() {
  return (
    <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-700 hover:text-blue-600 transition-colors group"
        >
          <svg 
            className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
          <span className="font-medium">Tornar a la pàgina principal</span>
        </Link>
      </div>
    </div>
  );
}
