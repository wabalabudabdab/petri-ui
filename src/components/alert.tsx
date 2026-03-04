'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import {
  AlertTriangle,
  Info,
  CheckCircle2,
  XCircle,
  Loader2,
} from 'lucide-react';

import { cn } from '../lib/utils';

const alertVariants = cva('relative w-full rounded-lg border shadow-sm', {
  variants: {
    variant: {
      default: 'bg-background text-foreground border-border',
      warning:
        'bg-orange-50 dark:bg-orange-950/40 border-2 border-orange-400 dark:border-orange-600 text-orange-900 dark:text-orange-100',
      error:
        'bg-red-50 dark:bg-red-950/40 border-2 border-red-400 dark:border-red-600 text-red-900 dark:text-red-100',
      info: 'bg-blue-50 dark:bg-blue-950/40 border-2 border-blue-400 dark:border-blue-600 text-blue-900 dark:text-blue-100',
      success:
        'bg-green-50 dark:bg-green-950/40 border-2 border-green-400 dark:border-green-600 text-green-900 dark:text-green-100',
    },
    size: {
      default: 'p-4',
      sm: 'p-3',
      lg: 'p-5',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

const alertIconMap = {
  warning: AlertTriangle,
  error: XCircle,
  info: Info,
  success: CheckCircle2,
  default: Info,
  loading: Loader2,
} as const;

const alertIconColorMap = {
  warning: 'text-orange-600 dark:text-orange-400',
  error: 'text-red-600 dark:text-red-400',
  info: 'text-blue-600 dark:text-blue-400',
  success: 'text-green-600 dark:text-green-400',
  default: 'text-foreground',
  loading: 'text-foreground',
} as const;

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode;
  showIcon?: boolean;
  isLoading?: boolean;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant = 'default',
      size,
      icon,
      showIcon = true,
      isLoading = false,
      children,
      ...props
    },
    ref,
  ) => {
    const IconComponent = isLoading
      ? alertIconMap.loading
      : icon
        ? undefined
        : variant && variant !== 'default'
          ? alertIconMap[variant]
          : alertIconMap.default;

    const iconColor =
      variant && variant !== 'default'
        ? alertIconColorMap[variant]
        : alertIconColorMap.default;

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant, size }), className)}
        {...props}
      >
        {showIcon && (IconComponent || icon) ? (
          <div className="flex items-start gap-3">
            {isLoading && IconComponent === alertIconMap.loading ? (
              <IconComponent
                className={cn(
                  'h-6 w-6 shrink-0 mt-0.5 animate-spin',
                  iconColor,
                )}
              />
            ) : icon ? (
              <div className={cn('h-6 w-6 shrink-0 mt-0.5', iconColor)}>
                {icon}
              </div>
            ) : IconComponent ? (
              <IconComponent
                className={cn('h-6 w-6 shrink-0 mt-0.5', iconColor)}
              />
            ) : null}
            <div className="flex-1 min-w-0">{children}</div>
          </div>
        ) : (
          children
        )}
      </div>
    );
  },
);
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-2 font-semibold leading-tight tracking-tight', className)}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-base leading-relaxed mt-1.5', className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
