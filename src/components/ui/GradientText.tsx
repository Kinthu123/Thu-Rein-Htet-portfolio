import React from 'react';
import { cn } from '@/lib/utils';

export interface GradientTextProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  as: Component = 'span',
  variant = 'primary',
  className,
}) => {
  const variants = {
    primary: 'gradient-text',
    secondary: 'gradient-text-secondary',
    accent: 'gradient-text-accent',
  };

  return (
    <Component className={cn(variants[variant], className)}>
      {children}
    </Component>
  );
};

export default GradientText;
