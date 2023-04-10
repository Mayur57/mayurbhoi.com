import {
  Box,
  Button,
  Container,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiLogOut } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/react";
import Layout from "../components/layouts/Article";
import Title from "../components/Title";

const Messages = [
  {
    author: "jdnaks",
    sign: "ajndcijjnrf jdfsnvjnfd jndiuvcn jnaodnc",
  },
  {
    author: "jdnaks",
    sign: "ajndcijjnrf jdfsnvjnfd jndiuvcn jnaodnc",
  },
  {
    author: "jdnaks",
    sign: "ajndcijjnrf jdfsnvjnfd jndiuvcn jnaodnc",
  },
  {
    author: "jdnaks",
    sign: "ajndcijjnrf jdfsnvjnfd jndiuvcn jnaodnc",
  },
  {
    author: "jdnaks",
    sign: "ajndcijjnrf jdfsnvjnfd jndiuvcn jnaodnc",
  },
  {
    author: "jdnaks",
    sign: "ajndcijjnrf jdfsnvjnfd jndiuvcn jnaodnc",
  },
  {
    author: "jdnaks",
    sign: "ajndcijjnrf jdfsnvjnfd jndiuvcn jnaodnc",
  },
  {
    author: "jdnaks",
    sign: "ajndcijjnrf jdfsnvjnfd jndiuvcn jnaodnc",
  },
];

const LoginWidget = () => (
  <motion.div initial={{ opacity: 0, y: 2 }} animate={{ opacity: 1, y: 0 }}>
    <Button
      onClick={signIn}
      border={`1px solid ${useColorModeValue("#12121230", "#eaeaea30")}`}
      fontSize={12}
      fontWeight={400}
      gap="1em"
      mt="2em"
    >
      <FiGithub /> Login with GitHub
    </Button>
  </motion.div>
);

const SigningFlow = () => (
  <motion.div
    initial={{ opacity: 0, y: 2 }}
    animate={{ opacity: 1, y: 0 }}
    style={{
      marginTop: "2em",
      marginBottom: "2em",
    }}
  >
    <Input fontSize={14} placeholder="Your message here" />
    <Box mt="8px">
      <Button
        variant="outline"
        onClick={signOut}
        border={`1px solid ${useColorModeValue("#12121230", "#eaeaea30")}`}
        fontSize={12}
        fontWeight={400}
        gap="1em"
        mr="8px"
      >
        Logout <FiLogOut />
      </Button>
      <Button
        variant="solid"
        onClick={() => {}}
        fontSize={12}
        fontWeight={400}
        gap="1em"
        color={useColorModeValue("#fefefe", "#1a1a1a")}
        bg={useColorModeValue("#333", "#fefefe")}
      >
        Sign <FiArrowRight />
      </Button>
    </Box>
  </motion.div>
);

const Sign = () => {
  const { data: session } = useSession();
  return (
    <Layout title="Sign">
      <Container maxW="container.sm">
        <Title mt="1.25em" mb={2}>
          Sign
        </Title>
        <Text fontSize={12} opacity={0.6} mt={-1}>
          Sign with your words. Leave your mark.
        </Text>
        {session?.user ? <SigningFlow /> : <LoginWidget />}
        {session?.user && <p>Signed in as {session?.user?.name}</p>}
        <Button
          onClick={async () => {
            fetch("/api/sign", {
              body: JSON.stringify({
                email: "djncsc@cjkdnsc.com",
                name: "djncsc jkcjkdnsc",
                sign: "djncsc@cjkdnsc.com",
              }),
              headers: {
                "Content-Type": "application/json",
              },
              method: "POST",
            }).then((resp) => console.log("Done", resp.status));
          }}
        >
          isbadicjuads
        </Button>
        {Messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 2 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (index * 50) / 1000 }}
          >
            <Text fontSize={14} fontWeight={450} mt={4}>
              {message.author}:{" "}
              <span style={{ opacity: 0.7, fontWeight: 400 }}>
                {message.sign}
              </span>
            </Text>
          </motion.div>
        ))}
      </Container>
    </Layout>
  );
};
export default Sign;
