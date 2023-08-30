import { Box, useColorModeValue } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export function ScrollToTop() {
  return (
    <Box
      display={{ base: "block", sm: "none" }}
      cursor="pointer"
      px={2}
      onClick={scrollToTop}
    >
      <FiArrowUp />
    </Box>
  );
}

export function ScrollToTopEmoji() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) setIsVisible(true);
    else setIsVisible(false);
  };

  const blur = useColorModeValue("#281D1A", "#EDEDED");

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Box
      display={{ sm: "block", base: "none" }}
      opacity={isVisible ? 1 : 0}
      visibility={isVisible ? "visible" : "hidden"}
      textShadow={isVisible ? "none" : `0 0 40px ${blur} `}
      blur="3xl"
      zIndex={100}
      position="fixed"
      right="4"
      bottom="4"
      fontSize="2xl"
      cursor="pointer"
      _hover={{ transform: "translateY(-2px)" }}
      transition="all 0.3s ease-in-out"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      filter="auto"
    >
      ☝🏼
    </Box>
  );
}
