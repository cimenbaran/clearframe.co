import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";

export function Hero() {
  return (
    <>
      {/* Fixed background image */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600607687920-4e2a09cf159d")',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Content overlay */}
      <div className="relative min-h-[80vh] flex items-center">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-block bg-white/90 backdrop-blur-sm p-4 rounded-lg mb-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Experience Spaces Like Never Before
              </h1>
              <p className="text-xl text-muted-foreground mt-4">
                We create immersive virtual tours that bring architectural spaces to life.
                Perfect for real estate showcases and architectural presentations.
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="/portfolio">
                <Button size="lg">View Portfolio</Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}