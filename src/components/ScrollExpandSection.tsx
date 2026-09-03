'use client';

import { useEffect, useState } from 'react';
import ScrollExpand from './ScrollExpand';
import { Iridescence } from './react-bits/Iridescence';

export function ScrollExpandSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isClient) {
    return <div className="w-full min-h-[70vh] bg-slate-50" />;
  }

  return (
    <section className="relative w-full bg-slate-50 z-10 overflow-hidden mb-16 md:mb-24" id="visual-showcase">
      <Iridescence className="opacity-60" speed={0.5} />
      {/* 
        Container for the scroll expand effect. 
        We use window scroll (useWindowScroll={true}), so the container's height 
        determines how much vertical space the track takes up. 
        Wait, ScrollExpand component internally sets the track height based on stage height * scrollDistance.
        When useWindowScroll is true, the stage takes window.innerHeight. 
        The parent div just needs enough height for the track to be sticky. 
        Actually, ScrollExpand uses absolute/relative positioning for track/stage.
        If we render it inside a normal div, we should not set a fixed height on the wrapper 
        because ScrollExpand will manage its own height based on scrollDistance.
      */}
      <ScrollExpand
        src="/rf-chip-hero.jpg"
        alt="Silicon Wafer RF IC"
        title="At the Silicon Level"
        scrollHint="Scroll to Explore"
        useWindowScroll={true}
        startWidth={isMobile ? 85 : 55}
        startHeight={isMobile ? 55 : 65}
        startRadius={24}
        endRadius={0}
        mediaZoom={1.35}
        scrollDistance={0.4}
        holdDistance={0}
        smoothing={0.1}
        overlayScrim={0.75}
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 drop-shadow-sm">
            Master the Physical Layer
          </h2>
          <p className="text-lg md:text-xl text-slate-700 drop-shadow-sm font-medium">
            Dive deep into 130nm SiGe BiCMOS technology. From schematic to layout to tape-out, experience true end-to-end open-source silicon design.
          </p>
        </div>
      </ScrollExpand>
    </section>
  );
}
