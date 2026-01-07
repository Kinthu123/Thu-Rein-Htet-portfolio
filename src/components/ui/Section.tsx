import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'transparent' | 'dark' | 'gradient';
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  containerClassName,
  background = 'transparent',
  fullWidth = false,
}) => {
  const backgrounds = {
    transparent: 'bg-transparent',
    dark: 'bg-black-100',
    gradient: 'bg-gradient-to-b from-black-100 to-black',
  };

  return (
    <section className={cn('py-16 md:py-24', backgrounds[background], className)}>
      <div className={cn(
        !fullWidth && 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
        containerClassName
      )}>
        {children}
      </div>
    </section>
  );
};

export default Section;
