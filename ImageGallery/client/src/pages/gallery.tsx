import { useState } from "react";
import { useGallery } from "@/hooks/use-gallery";
import GalleryFilters from "@/components/gallery-filters";
import GalleryGrid from "@/components/gallery-grid";
import LightboxModal from "@/components/lightbox-modal";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  
  const { images, isLoading, error } = useGallery(activeCategory);

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNavigateLightbox = (direction: "prev" | "next") => {
    if (lightboxIndex === null || !images) return;
    
    const newIndex = direction === "next" 
      ? (lightboxIndex + 1) % images.length
      : (lightboxIndex - 1 + images.length) % images.length;
    
    setLightboxIndex(newIndex);
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Gallery</h2>
          <p className="text-gray-600">Failed to load images. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Gallery</h1>
              <span className="text-sm text-gray-500">Professional Photography Collection</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                {isLoading ? "Loading..." : `${images?.length || 0} Images`}
              </span>
              <Button variant="ghost" size="sm">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Filter Tabs */}
      <GalleryFilters 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory}
        images={images || []}
      />

      {/* Main Gallery */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-3 text-gray-600">Loading images...</span>
          </div>
        ) : (
          <GalleryGrid 
            images={images || []} 
            onImageClick={handleImageClick}
          />
        )}
      </main>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && images && (
        <LightboxModal
          image={images[lightboxIndex]}
          currentIndex={lightboxIndex}
          totalImages={images.length}
          onClose={handleCloseLightbox}
          onNavigate={handleNavigateLightbox}
        />
      )}
    </div>
  );
}
