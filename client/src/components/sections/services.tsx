import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Building2, Box, Building } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Virtual Tours",
    description: "Immersive 360° virtual tours with interactive hotspots and guided navigation.",
    icon: Camera,
  },
  {
    title: "3D Modeling",
    description: "Detailed 3D models of buildings and spaces with photorealistic rendering.",
    icon: Box,
  },
  {
    title: "Real Estate Showcase",
    description: "Engaging virtual property tours for real estate marketing and sales.",
    icon: Building,
  },
  {
    title: "Architecture Visualization",
    description: "Professional visualization services for architectural projects and presentations.",
    icon: Building2,
  },
];

export function Services() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive virtual tour solutions for real estate and architecture professionals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <service.icon className="h-10 w-10 mb-4 text-primary" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}