import { useQuery } from "@tanstack/react-query";
import type { Image } from "@shared/schema";

export function useGallery(category: string = "all") {
  const { data: images, isLoading, error } = useQuery<Image[]>({
    queryKey: ["/api/images", category],
    queryFn: async () => {
      const url = category === "all" 
        ? "/api/images" 
        : `/api/images/category/${category}`;
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }
      return response.json();
    },
  });

  return {
    images,
    isLoading,
    error,
  };
}
