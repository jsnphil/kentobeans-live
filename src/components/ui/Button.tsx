import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/utils';

// Button Component
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  iconOnly?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      loading = false,
      iconOnly = false,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variantClasses = {
      primary:
        'bg-kento-orange text-white hover:bg-kento-orange/90 focus:ring-kento-orange/50',
      secondary:
        'bg-kento-purple text-white hover:bg-kento-purple/90 focus:ring-kento-purple/50',
      tertiary:
        'bg-surface-primary text-text-primary border border-border-primary hover:bg-border-primary/20 focus:ring-kento-light-blue/50',
      ghost:
        'text-text-primary hover:bg-surface-primary/50 focus:ring-kento-light-blue/50',
      destructive: 'bg-error text-white hover:bg-error/90 focus:ring-error/50'
    };

    const sizeClasses = {
      sm: iconOnly ? 'h-8 w-8 rounded-md' : 'px-3 py-1.5 text-sm rounded-md',
      md: iconOnly ? 'h-10 w-10 rounded-lg' : 'px-4 py-2 text-base rounded-lg',
      lg: iconOnly ? 'h-12 w-12 rounded-lg' : 'px-6 py-3 text-lg rounded-lg',
      xl: iconOnly ? 'h-14 w-14 rounded-xl' : 'px-8 py-4 text-xl rounded-xl'
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {loading && (
          <svg
            className={cn(
              'animate-spin',
              iconOnly
                ? 'w-4 h-4'
                : size === 'sm'
                  ? 'w-3 h-3 mr-2'
                  : 'w-4 h-4 mr-2'
            )}
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            />
            <path
              className='opacity-75'
              fill='currentColor'
              d='m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

// Icon Button specifically for icon-only buttons
export interface IconButtonProps extends Omit<ButtonProps, 'iconOnly'> {}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    return <Button ref={ref} {...props} iconOnly={true} />;
  }
);
IconButton.displayName = 'IconButton';
