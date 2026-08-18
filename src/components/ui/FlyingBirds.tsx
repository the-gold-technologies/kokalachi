import React from "react";

interface FlyingBirdsProps {
  className?: string;
  color?: string;
}

export function FlyingBirds({ className = "", color = "currentColor" }: FlyingBirdsProps) {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg
        className="w-24 h-12 text-inherit"
        viewBox="0 0 160 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left Bird Silhouette */}
        <path
          d="M 10 32 Q 30 16 50 32 Q 70 16 90 32"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Right Bird Silhouette */}
        <path
          d="M 105 20 Q 118 9 132 20 Q 146 9 160 20"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
