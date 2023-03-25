import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      let timer = null;
      if (timer !== null) clearTimeout(timer);
      setIsVisible(true);
      timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Box
      opacity={isVisible ? 1 : 0}
      zIndex={100}
      position="fixed"
      right="4"
      bottom="4"
      fontSize="3xl"
      cursor="pointer"
      _hover={{ transform: "translateY(-2px)" }}
      transition="all 0.3s ease-in-out"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      filter={isVisible ? "drop-shadow(0 0 1rem #444)" : ""}
    >
      ☝🏼
    </Box>
  );
}
