import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Building2, Box, Building } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/i18n/languageContext";
import { useRef } from "react";

export function Services() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      title: t("services", "virtualTours"),
      description: t("services", "virtualToursDesc"),
      icon: Camera,
    },
    {
      title: t("services", "modeling"),
      description: t("services", "modelingDesc"),
      icon: Box,
    },
    {
      title: t("services", "realEstate"),
      description: t("services", "realEstateDesc"),
      icon: Building,
    },
    {
      title: t("services", "architecture"),
      description: t("services", "architectureDesc"),
      icon: Building2,
    },
  ];

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
            <h2 className="text-3xl font-bold mb-4">{t("services", "title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("services", "subtitle")}
            </p>
          </div>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
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