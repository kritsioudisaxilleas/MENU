import * as React from "react";
import { cn } from "@/components/utils";


export const Button = React.forwardRef(
  ({ className, variant = "default", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none";

    const variants = {
      default: "bg-red-600 text-white hover:bg-red-700",
      outline: "border border-red-500 text-red-600 hover:bg-red-50",
      ghost: "text-red-600 hover:bg-red-50",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
