'use client';

import { useEffect, useRef } from 'react';

export function Iridescence({
  color = [255, 255, 255],
  speed = 1.0,
  amplitude = 0.1,
  className = '',
}: {
  color?: [number, number, number];
  speed?: number;
  amplitude?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const render = () => {
      time += 0.01 * speed;
      
      const width = canvas.width;
      const height = canvas.height;
      
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      
      // Creating a soft liquid chrome / iridescence effect for light mode
      const r1 = Math.sin(time) * 10 + 240;
      const g1 = Math.cos(time * 0.8) * 10 + 248;
      const b1 = Math.sin(time * 1.2) * 5 + 252;
      
      const r2 = Math.cos(time * 1.1) * 15 + 224;
      const g2 = Math.sin(time * 0.9) * 15 + 242;
      const b2 = Math.cos(time * 1.3) * 5 + 254;
      
      const r3 = Math.sin(time * 0.7) * 10 + 204;
      const g3 = Math.cos(time * 1.4) * 10 + 251;
      const b3 = Math.sin(time * 0.8) * 5 + 241;

      gradient.addColorStop(0, `rgb(${r1}, ${g1}, ${b1})`);
      gradient.addColorStop(0.5, `rgb(${r2}, ${g2}, ${b2})`);
      gradient.addColorStop(1, `rgb(${r3}, ${g3}, ${b3})`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Add a subtle wave pattern
      ctx.beginPath();
      for (let x = 0; x < width; x += 20) {
        const y = height / 2 + Math.sin(x * 0.01 + time) * (height * amplitude);
        ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 40;
      ctx.filter = 'blur(20px)';
      ctx.stroke();
      ctx.filter = 'none';

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, speed, amplitude]);

  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden rounded-[inherit] ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
      <div className="absolute inset-0 bg-white/40 mix-blend-overlay pointer-events-none" />
    </div>
  );
}
