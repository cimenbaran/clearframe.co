import { useEffect } from "react";

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
      }) => void;
    };
  }
}

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/clearframe-info/initial-meeting",
          text: "Schedule time with me",
          color: "#0069ff",
          textColor: "#ffffff",
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default CalendlyWidget;
