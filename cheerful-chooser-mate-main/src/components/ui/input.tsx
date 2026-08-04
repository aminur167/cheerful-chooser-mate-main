import * as React from "react";

import { cn } from "@/lib/utils";

export const fieldControlClass =
  "flex w-full rounded-lg border border-border bg-card text-sm text-foreground shadow-xs transition-enterprise placeholder:text-muted-foreground/70 hover:border-border-strong focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/25 disabled:cursor-not-allowed disabled:bg-muted/60 disabled:opacity-60 aria-[invalid=true]:border-danger aria-[invalid=true]:focus-visible:ring-danger/25";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          fieldControlClass,
          "h-10 px-3 py-2 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground [&::-webkit-calendar-picker-indicator]:opacity-60 [&::-webkit-search-cancel-button]:appearance-none",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
