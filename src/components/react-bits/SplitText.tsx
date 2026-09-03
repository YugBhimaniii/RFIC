'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function SplitText({ text, className = '', delay = 0 }: SplitTextProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <div ref={ref} className={`inline-block overflow-hidden pb-2 -mb-2 ${className}`}>
      {text.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap overflow-hidden pb-2 -mb-2">
          {word.split('').map((char, charIndex) => {
            return (
              <motion.span
                key={`${wordIndex}-${charIndex}`}
                className="inline-block"
                variants={{
                  hidden: { y: '100%', opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      ease: [0.33, 1, 0.68, 1],
                      delay: delay + (wordIndex * 0.1) + (charIndex * 0.02),
                    },
                  },
                }}
                initial="hidden"
                animate={controls}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            );
          })}
          <span className="inline-block">&nbsp;</span>
        </span>
      ))}
    </div>
  );
}
