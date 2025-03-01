import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/languageContext";

const videos = [
  {
    id: 1,
    titleKey: "videoOne",
    url: "https://www.youtube.com/embed/xPD5a7QcihA?si=gGYH39TcSQiKSzyn", // Virtual Tour
  },
  {
    id: 2,
    titleKey: "videoTwo",
    url: "hhttps://www.youtube.com/embed/p1tYhrl0tXY", // Replace with actual video URL
  },
  {
    id: 3,
    titleKey: "videoThree",
    url: "https://www.youtube.com/embed/oLT6VWS8Q3E?si=DaPvhjyoDgvz-sIK", // AR
  },
];

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-6 max-w-7xl py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">{t("portfolio", "title")}</h1>
        <p className="text-muted-foreground">
          {t("portfolio", "subtitle")}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <h3 className="text-xl font-medium mb-4">
              {t("portfolio", "videos", `${video.titleKey}.title`)}
            </h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="100%"
                height="315"
                src={video.url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
