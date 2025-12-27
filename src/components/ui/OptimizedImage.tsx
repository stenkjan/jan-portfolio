"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

/**
 * OptimizedImage - Simple, performant image component for portfolio
 * Handles loading states, errors, and Next.js Image optimization
 */
export default function OptimizedImage({
  src,
  alt,
  width = 800,
  height = 600,
  className = "",
  priority = false,
  fill = false,
  objectFit = "cover",
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Check if src is a PDF (can't be displayed as image)
  const isPdf = src.toLowerCase().endsWith(".pdf");

  if (isPdf) {
    // For PDFs, show a preview placeholder with link
    return (
      <div
        className={`relative ${className} bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center`}
      >
        <div className="text-center p-8">
          <ImageIcon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <p className="text-sm text-gray-600 mb-2">PDF Screenshot</p>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-medium text-sm underline"
          >
            View Full Screenshot →
          </a>
        </div>
      </div>
    );
  }

  if (hasError) {
    return (
      <div
        className={`relative ${className} bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center`}
      >
        <div className="text-center p-8">
          <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p className="text-sm text-gray-500">Image not available</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className} overflow-hidden`}>
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 animate-pulse flex items-center justify-center">
          <div className="text-blue-600">
            <ImageIcon className="h-12 w-12 animate-pulse" />
          </div>
        </div>
      )}

      {/* Actual image */}
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          className={`transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          style={{ objectFit }}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          } ${className}`}
          style={{ objectFit }}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
    </div>
  );
}
