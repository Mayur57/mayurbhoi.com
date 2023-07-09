/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import BadWords from "bad-words";
import { toast } from "sonner";

export default function Form(props) {
  const router = useRouter();
  const { session, signOut } = props;
  const bw = new BadWords();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isFetching || isPending;
  const [value, setValue] = useState("");
  const MESSAGE_LENGTH_LIMIT = 140;

  function getSubtextColor() {
    return value.length > MESSAGE_LENGTH_LIMIT
      ? useColorModeValue("red.500", "red.300")
      : useColorModeValue("#0005", "#DDD5");
  }

  async function onSubmit(e) {
    e.preventDefault();
    setIsFetching(true);

    const form = e.currentTarget;
    const input = form.elements.namedItem("entry");
    const sign = input.value;

    if (bw.isProfane(sign)) {
      toast.error("Error", {
        description: "Please stick to using civil language",
      });
      setIsFetching(false);
      return;
    }

    if (sign.length > MESSAGE_LENGTH_LIMIT) {
      toast.error("Error", {
        description: "Please write a shorter message",
      });
      setIsFetching(false);
      return;
    }

    const res = await fetch("/api/sign", {
      body: JSON.stringify({
        name: session?.user?.name,
        email: session?.user?.email,
        sign: input.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    input.value = "";
    // eslint-disable-next-line no-unused-vars
    const { error } = await res.json();

    setIsFetching(false);
    startTransition(() => {
      router.refresh();
    });
  }

  return (
    <>
      <form
        style={{
          fontSize: "14px",
          position: "relative",
          marginTop: "1.5em",
          opacity: !isMutating ? 1 : 0.7,
        }}
        onSubmit={onSubmit}
      >
        <input
          style={{
            display: "flex",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            paddingLeft: "1rem",
            paddingRight: "8rem",
            marginTop: "0.25rem",
            backgroundColor: useColorModeValue("#F3F4F6"),
            width: "100%",
            borderRadius: "0.375rem",
          }}
          aria-label="Your message"
          placeholder="Your message..."
          disabled={isPending}
          name="entry"
          type="text"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          style={{
            display: "flex",
            position: "absolute",
            top: "0.25rem",
            right: "0.25rem",
            paddingTop: "0.25rem",
            paddingBottom: "0.25rem",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            fontWeight: "500",
            justifyContent: "center",
            alignItems: "center",
            width: "4rem",
            borderRadius: "0.25rem",
          }}
          disabled={isMutating}
          type="submit"
        >
          Sign
        </button>
      </form>
      {session?.user && (
        <Box
          fontSize={12}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={1}
        >
          <Box display="inline-flex">
            {" "}
            <Text
              color={useColorModeValue("#0007", "#FFF7")}
              pointerEvents="none"
              userSelect="none"
            >
              Signed in as{" "}
              <span style={{ color: useColorModeValue("#000", "#DDD") }}>
                {session?.user?.name}
              </span>
            </Text>
            <Text
              ml={2}
              textDecor="underline"
              onClick={() => signOut()}
              cursor="pointer"
              color={useColorModeValue("red.500", "red.300")}
            >
              Log out
            </Text>
          </Box>
          <Text fontSize={10} mr={1} color={getSubtextColor()} pointerEvents='none'>
            {`${value.length}/${MESSAGE_LENGTH_LIMIT}`}
          </Text>
        </Box>
      )}
    </>
  );
}
