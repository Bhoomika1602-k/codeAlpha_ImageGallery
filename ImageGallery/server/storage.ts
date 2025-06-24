import { users, images, type User, type InsertUser, type Image, type InsertImage } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getAllImages(): Promise<Image[]>;
  getImagesByCategory(category: string): Promise<Image[]>;
  getImage(id: number): Promise<Image | undefined>;
  createImage(image: InsertImage): Promise<Image>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private images: Map<number, Image>;
  private currentUserId: number;
  private currentImageId: number;

  constructor() {
    this.users = new Map();
    this.images = new Map();
    this.currentUserId = 1;
    this.currentImageId = 1;
    this.seedImages();
  }

  private seedImages() {
    const seedData: InsertImage[] = [
      // Nature photos (8)
      { title: 'Mountain Lake Reflection', description: 'Serene mountain lake with perfect reflections', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600', category: 'nature', height: 'h-64' },
      { title: 'Forest Pathway', description: 'Sunlit path through ancient forest', src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500', category: 'nature', height: 'h-48' },
      { title: 'Ocean Waves', description: 'Powerful waves crashing against rocks', src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=700', category: 'nature', height: 'h-72' },
      { title: 'Desert Sunset', description: 'Golden hour in the desert landscape', src: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600', category: 'nature', height: 'h-60' },
      { title: 'Autumn Leaves', description: 'Vibrant fall colors in the forest', src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=550', category: 'nature', height: 'h-56' },
      { title: 'Snowy Mountains', description: 'Majestic snow-capped mountain peaks', src: 'https://images.unsplash.com/photo-1486753774519-0d39de54b8aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=650', category: 'nature', height: 'h-68' },
      { title: 'Wildflower Meadow', description: 'Colorful wildflowers in summer meadow', src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500', category: 'nature', height: 'h-52' },
      { title: 'Northern Lights', description: 'Aurora borealis dancing in the night sky', src: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600', category: 'nature', height: 'h-64' },

      // Architecture photos (6)
      { title: 'Modern Skyscraper', description: 'Glass and steel reaching for the sky', src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=700', category: 'architecture', height: 'h-72' },
      { title: 'Gothic Cathedral', description: 'Medieval stone architecture with intricate details', src: 'https://images.unsplash.com/photo-1520637836862-4d197d17c50a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600', category: 'architecture', height: 'h-64' },
      { title: 'Minimalist Bridge', description: 'Clean lines spanning across water', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500', category: 'architecture', height: 'h-48' },
      { title: 'Art Deco Building', description: 'Vintage architectural elegance', src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=650', category: 'architecture', height: 'h-68' },
      { title: 'Spiral Staircase', description: 'Geometric beauty in architectural form', src: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800', category: 'architecture', height: 'h-80' },
      { title: 'Glass Facade', description: 'Reflective modern building exterior', src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=550', category: 'architecture', height: 'h-56' },

      // Abstract art (4)
      { title: 'Color Explosion', description: 'Vibrant abstract color composition', src: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600', category: 'abstract', height: 'h-64' },
      { title: 'Geometric Patterns', description: 'Mathematical beauty in visual form', src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800', category: 'abstract', height: 'h-80' },
      { title: 'Fluid Motion', description: 'Dynamic movement captured in time', src: 'https://images.unsplash.com/photo-1561212024-cb9ad0c33195?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500', category: 'abstract', height: 'h-48' },
      { title: 'Light Play', description: 'Interplay of light and shadow', src: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=650', category: 'abstract', height: 'h-68' },

      // Portrait photography (6)
      { title: 'Street Portrait', description: 'Candid moment in urban setting', src: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=700', category: 'portrait', height: 'h-72' },
      { title: 'Fashion Portrait', description: 'Elegant studio fashion photography', src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600', category: 'portrait', height: 'h-64' },
      { title: 'Character Study', description: 'Expressive character portrait', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=550', category: 'portrait', height: 'h-56' },
      { title: 'Natural Light', description: 'Soft natural lighting portrait', src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=650', category: 'portrait', height: 'h-68' },
      { title: 'Black & White', description: 'Classic monochrome portrait', src: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500', category: 'portrait', height: 'h-48' },
      { title: 'Environmental Portrait', description: 'Subject in their natural environment', src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600', category: 'portrait', height: 'h-64' }
    ];

    seedData.forEach(imageData => {
      const id = this.currentImageId++;
      const image: Image = { ...imageData, id };
      this.images.set(id, image);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllImages(): Promise<Image[]> {
    return Array.from(this.images.values());
  }

  async getImagesByCategory(category: string): Promise<Image[]> {
    if (category === 'all') {
      return this.getAllImages();
    }
    return Array.from(this.images.values()).filter(
      (image) => image.category === category,
    );
  }

  async getImage(id: number): Promise<Image | undefined> {
    return this.images.get(id);
  }

  async createImage(insertImage: InsertImage): Promise<Image> {
    const id = this.currentImageId++;
    const image: Image = { ...insertImage, id };
    this.images.set(id, image);
    return image;
  }
}

export const storage = new MemStorage();
