import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Expand } from "lucide-react";
import type { Image } from "@shared/schema";

interface GalleryGridProps {
  images: Image[];
  onImageClick: (index: number) => void;
}

export default function GalleryGrid({ images, onImageClick }: GalleryGridProps) {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  useEffect(() => {
    setLoadedImages(new Set());
  }, [images]);

  const handleImageLoad = (imageId: number) => {
    setLoadedImages(prev => new Set(prev).add(imageId));
  };

  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No images found</h3>
          <p className="text-gray-500">Try selecting a different category.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-max">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`gallery-item relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${image.height} ${
            loadedImages.has(image.id) ? 'animate-slide-up' : 'opacity-0'
          }`}
          onClick={() => onImageClick(index)}
        >
          <img
            src={image.src}
            alt={image.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            onLoad={() => handleImageLoad(image.id)}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
            <p className="text-sm text-gray-200">{image.description}</p>
            <Badge variant="secondary" className="mt-2 bg-blue-600 hover:bg-blue-700 text-white capitalize">
              {image.category}
            </Badge>
          </div>
          
          {/* Expand Button */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="sm"
              variant="secondary"
              className="bg-white bg-opacity-20 backdrop-blur-sm text-white hover:bg-opacity-30 border-0"
            >
              <Expand className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
