import { motion } from "framer-motion";
import { useState } from "react";
import { Lightbox } from "@/components/ui/lightbox";
import { ComparisonSlider } from "@/components/ui/comparison-slider";

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
];

const comparisons = [
  {
    id: 1,
    title: "Living Room Transformation",
    beforeImage: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d",
    afterImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    beforeLabel: "Empty Space",
    afterLabel: "Furnished",
  },
  {
    id: 2,
    title: "Kitchen Renovation",
    beforeImage: "https://images.unsplash.com/photo-1556911220-bff31c812dba",
    afterImage: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d",
    beforeLabel: "Before Renovation",
    afterLabel: "After Renovation",
  },
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-24"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          Before & After Comparisons
        </h2>
        <div className="space-y-16">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={comparison.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-medium text-center mb-6">
                {comparison.title}
              </h3>
              <ComparisonSlider
                beforeImage={comparison.beforeImage}
                afterImage={comparison.afterImage}
                beforeLabel={comparison.beforeLabel}
                afterLabel={comparison.afterLabel}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {selectedImage && (
        <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
}