'use client';

export function ShinyText({
  text,
  disabled = false,
  speed = 3,
  className = '',
}: {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}) {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`text-[#475569]/80 ${
        disabled ? '' : 'animate-shine'
      } ${className}`}
      style={{
        backgroundImage: 'linear-gradient(120deg, rgba(2, 132, 199, 0) 40%, rgba(2, 132, 199, 0.4) 50%, rgba(2, 132, 199, 0) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animationDuration,
      }}
    >
      {text}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shine {
          0% {
            background-position: 100%;
          }
          100% {
            background-position: -100%;
          }
        }
        .animate-shine {
          animation: shine linear infinite;
        }
      `}} />
    </div>
  );
}
