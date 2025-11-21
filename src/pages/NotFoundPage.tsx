import React from 'react';

export default function NotFoundPage({ onHome }: { onHome?: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 p-6">
      <div className="max-w-3xl w-full bg-white/80 backdrop-blur rounded-3xl shadow-xl p-8 text-center">
        <div className="mb-6">
          {/* friendly illustration (inline SVG) */}
          <svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
            <rect x="8" y="20" width="144" height="88" rx="14" fill="#F8FAFC" stroke="#E6E9EE" />
            <circle cx="48" cy="58" r="18" fill="#FDE68A" />
            <rect x="74" y="46" width="56" height="6" rx="3" fill="#FBCFE8" />
            <rect x="74" y="62" width="40" height="6" rx="3" fill="#BFDBFE" />
            <path d="M28 90c10-12 28-12 38 0" stroke="#FCA5A5" strokeWidth="3" strokeLinecap="round" />
            <g transform="translate(112,10)">
              <rect x="0" y="0" width="32" height="24" rx="6" fill="#E9D5FF" />
              <circle cx="24" cy="6" r="2" fill="#FB7185" />
            </g>
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Page Not Found</h1>
        <p className="text-gray-600 mb-6">We couldn't find the page you're looking for. It may have moved or never existed — but the coffee is still fresh.</p>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => onHome?.()}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold shadow-lg hover:opacity-95"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}
