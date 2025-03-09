import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/languageContext";
import { useRef, useState } from "react";

const videos = [
  {
    id: 1,
    titleKey: "videoOne",
    url: "https://www.youtube.com/embed/xPD5a7QcihA?si=gGYH39TcSQiKSzyn",
  },
  {
    id: 2,
    titleKey: "videoTwo",
    url: "https://www.youtube.com/embed/p1tYhrl0tXY",
  },
  {
    id: 3,
    titleKey: "videoThree",
    url: "https://www.youtube.com/embed/oLT6VWS8Q3E?si=DaPvhjyoDgvz-sIK",
  },
];

export default function Portfolio() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      const videoWidth = scrollRef.current.children[0].clientWidth;
      const scrollAmount = direction === "left" ? -videoWidth : videoWidth;
      scrollRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="container mx-auto px-6 max-w-7xl py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto text-center mb-12"
      >
        <div className="inline-block bg-white/90 backdrop-blur-sm p-4 rounded-lg">
          <h1 className="text-4xl font-bold mb-4">{t("portfolio", "title")}</h1>
          <p className="text-muted-foreground">{t("portfolio", "subtitle")}</p>
        </div>
      </motion.div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex space-x-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth pb-8"
        >
          {videos.map((video) => (
            <div key={video.id} className="snap-center shrink-0 w-full flex justify-center">
              <div className="w-full max-w-3xl">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    width="100%"
                    height="500"
                    src={video.url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-xl shadow-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-8 -mt-6">
          <button
            className="bg-white text-gray-800 p-4 rounded-full shadow-lg"
            onClick={() => scroll("left")}
          >
            ←
          </button>
          <button
            className="bg-white text-gray-800 p-4 rounded-full shadow-lg"
            onClick={() => scroll("right")}
          >
            →
          </button>
        </div>
      </div>

      {/* Extra CSS to permanently hide scrollbar */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none !important;
        }
        .scrollbar-hide {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}</style>
    </div>
  );
}