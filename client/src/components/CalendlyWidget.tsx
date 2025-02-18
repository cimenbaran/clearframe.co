import { useEffect } from "react";

const CalendlyWidget = () => {
  useEffect(() => {
    // Load Calendly script dynamically
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize the Calendly badge widget
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

  return null; // This component does not render anything visible
};

export default CalendlyWidget;
