import type { Express } from "express";
import { createServer, type Server } from "http";

export function registerRoutes(app: Express): Server {
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate input
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }

      // Here you would typically send an email or store the contact form submission
      // For now, we'll just return a success response
      
      res.status(200).json({ message: "Message received successfully" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ message: "Failed to process contact form" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
