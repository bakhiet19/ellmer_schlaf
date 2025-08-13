import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="animate-bounce fixed bottom-6 right-6 z-50 logoBG logoTextWhite   py-2 px-4 rounded-full shadow-lg hover:bg-gray-600 transition-opacity duration-300 cursor-pointer"
        title="Zurück nach oben"
      >
        ↑
      </button>
    )
  );
}