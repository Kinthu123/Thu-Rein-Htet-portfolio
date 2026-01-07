'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  animationFrom?: {
    opacity?: number;
    transform?: string;
  };
  animationTo?: {
    opacity?: number;
    transform?: string;
  };
  easing?: string;
  threshold?: number;
  rootMargin?: string;
  gradient?: boolean;
  gradientClassName?: string;
  display?: string;
}

const SplitText: React.FC<SplitTextProps> = ({
  children,
  className,
  delay = 0.03,
  animationFrom = {
    opacity: 0,
    transform: 'translateY(20px)',
  },
  animationTo = {
    opacity: 1,
    transform: 'translateY(0)',
  },
  easing = 'cubic-bezier(0.65, 0, 0.35, 1)',
  threshold = 0.1,
  rootMargin = '0px',
  gradient = false,
  gradientClassName = "bg-gradient-to-r from-brand-purple-400 to-brand-pink-400",
  display = 'inline-block',
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = container.querySelectorAll('.split-char');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            chars.forEach((char, index) => {
              const element = char as HTMLElement;
              setTimeout(() => {
                element.style.opacity = String(animationTo.opacity ?? 1);
                element.style.transform = animationTo.transform ?? 'translateY(0)';
              }, index * (delay * 1000));
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    if (container) {
      observer.observe(container);
    }

    return () => {
      observer.disconnect();
    };
  }, [delay, animationFrom, animationTo, threshold, rootMargin]);

  const splitText = () => {
    return children.split('').map((char, index) => (
      <span
        key={index}
        className={cn(
          "split-char inline-block",
          gradient && `${gradientClassName} bg-clip-text text-transparent`
        )}
        style={{
          opacity: animationFrom.opacity ?? 0,
          transform: animationFrom.transform ?? 'translateY(20px)',
          transition: `all 0.5s ${easing}`,
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <span ref={containerRef} className={cn(display, className)}>
      {splitText()}
    </span>
  );
};

export default SplitText;
