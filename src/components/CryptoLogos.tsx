import React from 'react';

export const USDTLogo: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="12" fill="#26A17B"/>
    <path d="M12.87 9.02c-2.25 0-4.08-.36-4.08-.8s1.83-.8 4.08-.8 4.08.36 4.08.8-.83.8-4.08.8zm0 1.6c-2.25 0-4.08-.36-4.08-.8s1.83-.8 4.08-.8 4.08.36 4.08.8-.83.8-4.08.8zm0-4.8c-2.25 0-4.08-.36-4.08-.8s1.83-.8 4.08-.8 4.08.36 4.08.8-.83.8-4.08.8z" fill="#ffffff"/>
    <path d="M17.5 6.5h-11v3h11v-3z" fill="#ffffff"/>
    <path d="M11.5 10.5h1v7h-1v-7z" fill="#ffffff"/>
    <path d="M8.5 12.5h7v1h-7v-1z" fill="#ffffff"/>
  </svg>
);

export const XRPLogo: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="12" fill="#23292F"/>
    <path d="M6.5 7.5l3.5 3.5c1.1 1.1 2.9 1.1 4 0l3.5-3.5h-2.8l-2.2 2.2c-.6.6-1.4.6-2 0L7.3 7.5H6.5z" fill="#ffffff"/>
    <path d="M17.5 16.5l-3.5-3.5c-1.1-1.1-2.9-1.1-4 0l-3.5 3.5h2.8l2.2-2.2c.6-.6 1.4-.6 2 0l2.2 2.2h2.8z" fill="#ffffff"/>
  </svg>
);

export const LitecoinLogo: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="12" fill="#345D9D"/>
    <path d="M6.5 6.5h3.5l-1.5 6h2.5l-.5 2h-2.5l-1 4h4.5l-.5 2H6l2.5-10H6.5l.5-2h2l.5-2z" fill="#ffffff"/>
    <path d="M8.5 12.5h4l-.5 2h-4l.5-2z" fill="#ffffff"/>
  </svg>
);

export const SolanaLogo: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <defs>
      <linearGradient id="solanaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9945FF"/>
        <stop offset="100%" stopColor="#14F195"/>
      </linearGradient>
    </defs>
    <path d="M4.5 7.5L7.5 4.5h12l-3 3h-12z" fill="url(#solanaGradient)"/>
    <path d="M4.5 12L7.5 9h12l-3 3h-12z" fill="url(#solanaGradient)"/>
    <path d="M4.5 16.5L7.5 13.5h12l-3 3h-12z" fill="url(#solanaGradient)"/>
  </svg>
);

export const DogecoinLogo: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="12" fill="#C2A633"/>
    <path d="M8.5 6.5h4.5c3.314 0 6 2.686 6 6s-2.686 6-6 6H8.5V6.5z" fill="#ffffff"/>
    <path d="M10.5 8.5v7h2.5c2.209 0 4-1.791 4-4s-1.791-4-4-4h-2.5z" fill="#C2A633"/>
    <rect x="6" y="11" width="4" height="2" fill="#ffffff"/>
  </svg>
);