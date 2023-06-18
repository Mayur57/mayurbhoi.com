/* eslint-disable no-shadow */
import { Box, Container, Text } from "@chakra-ui/react";
import { FiCommand } from "react-icons/fi";
import { motion } from "framer-motion";
import Prop from "../components/index/Prop";
import AboutButton from "../components/index/AboutButton";
import Prologue from "../components/index/Prologue";
import Header from "../components/index/Header";

const Grads = () => (
  <>
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1.1 }}
      transition={{ duration: 0.75 }}
      style={{
        position: "absolute",
        top: "-450px",
        right: "25%",
        width: "800px",
        height: "50px",
        filter: "blur(64px)",
        opacity: "0.6",
        zIndex: "-1",
      }}
    >
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#54d6ff33"
          d="M24.2,-30.1C36.1,-18.9,53.7,-15.7,58.4,-7.5C63.1,0.6,55,13.9,44.7,20.2C34.3,26.6,21.8,26.1,8.5,36.6C-4.8,47.2,-18.9,68.9,-28.6,69.4C-38.3,69.8,-43.7,49.1,-48,32.2C-52.4,15.4,-55.8,2.5,-53.2,-9C-50.7,-20.4,-42.3,-30.4,-32.4,-41.9C-22.6,-53.5,-11.3,-66.6,-2.6,-63.5C6.2,-60.5,12.3,-41.2,24.2,-30.1Z"
          transform="translate(100 100)"
        />
      </svg>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.125, duration: 0.75 }}
      style={{
        position: "absolute",
        top: "-450px",
        right: "15%",
        width: "800px",
        height: "50px",
        filter: "blur(64px)",
        opacity: "0.6",
        zIndex: "-1",
      }}
    >
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#0071ff33"
          d="M42.7,-48.4C57,-38.9,71.4,-27,71.9,-14.1C72.5,-1.2,59.3,12.7,48.8,25.5C38.2,38.4,30.4,50.1,20.9,50.5C11.5,50.9,0.5,39.9,-7,31.8C-14.5,23.6,-18.5,18.3,-31,10.9C-43.6,3.6,-64.7,-5.8,-64.7,-12.4C-64.7,-18.9,-43.5,-22.7,-29.1,-32.2C-14.8,-41.7,-7.4,-57,3.4,-61C14.2,-65.1,28.4,-58,42.7,-48.4Z"
          transform="translate(100 100)"
        />
      </svg>
    </motion.div>
  </>
);

const HomePage = () => (
  <Container maxW="540px" overflow="hidden" pt="10vh">
    <Grads />
    <Prop />
    <Header />
    <Prologue />
    <AboutButton />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      transition={{ delay: 0.5 }}
    >
      <Box
        opacity={0.7}
        display={{ base: "none", sm: "flex" }}
        width="100%"
        alignItems="center"
        justifyContent="center"
        mt={6}
        mb={12}
      >
        <FiCommand size={10} />
        <Text fontSize={12} ml={2}>
          Press CMD+K to get started
        </Text>
      </Box>
    </motion.div>
  </Container>
);

export default HomePage;
