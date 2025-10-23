import { useEffect, useRef, useState } from 'react';

export default function AnimatedText({ text, className = '', delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {text.split(' ').map((word, idx) => (
        <span
          key={idx}
          className="inline-block mr-2 font-sans"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(90px)',
            transition: `all 0.5s ease ${idx * 0.05}s`,
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
