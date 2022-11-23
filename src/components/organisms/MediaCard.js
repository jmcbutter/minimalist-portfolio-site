import {
  Box,
  Divider,
  // Image,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";

import SecondaryButton from "../molecules/SecondaryButton";
import Image from "../atoms/Image";
import { useBreakpointValue } from "@chakra-ui/react";

export default function MediaCard({ mediaObject, cardDirection, ...props }) {
  const { content, buttonHref, buttonText, cardImage } = mediaObject;

  return (
    <Box
      {...props}
      display={{ md: "flex" }}
      flexDir={cardDirection === "ltr" ? "row" : "row-reverse"}
      gap="4rem"
    >
      <Image image={cardImage} />
      <Divider mb={8} display={{ md: "none" }} />
      <Flex
        w={{ base: "100%", md: "clamp(8em, 100%, 25em)" }}
        flexDir="column"
        justifyContent={"center"}
        gap={10}
      >
        <Heading as="h2" size="2xl" letterSpacing="tight">
          {mediaObject.title}
        </Heading>
        <Text lineHeight={7}>{content}</Text>
        <SecondaryButton maxW={"202px"} href={buttonHref}>
          {buttonText}
        </SecondaryButton>
      </Flex>
    </Box>
  );
}
