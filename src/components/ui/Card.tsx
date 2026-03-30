import { type ReactNode, forwardRef } from 'react';
import { cn } from '@/utils/utils';

// Card Component Variants
export interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'dark' | 'light' | 'elevated';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = 'default',
      size = 'md',
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'rounded-xl border transition-colors';

    const variantClasses = {
      default: 'bg-surface-primary border-border-primary',
      dark: 'bg-surface-primary border-border-primary',
      light: 'bg-surface-secondary border-border-light',
      elevated: 'bg-surface-primary border-border-primary shadow-dark-md'
    };

    const sizeClasses = {
      sm: 'p-3',
      md: 'p-5',
      lg: 'p-6'
    };

    const interactiveClasses = onClick
      ? 'cursor-pointer hover:border-border-secondary'
      : '';

    return (
      <div
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          interactiveClasses,
          className
        )}
        onClick={onClick}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = 'Card';

// Card Header Component
export interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export const CardHeader = ({ children, className }: CardHeaderProps) => {
  return (
    <div className={cn('flex items-center justify-between mb-4', className)}>
      {children}
    </div>
  );
};

// Card Title Component
export interface CardTitleProps {
  children: ReactNode;
  level?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
}

export const CardTitle = ({
  children,
  level = 'h3',
  className
}: CardTitleProps) => {
  const baseClasses = 'font-semibold text-text-primary';

  const levelClasses = {
    h1: 'text-3xl',
    h2: 'text-2xl',
    h3: 'text-xl',
    h4: 'text-lg'
  };

  const Component = level;

  return (
    <Component className={cn(baseClasses, levelClasses[level], className)}>
      {children}
    </Component>
  );
};

// Card Content Component
export interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export const CardContent = ({ children, className }: CardContentProps) => {
  return <div className={cn('space-y-4', className)}>{children}</div>;
};
