/* eslint-disable react/jsx-props-no-spreading */
import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => shouldForwardProp(prop) || prop === "transition",
});

const Section = ({ children, delay = 0, mb = 6, y = 10, ...props }) => (
  <StyledDiv
    initial={{ y, opacity: 0, scale: 0.99, rotate: "0.25deg" }}
    animate={{ y: 0, opacity: 1, scale: 1, rotate: "0deg" }}
    transition={{ duration: 0.25, delay }}
    transitionTimingFunction="cubic-bezier(.4,0,.2,1)"
    transformOrigin="0 0"
    exit={{ y: 0 }}
    mb={mb}
    {...props}
  >
    {children}
  </StyledDiv>
);

export default Section;
