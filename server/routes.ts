import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email(),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Newsletter subscription endpoint
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const { email } = newsletterSchema.parse(req.body);
      
      // TODO: Integrate with email service (e.g., Mailchimp, ConvertKit)
      console.log(`Newsletter subscription: ${email}`);
      
      res.json({ 
        success: true, 
        message: "Successfully subscribed to newsletter" 
      });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        message: "Invalid email address" 
      });
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactSchema = z.object({
        name: z.string().min(1),
        email: z.string().email(),
        message: z.string().min(1),
      });

      const { name, email, message } = contactSchema.parse(req.body);
      
      // TODO: Send email notification or store in database
      console.log(`Contact form submission: ${name} (${email}): ${message}`);
      
      res.json({ 
        success: true, 
        message: "Message sent successfully" 
      });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        message: "Please fill in all required fields" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
