import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertImageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all images
  app.get("/api/images", async (req, res) => {
    try {
      const images = await storage.getAllImages();
      res.json(images);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch images" });
    }
  });

  // Get images by category
  app.get("/api/images/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const images = await storage.getImagesByCategory(category);
      res.json(images);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch images by category" });
    }
  });

  // Get single image
  app.get("/api/images/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const image = await storage.getImage(id);
      if (!image) {
        return res.status(404).json({ message: "Image not found" });
      }
      res.json(image);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch image" });
    }
  });

  // Create new image
  app.post("/api/images", async (req, res) => {
    try {
      const result = insertImageSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid image data", errors: result.error.errors });
      }
      
      const image = await storage.createImage(result.data);
      res.status(201).json(image);
    } catch (error) {
      res.status(500).json({ message: "Failed to create image" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
