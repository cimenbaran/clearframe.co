import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbox } from "@/components/ui/lightbox";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n/languageContext";

const projects = [
  {
    id: 1,
    title: "Modern Office Complex",
    image: "https://images.unsplash.com/photo-1534527489986-3e3394ca569c",
    category: "commercial",
  },
  {
    id: 2,
    title: "Luxury Penthouse",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    category: "residential",
  },
  {
    id: 3,
    title: "Glass Tower",
    image: "https://images.unsplash.com/photo-1518436127045-3367819540bf",
    category: "commercial",
  },
  {
    id: 4,
    title: "Modern Villa",
    image: "https://images.unsplash.com/photo-1507149833265-60c372daea22",
    category: "residential",
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useLanguage();

  return (
    <section className="py-16" ref={ref}>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block bg-white/90 backdrop-blur-sm p-4 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">{t("gallery", "title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("gallery", "subtitle")}
            </p>
          </div>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
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
                  <p className="text-sm text-muted-foreground">
                    {project.category === 'commercial' 
                      ? t("gallery", "category.commercial")
                      : t("gallery", "category.residential")
                    }
                  </p>
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