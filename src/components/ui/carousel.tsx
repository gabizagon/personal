import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

const Carousel = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { children: ReactNode }
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('relative w-full overflow-hidden', className)}
      {...props}
    >
      {children}
    </div>
  );
});
Carousel.displayName = 'Carousel';

const CarouselContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { children: ReactNode }
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex transition-transform duration-500 ease-out', className)}
      {...props}
    >
      {children}
    </div>
  );
});
CarouselContent.displayName = 'CarouselContent';

const CarouselItem = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { children: ReactNode }
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex-shrink-0 flex-grow-0', className)}
      {...props}
    >
      {children}
    </div>
  );
});
CarouselItem.displayName = 'CarouselItem';

export { Carousel, CarouselContent, CarouselItem };