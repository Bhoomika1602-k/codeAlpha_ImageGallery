import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Image } from "@shared/schema";

interface GalleryFiltersProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  images: Image[];
}

const categories = [
  { id: 'all', label: 'All Photos' },
  { id: 'nature', label: 'Nature' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'abstract', label: 'Abstract' },
  { id: 'portrait', label: 'Portraits' },
];

export default function GalleryFilters({ activeCategory, onCategoryChange, images }: GalleryFiltersProps) {
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === 'all') return images.length;
    return images.filter(img => img.category === categoryId).length;
  };

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex space-x-8 overflow-x-auto py-4">
          {categories.map((category) => {
            const count = getCategoryCount(category.id);
            const isActive = activeCategory === category.id;
            
            return (
              <Button
                key={category.id}
                variant="ghost"
                onClick={() => onCategoryChange(category.id)}
                className={`whitespace-nowrap px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'text-blue-600 bg-blue-50 font-semibold' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {category.label}
                {count > 0 && (
                  <Badge variant="secondary" className="ml-1 text-xs">
                    {count}
                  </Badge>
                )}
              </Button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
