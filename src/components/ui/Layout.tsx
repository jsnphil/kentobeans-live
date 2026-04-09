import { type ReactNode } from 'react';
import { cn } from '@/utils/utils';

// Grid Component
export interface GridProps {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  responsive?: {
    sm?: 1 | 2 | 3 | 4 | 5 | 6;
    md?: 1 | 2 | 3 | 4 | 5 | 6;
    lg?: 1 | 2 | 3 | 4 | 5 | 6;
    xl?: 1 | 2 | 3 | 4 | 5 | 6;
  };
  className?: string;
}

export const Grid = ({
  children,
  cols = 1,
  gap = 'md',
  responsive,
  className
}: GridProps) => {
  const baseClasses = 'grid';

  const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6'
  };

  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8'
  };

  const responsiveClasses = responsive
    ? [
        responsive.sm && `sm:grid-cols-${responsive.sm}`,
        responsive.md && `md:grid-cols-${responsive.md}`,
        responsive.lg && `lg:grid-cols-${responsive.lg}`,
        responsive.xl && `xl:grid-cols-${responsive.xl}`
      ]
        .filter(Boolean)
        .join(' ')
    : '';

  return (
    <div
      className={cn(
        baseClasses,
        colClasses[cols],
        gapClasses[gap],
        responsiveClasses,
        className
      )}
    >
      {children}
    </div>
  );
};

// Stack Component for vertical layouts
export interface StackProps {
  children: ReactNode;
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  className?: string;
}

export const Stack = ({
  children,
  spacing = 'md',
  align = 'stretch',
  className
}: StackProps) => {
  const baseClasses = 'flex flex-col';

  const spacingClasses = {
    xs: 'space-y-1',
    sm: 'space-y-2',
    md: 'space-y-4',
    lg: 'space-y-6',
    xl: 'space-y-8'
  };

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch'
  };

  return (
    <div
      className={cn(
        baseClasses,
        spacingClasses[spacing],
        alignClasses[align],
        className
      )}
    >
      {children}
    </div>
  );
};

// Flex Component for horizontal layouts
export interface FlexProps {
  children: ReactNode;
  direction?: 'row' | 'row-reverse' | 'col' | 'col-reverse';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Flex = ({
  children,
  direction = 'row',
  align = 'start',
  justify = 'start',
  wrap = 'nowrap',
  gap = 'md',
  className
}: FlexProps) => {
  const baseClasses = 'flex';

  const directionClasses = {
    row: 'flex-row',
    'row-reverse': 'flex-row-reverse',
    col: 'flex-col',
    'col-reverse': 'flex-col-reverse'
  };

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
    baseline: 'items-baseline'
  };

  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly'
  };

  const wrapClasses = {
    nowrap: 'flex-nowrap',
    wrap: 'flex-wrap',
    'wrap-reverse': 'flex-wrap-reverse'
  };

  const gapClasses = {
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8'
  };

  return (
    <div
      className={cn(
        baseClasses,
        directionClasses[direction],
        alignClasses[align],
        justifyClasses[justify],
        wrapClasses[wrap],
        gapClasses[gap],
        className
      )}
    >
      {children}
    </div>
  );
};

// Container Component
export interface ContainerProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: boolean;
  className?: string;
}

export const Container = ({
  children,
  size = 'xl',
  padding = true,
  className
}: ContainerProps) => {
  const baseClasses = 'mx-auto';

  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-none'
  };

  const paddingClasses = padding ? 'px-4 sm:px-6 lg:px-8' : '';

  return (
    <div
      className={cn(baseClasses, sizeClasses[size], paddingClasses, className)}
    >
      {children}
    </div>
  );
};

// Section Component for page sections
export interface SectionProps {
  children: ReactNode;
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Section = ({
  children,
  spacing = 'lg',
  className
}: SectionProps) => {
  const spacingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24'
  };

  return (
    <section className={cn(spacingClasses[spacing], className)}>
      {children}
    </section>
  );
};
