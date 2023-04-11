/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";
import Layout from "../components/layouts/Article";
import Title from "../components/Title";
import Form from "../components/SignForm";

async function getSigns() {
  const res = await fetch("/api/sign");
  const data = await res.json();
  return data;
}

const LoginWidget = () => (
  <motion.div initial={{ opacity: 0, y: 2 }} animate={{ opacity: 1, y: 0 }}>
    <Button
      onClick={() => signIn()}
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

const Guidelines = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Guidelines</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text fontSize={14} mb={2}>
          1. Refrain from posting profanity and abusive content. This is an
          actively moderated space.
        </Text>
        <Text fontSize={14} my={2}>
          2. Do not post your or anyone else&apos;s personal/identifiable
          information.
        </Text>
        <Text fontSize={14} my={2}>
          3. Do not post spam.
        </Text>

        <Text fontSize={14} mt={8} mb={6}>
          This space is actively monitored and any content that violates the
          above guidelines will be removed.
        </Text>
      </ModalBody>
    </ModalContent>
  </Modal>
);

export default function Sign() {
  const [entries, setEntries] = useState([]);
  const { data: session } = useSession();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    async function fetchEntries() {
      try {
        const data = await getSigns();
        setEntries(data);
      } catch (error) {
        // console.error(error);
      }
    }
    fetchEntries();
  }, []);

  return (
    <>
      <NextSeo
        title="Sign - Mayur Bhoi"
        description="Full stack developer, writer, creator."
        canonical="https://mayurbhoi.com/"
        openGraph={{
          url: "https://mayurbhoi.com/",
          title: "Sign - Mayur Bhoi",
          description: "Full stack developer, writer, creator.",
          images: [
            {
              url: "https://i.ibb.co/MC7Z6yw/800x600.png",
              width: 800,
              height: 600,
              alt: "Sign - Mayur Bhoi",
              type: "image/png",
            },
            {
              url: "https://i.ibb.co/6PzDGhj/800x900.png",
              width: 800,
              height: 900,
              alt: "Sign - Mayur Bhoi",
              type: "image/png",
            },
            {
              url: "https://i.ibb.co/b2LXZDX/800x418.png",
              width: 800,
              height: 418,
              alt: "Sign - Mayur Bhoi",
              type: "image/png",
            },
          ],
          siteName: "Sign",
        }}
        twitter={{
          handle: "@mayurbhoii",
          site: "@mayurbhoii",
          cardType: "summary_large_image",
        }}
      />
      <Layout title="Sign">
        <Container maxW="container.sm">
          <Title mt="1.25em" mb={2}>
            Sign
          </Title>
          <Text fontSize={12} opacity={0.6} mt={-1} display="inline-flex">
            Sign with your words. Leave your mark.
            <>
              <Text
                fontSize={12}
                color={useColorModeValue("#000", "#DDD")}
                textDecor="underline"
                onClick={onOpen}
                ml={1}
              >
                Guidelines
              </Text>
              <Guidelines isOpen={isOpen} onClose={onClose} />
            </>
          </Text>
          {session?.user ? (
            <Form session={session} signOut={signOut} />
          ) : (
            <LoginWidget />
          )}
          {entries?.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 2 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index * 50) / 1000 }}
            >
              <Text fontSize={14} fontWeight={450} mt={4}>
                {message.name}:{" "}
                <span style={{ opacity: 0.7, fontWeight: 400 }}>
                  {message.sign}
                </span>
              </Text>
            </motion.div>
          ))}
        </Container>
      </Layout>
    </>
  );
}
