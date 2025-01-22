import { motion } from "framer-motion";
import { useState } from "react";
import { Lightbox } from "@/components/ui/lightbox";

const portfolio = [
  {
    id: 1,
    title: "Modern Office Complex",
    description: "A virtual tour of a contemporary office building in downtown.",
    image: "https://images.unsplash.com/photo-1534527489986-3e3394ca569c",
    category: "Commercial",
  },
  {
    id: 2,
    title: "Luxury Residence",
    description: "Interactive tour of a high-end residential property.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    category: "Residential",
  },
  // Add more portfolio items...
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-6 max-w-7xl py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
        <p className="text-muted-foreground">
          Explore our collection of virtual tours and architectural visualizations.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
            onClick={() => setSelectedImage(item.image)}
          >
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-medium mb-2">{item.title}</h3>
            <p className="text-muted-foreground">{item.description}</p>
            <span className="inline-block mt-2 text-sm bg-muted px-3 py-1 rounded-full">
              {item.category}
            </span>
          </motion.div>
        ))}
      </div>

      {selectedImage && (
        <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
}