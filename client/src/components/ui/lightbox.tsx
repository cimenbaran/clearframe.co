import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface LightboxProps {
  image: string;
  onClose: () => void;
}

export function Lightbox({ image, onClose }: LightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        onClick={onClose}
      >
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-300"
          onClick={onClose}
        >
          <X className="h-8 w-8" />
        </button>
        <motion.img
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          src={image}
          alt="Lightbox image"
          className="max-w-[90vw] max-h-[90vh] object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </motion.div>
    </AnimatePresence>
  );
}
