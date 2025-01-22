import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Experience Spaces Like Never Before
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            We create immersive virtual tours that bring architectural spaces to life.
            Perfect for real estate showcases and architectural presentations.
          </p>
          <div className="flex gap-4">
            <Button size="lg">View Portfolio</Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}