import { cn } from '@/utils/cn';
import { VariantProps, cva } from 'class-variance-authority';
import React from 'react'
const variants = cva(
    "shadow-grid rounded-2xl bg-white bg-zinc-900 flex flex-col container relative border border-[--border-color] z-0",
    {
      variants: {
        size: {
          "1x2": "md:col-span-1 col-span-2 row-span-2 md:p-8 p-4",
          "2x1": "md:col-span-2 col-span-full row-span-1 py-4 md:px-8 px-4",
          "2x2": "md:col-span-2 col-span-full row-span-2 md:p-8 p-4",
          "2x4":
            "md:col-span-2 col-span-full row-span-4 relative ",
        },
      },
      defaultVariants: {
        size: "1x2",
      },
    }
  );
  
export type GridItemProps = { 
  children: React.ReactNode;
} & VariantProps<typeof variants>;
export default function GridItem({ children,size}: GridItemProps) {
  return (
    <div className={cn(
        variants({
          size,
          className:
            "hover:bg-zinc-800 duration-75 transition-colors ease-in-out",
        })
      )}>
        {children}
        <div className='bg-noisy pointer-events-none absolute inset-0 z-10 rounded-2xl'/>
      </div>
  )
}
