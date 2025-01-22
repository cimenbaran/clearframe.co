import { useState, useEffect, useCallback } from "react";
import { motion, useMotionValue } from "framer-motion";

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function ComparisonSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: ComparisonSliderProps) {
  const [sliderWidth, setSliderWidth] = useState(0);
  const x = useMotionValue(0);

  const handleResize = useCallback(() => {
    const slider = document.querySelector(".comparison-slider");
    if (slider) {
      setSliderWidth(slider.clientWidth);
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg comparison-slider select-none">
      {/* After Image (Base layer) */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={afterImage}
          alt="After"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Sliding layer) */}
      <motion.div
        className="absolute top-0 left-0 bottom-0 overflow-hidden pointer-events-none"
        style={{ width: x }}
        drag="x"
        dragElastic={0}
        dragMomentum={false}
        dragConstraints={{ left: 0, right: sliderWidth }}
      >
        <div className="relative h-full" style={{ width: sliderWidth }}>
          <img
            src={beforeImage}
            alt="Before"
            className="absolute top-0 left-0 h-full w-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
            {beforeLabel}
          </div>
        </div>
      </motion.div>

      {/* Slider Handle */}
      <motion.div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize pointer-events-auto"
        style={{ x }}
        drag="x"
        dragElastic={0}
        dragMomentum={false}
        dragConstraints={{ left: 0, right: sliderWidth }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-600"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}