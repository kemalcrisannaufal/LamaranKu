import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "./button";

interface InputProps extends React.ComponentProps<"input"> {
  className?: string;
  type?: string;
  suffixIcon?: React.ReactNode;
  onClickSuffixIcon?: () => void;
}

function Input({
  className,
  type,
  suffixIcon,
  onClickSuffixIcon,
  ...props
}: InputProps) {
  return (
    <div className="relative">
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
      />
      {suffixIcon && (
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={onClickSuffixIcon}
          className="absolute right-0 p-0"
        >
          {suffixIcon}
        </Button>
      )}
    </div>
  );
}

export { Input };
