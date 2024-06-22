"use client";

import React from 'react';

interface IconProps {
  height?: number;
  width?: number;
}

export const OrionIcon: React.FC<IconProps> = ({ height, width }) => (
  
    
    <svg width={width} height={height} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="100" fill="url(#paint0_linear_0_1)"/>
        <defs>
        <linearGradient id="paint0_linear_0_1" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
        <stop stop-color="#43E8D5"/>
        <stop offset="1" stop-color="#43C58E"/>
        </linearGradient>
        </defs>
    </svg>

  
);

