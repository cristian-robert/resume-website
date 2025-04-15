// src/components/ui/text-container.tsx
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TextContainerProps {
  children: ReactNode;
  className?: string;
}

export function TextContainer({ children, className }: TextContainerProps) {
  return (
    <div 
      className={cn(
        "bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}