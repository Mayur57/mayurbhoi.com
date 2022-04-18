import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => shouldForwardProp(prop) || prop === "transition",
});

const Section = ({ children, delay = 0, mb = 6 }) => (
  <StyledDiv
    initial={{ y: 5, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.25, delay }}
    transitionTimingFunction="cubic-bezier(.4,0,.2,1)"
    exit={{ y: 0 }}
    mb={mb}
  >
    {children}
  </StyledDiv>
);

export default Section;
