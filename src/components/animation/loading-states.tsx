"use client";
import { motion } from "framer-motion";

export default function HeroLoading() {
  return (
    <div className="min-h-screen pt-20 bg-[#0B1221]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Skeleton */}
          <div className="animate-pulse">
            <div className="relative w-full max-w-[280px] md:max-w-full mx-auto rounded-lg overflow-hidden bg-[#151E2E] aspect-[4/5]" />
          </div>

          {/* Content Skeletons */}
          <div className="space-y-8">
            {/* Title Skeleton */}
            <div className="space-y-4">
              <div className="h-8 w-32 bg-[#151E2E] rounded animate-pulse" />
              <div className="h-12 w-72 bg-[#151E2E] rounded animate-pulse" />
              <div className="h-6 w-64 bg-[#151E2E] rounded animate-pulse" />
            </div>

            {/* About Section Skeleton */}
            <div className="bg-[#151E2E] rounded-lg p-6 space-y-4">
              <div className="h-6 w-24 bg-[#1A2537] rounded animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-[#1A2537] rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-[#1A2537] rounded animate-pulse" />
                <div className="h-4 w-4/6 bg-[#1A2537] rounded animate-pulse" />
              </div>
            </div>

            {/* Location Section Skeleton */}
            <div className="bg-[#151E2E] rounded-lg p-6">
              <div className="h-6 w-32 bg-[#1A2537] rounded animate-pulse" />
              <div className="h-4 w-48 mt-4 bg-[#1A2537] rounded animate-pulse" />
            </div>

            {/* Education Section Skeleton */}
            <div className="bg-[#151E2E] rounded-lg p-6 space-y-4">
              <div className="h-6 w-32 bg-[#1A2537] rounded animate-pulse" />
              <div className="space-y-3">
                <div className="h-4 w-full bg-[#1A2537] rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-[#1A2537] rounded animate-pulse" />
              </div>
            </div>

            {/* Buttons Skeleton */}
            <div className="flex gap-4">
              <div className="h-10 w-32 bg-[#151E2E] rounded animate-pulse" />
              <div className="h-10 w-40 bg-[#151E2E] rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ExperienceLoading() {
  return (
    <div className="space-y-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-[#151E2E] rounded-lg p-8 animate-pulse">
          <div className="flex justify-between items-start mb-6">
            <div className="space-y-2">
              <div className="h-6 w-64 bg-[#1A2537] rounded" />
              <div className="h-4 w-48 bg-[#1A2537] rounded" />
            </div>
            <div className="h-4 w-32 bg-[#1A2537] rounded" />
          </div>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((j) => (
              <div key={j} className="h-4 w-full bg-[#1A2537] rounded" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProjectsLoading() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="bg-[#151E2E] rounded-lg p-6 animate-pulse">
          <div className="flex justify-between items-start mb-4">
            <div className="h-6 w-48 bg-[#1A2537] rounded" />
            <div className="h-6 w-6 bg-[#1A2537] rounded" />
          </div>
          <div className="space-y-2 mb-4">
            <div className="h-4 w-full bg-[#1A2537] rounded" />
            <div className="h-4 w-2/3 bg-[#1A2537] rounded" />
          </div>
          <div className="h-4 w-24 bg-[#1A2537] rounded" />
        </div>
      ))}
    </div>
  );
}

export function SkillsLoading() {
  return (
    <div className="space-y-12">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="animate-pulse">
          <div className="h-6 w-48 bg-[#151E2E] rounded mb-4" />
          <div className="flex flex-wrap gap-3">
            {[1, 2, 3, 4, 5, 6].map((j) => (
              <div key={j} className="h-8 w-32 bg-[#151E2E] rounded" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ContactLoading() {
  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div className="space-y-6 animate-pulse">
        <div className="h-8 w-48 bg-[#151E2E] rounded" />
        <div className="h-4 w-96 bg-[#151E2E] rounded" />
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-5 w-5 bg-[#151E2E] rounded" />
              <div className="h-4 w-64 bg-[#151E2E] rounded" />
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4 animate-pulse">
        <div className="h-12 w-full bg-[#151E2E] rounded" />
        <div className="h-12 w-full bg-[#151E2E] rounded" />
        <div className="h-32 w-full bg-[#151E2E] rounded" />
        <div className="h-12 w-full bg-[#151E2E] rounded" />
      </div>
    </div>
  );
}
