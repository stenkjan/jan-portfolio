"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

interface BlobImageProps {
  prefix: string; // e.g., "da-hoam_konfigurator"
  alt: string;
  className?: string;
}

export default function BlobImage({ prefix, alt, className = "" }: BlobImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await fetch(`/api/blob-images?prefix=${prefix}`);
        const data = await response.json();
        
        if (data.images && data.images.length > 0) {
          setImageUrl(data.images[0].url);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Failed to fetch blob image:', err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchImage();
  }, [prefix]);

  if (isLoading) {
    return (
      <div className={`aspect-video bg-papier-tief animate-pulse flex items-center justify-center ${className}`}>
        <ImageIcon className="h-12 w-12 text-tinte-still animate-pulse" />
      </div>
    );
  }

  if (error || !imageUrl) {
    return (
      <div className={`aspect-video bg-papier-tief flex items-center justify-center ${className}`}>
        <div className="text-center">
          <ImageIcon className="h-16 w-16 text-tinte-still mx-auto mb-2" />
          <p className="text-sm text-tinte-still">Ansicht nicht verfügbar</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`aspect-video relative ${className}`}>
      <Image
        src={imageUrl}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}


