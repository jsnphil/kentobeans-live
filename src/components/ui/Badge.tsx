import { type ReactNode } from 'react';
import { cn } from '@/utils/utils';

// Badge Component
export interface BadgeProps {
  children: ReactNode;
  variant?:
    | 'default'
    | 'success'
    | 'warning'
    | 'error'
    | 'info'
    | 'purple'
    | 'orange';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className
}: BadgeProps) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-full';

  const variantClasses = {
    default: 'bg-border-primary text-text-primary',
    success: 'bg-success/10 text-success border border-success/20',
    warning: 'bg-warning/10 text-warning border border-warning/20',
    error: 'bg-error/10 text-error border border-error/20',
    info: 'bg-info/10 text-info border border-info/20',
    purple:
      'bg-kento-purple/10 text-kento-purple border border-kento-purple/20',
    orange: 'bg-kento-orange/10 text-kento-orange border border-kento-orange/20'
  };

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base'
  };

  return (
    <span
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  );
};

// Status Badge - specific for queue statuses
export interface StatusBadgeProps {
  status: 'open' | 'closed' | 'shuffle' | 'entrant';
  className?: string;
}

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const statusConfig = {
    open: {
      label: 'Open',
      variant: 'success' as const,
      icon: '🟢'
    },
    closed: {
      label: 'Closed',
      variant: 'error' as const,
      icon: '🔴'
    },
    shuffle: {
      label: 'Shuffle',
      variant: 'warning' as const,
      icon: '🔀'
    },
    entrant: {
      label: 'Entrant',
      variant: 'purple' as const,
      icon: '👤'
    }
  };

  const config = statusConfig[status];

  return (
    <Badge variant={config.variant} className={className}>
      <span className='mr-1'>{config.icon}</span>
      {config.label}
    </Badge>
  );
};

// Count Badge - for displaying numbers/counts
export interface CountBadgeProps {
  count: number;
  variant?: BadgeProps['variant'];
  showZero?: boolean;
  className?: string;
}

export const CountBadge = ({
  count,
  variant = 'default',
  showZero = false,
  className
}: CountBadgeProps) => {
  if (count === 0 && !showZero) {
    return null;
  }

  return (
    <Badge variant={variant} size='sm' className={className}>
      {count > 99 ? '99+' : count}
    </Badge>
  );
};
