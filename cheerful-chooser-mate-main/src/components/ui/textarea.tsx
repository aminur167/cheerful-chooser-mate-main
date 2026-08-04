import * as React from "react";

import { cn } from "@/lib/utils";
import { fieldControlClass } from "@/components/ui/input";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(fieldControlClass, "min-h-24 resize-y px-3 py-2.5 leading-relaxed", className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
