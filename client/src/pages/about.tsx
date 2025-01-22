import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/languageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-6 max-w-7xl py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6 text-center">{t("about", "title")}</h1>
        <p className="text-xl text-muted-foreground mb-8 text-center">
          {t("about", "subtitle")}
        </p>

        <div className="space-y-12">
          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-4">{t("about", "mission.title")}</h2>
            <p className="text-muted-foreground">
              {t("about", "mission.text")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-center">{t("about", "expertise.title")}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <h3 className="font-medium mb-2">{t("about", "expertise.virtualTour.title")}</h3>
                <p className="text-muted-foreground">
                  {t("about", "expertise.virtualTour.text")}
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-medium mb-2">{t("about", "expertise.visualization.title")}</h3>
                <p className="text-muted-foreground">
                  {t("about", "expertise.visualization.text")}
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-center">{t("about", "values.title")}</h2>
            <div className="max-w-2xl mx-auto">
              <ul className="space-y-4">
                <li className="text-center">
                  <span className="font-medium block mb-2">{t("about", "values.innovation.title")}</span>
                  <span className="text-muted-foreground">
                    {t("about", "values.innovation.text")}
                  </span>
                </li>
                <li className="text-center">
                  <span className="font-medium block mb-2">{t("about", "values.quality.title")}</span>
                  <span className="text-muted-foreground">
                    {t("about", "values.quality.text")}
                  </span>
                </li>
                <li className="text-center">
                  <span className="font-medium block mb-2">{t("about", "values.collaboration.title")}</span>
                  <span className="text-muted-foreground">
                    {t("about", "values.collaboration.text")}
                  </span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}