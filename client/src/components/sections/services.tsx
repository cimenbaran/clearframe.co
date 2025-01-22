import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Building2, Box, Building } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/languageContext";

export function Services() {
  const { t } = useLanguage();

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
    <section className="py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-block bg-white/90 backdrop-blur-sm p-4 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">{t("services", "title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("services", "subtitle")}
            </p>
          </div>
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