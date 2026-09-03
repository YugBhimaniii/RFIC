'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

export function StarBorder({
  as: Component = 'button',
  className = '',
  color = '#38bdf8',
  speed = '6s',
  children,
  ...rest
}: any) {
  return (
    <Component className={`relative inline-block overflow-hidden rounded-[inherit] ${className}`} {...rest}>
      <div className="absolute inset-0 z-0 overflow-hidden rounded-[inherit]">
        <div 
          className="absolute inset-[-100%] z-0 rounded-[inherit] opacity-70"
          style={{
            background: `conic-gradient(from 0deg, transparent 0 340deg, ${color} 360deg)`,
            animation: `star-border-spin ${speed} linear infinite`,
          }}
        />
      </div>
      <div className="absolute inset-[1px] z-10 rounded-[inherit] bg-sky-600 transition-colors group-hover:bg-sky-500" />
      <div className="relative z-20">
        {children}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes star-border-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </Component>
  );
}
