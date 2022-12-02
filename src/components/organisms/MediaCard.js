import { Box, Divider, Flex } from "@chakra-ui/react";

import SecondaryButton from "../molecules/SecondaryButton";
import Image from "../atoms/Image";
import { H2, P1 } from "../atoms";
import LinkButton from "../molecules/LinkButton";

export default function MediaCard({ mediaObject, cardDirection, ...props }) {
  const { content, buttonHref, buttonText, cardImage } = mediaObject;

  return (
    <Box
      {...props}
      display={{ md: "flex" }}
      flexDir={cardDirection === "ltr" ? "row" : "row-reverse"}
      gap="4rem"
    >
      <Image
        image={cardImage}
        mb={{ base: 12, md: 0 }}
        flex="1 1 auto"
        maxW={{ md: "50%" }}
      />
      <Flex w={{ base: "100%", md: "clamp(8em, 100%, 25em)" }} flexDir="column">
        <Divider borderColor="black" opacity="0.15" />
        <Flex
          flexDir="column"
          justifyContent={"center"}
          gap={10}
          flex="1"
          my={12}
        >
          <H2>{mediaObject.title}</H2>
          <P1>{content}</P1>
          <LinkButton
            to={buttonHref}
            button={
              <SecondaryButton maxW={"202px"}>{buttonText}</SecondaryButton>
            }
          />
        </Flex>
        <Divider borderColor="black" opacity="0.15" />
      </Flex>
    </Box>
  );
}
