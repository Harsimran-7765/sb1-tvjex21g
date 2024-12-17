import React from 'react';

interface AimlLogoProps {
  className?: string;
}

export function AimlLogo({ className = '' }: AimlLogoProps) {
  return (
    <img
      src="/src/components/aimlLogo.png"
      alt="AIML Hub Logo"
      className={`${className} transition-all duration-300`}
    />
  );
}