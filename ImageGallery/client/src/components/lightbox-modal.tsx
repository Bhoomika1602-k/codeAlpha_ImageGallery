import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ChevronLeft, ChevronRight, Download, Heart } from "lucide-react";
import type { Image } from "@shared/schema";

interface LightboxModalProps {
  image: Image;
  currentIndex: number;
  totalImages: number;
  onClose: () => void;
  onNavigate: (direction: "prev" | "next") => void;
}

export default function LightboxModal({ 
  image, 
  currentIndex, 
  totalImages, 
  onClose, 
  onNavigate 
}: LightboxModalProps) {
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onNavigate('prev');
          break;
        case 'ArrowRight':
          onNavigate('next');
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onNavigate]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-6xl max-h-full w-full h-full flex items-center justify-center">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute top-4 right-4 z-60 text-white hover:text-gray-300 hover:bg-white hover:bg-opacity-20"
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Previous Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onNavigate('prev')}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        {/* Next Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onNavigate('next')}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Image Container */}
        <div className="relative max-w-full max-h-full flex items-center justify-center">
          <img
            src={image.src}
            alt={image.title}
            className="max-w-full max-h-full object-contain animate-zoom-in"
          />
        </div>

        {/* Image Info */}
        <div className="absolute bottom-4 left-4 right-4 text-white text-center">
          <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
          <p className="text-gray-300 text-sm mb-3">{image.description}</p>
          
          <div className="flex justify-center items-center mt-3 space-x-4">
            <span className="text-sm text-gray-400">
              {currentIndex + 1} of {totalImages}
            </span>
            
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-xs hover:bg-opacity-30"
              >
                <Download className="h-3 w-3 mr-1" />
                Download
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-xs hover:bg-opacity-30"
              >
                <Heart className="h-3 w-3 mr-1" />
                Like
              </Button>
            </div>
            
            <Badge variant="secondary" className="bg-blue-600 text-white capitalize">
              {image.category}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
