import { type ReactNode } from 'react';
import { cn } from '@/utils/utils';

// Heading Component
export interface HeadingProps {
  children: ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: 'default' | 'gradient' | 'accent';
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const Heading = ({
  children,
  level,
  variant = 'default',
  align = 'left',
  className
}: HeadingProps) => {
  const baseClasses = 'font-bold leading-tight';

  const levelClasses = {
    1: 'text-4xl md:text-6xl',
    2: 'text-3xl md:text-4xl',
    3: 'text-2xl md:text-3xl',
    4: 'text-xl md:text-2xl',
    5: 'text-lg md:text-xl',
    6: 'text-base md:text-lg'
  };

  const variantClasses = {
    default: 'text-text-primary',
    gradient:
      'bg-gradient-to-r from-kento-light-blue via-kento-purple to-kento-orange bg-clip-text text-transparent',
    accent: 'text-kento-orange'
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const Component = `h${level}` as const;

  return (
    <Component
      className={cn(
        baseClasses,
        levelClasses[level],
        variantClasses[variant],
        alignClasses[align],
        className
      )}
    >
      {children}
    </Component>
  );
};

// Text Component
export interface TextProps {
  children: ReactNode;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'primary' | 'secondary' | 'muted' | 'inverse' | 'accent';
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const Text = ({
  children,
  size = 'base',
  weight = 'normal',
  color = 'primary',
  align = 'left',
  className
}: TextProps) => {
  const baseClasses = 'leading-relaxed';

  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  };

  const colorClasses = {
    primary: 'text-text-primary',
    secondary: 'text-text-secondary',
    muted: 'text-text-muted',
    inverse: 'text-text-inverse',
    accent: 'text-kento-orange'
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <p
      className={cn(
        baseClasses,
        sizeClasses[size],
        weightClasses[weight],
        colorClasses[color],
        alignClasses[align],
        className
      )}
    >
      {children}
    </p>
  );
};

// Label Component - for form labels, stat labels, etc.
export interface LabelProps {
  children: ReactNode;
  uppercase?: boolean;
  className?: string;
}

export const Label = ({
  children,
  uppercase = true,
  className
}: LabelProps) => {
  return (
    <span
      className={cn(
        'text-xs font-semibold text-text-secondary leading-tight',
        uppercase && 'uppercase tracking-wider',
        className
      )}
    >
      {children}
    </span>
  );
};

// Code/Mono Text Component
export interface CodeProps {
  children: ReactNode;
  inline?: boolean;
  className?: string;
}

export const Code = ({ children, inline = true, className }: CodeProps) => {
  const baseClasses = 'font-mono text-sm';

  if (inline) {
    return (
      <code
        className={cn(
          baseClasses,
          'px-1.5 py-0.5 bg-surface-primary border border-border-primary rounded text-text-primary',
          className
        )}
      >
        {children}
      </code>
    );
  }

  return (
    <pre
      className={cn(
        baseClasses,
        'p-4 bg-surface-primary border border-border-primary rounded-lg text-text-primary overflow-x-auto',
        className
      )}
    >
      <code>{children}</code>
    </pre>
  );
};
