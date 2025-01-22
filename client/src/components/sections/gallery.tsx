import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbox } from "@/components/ui/lightbox";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "Modern Office Complex",
    image: "https://images.unsplash.com/photo-1534527489986-3e3394ca569c",
    category: "Architecture",
  },
  {
    id: 2,
    title: "Luxury Penthouse",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    category: "Real Estate",
  },
  {
    id: 3,
    title: "Glass Tower",
    image: "https://images.unsplash.com/photo-1518436127045-3367819540bf",
    category: "Architecture",
  },
  {
    id: 4,
    title: "Modern Villa",
    image: "https://images.unsplash.com/photo-1507149833265-60c372daea22",
    category: "Real Estate",
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-block bg-white/90 backdrop-blur-sm p-4 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of virtual tours and architectural visualizations.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="cursor-pointer group" onClick={() => setSelectedImage(project.image)}>
                <CardContent className="p-0 overflow-hidden rounded-t-lg">
                  <AspectRatio ratio={4/3}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                    />
                  </AspectRatio>
                </CardContent>
                <CardHeader>
                  <h3 className="font-medium">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.category}</p>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </section>
  );
}