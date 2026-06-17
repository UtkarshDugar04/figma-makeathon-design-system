import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg';
  interactive?: boolean;
}

export default function Card({
  children,
  padding = 'md',
  interactive = false,
  className = '',
  ...props
}: CardProps) {
  const paddings = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-8',
  };

  const interactiveStyles = interactive 
    ? 'cursor-pointer hover:-translate-y-1 hover:shadow-card-hover transition-all duration-normal ease-spring' 
    : '';

  return (
    <div 
      className={`bg-card-bg border border-card-border rounded-card shadow-card ${paddings[padding]} ${interactiveStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
