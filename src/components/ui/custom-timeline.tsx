import React from "react";
import { cn } from "@/lib/utils";

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

export function CustomTimeline({ children, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute left-6 top-0 h-full w-px bg-border dark:bg-gray-800"></div>
      <ul className="space-y-12">{children}</ul>
    </div>
  );
}

interface TimelineItemProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export function CustomTimelineItem({ children, className, icon }: TimelineItemProps) {
  return (
    <li className={cn("relative pl-16", className)}>
      <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background shadow-md dark:bg-gray-900 dark:border-gray-800">
        {icon}
      </div>
      <div className="pt-1">{children}</div>
    </li>
  );
}

interface TimelineContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CustomTimelineContent({ children, className }: TimelineContentProps) {
  return <div className={cn("", className)}>{children}</div>;
}

interface TimelineTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CustomTimelineTitle({ children, className }: TimelineTitleProps) {
  return <h3 className={cn("text-xl font-bold mb-1", className)}>{children}</h3>;
}
