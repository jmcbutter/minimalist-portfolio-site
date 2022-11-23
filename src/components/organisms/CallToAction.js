import { Flex } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import SecondaryButton from "../molecules/SecondaryButton";
import { H2 } from "../atoms/Headings";

export default function CallToAction(props) {
  return (
    <Flex
      {...props}
      direction={{ base: "column", sm: "row" }}
      justify={"space-between"}
      align={"center"}
    >
      <H2
        textAlign={{ base: "center", sm: "left" }}
        maxW={{ base: "11ch", sm: "14ch" }}
        mb={{ base: 10, sm: 0 }}
      >
        Interested in doing a project together?
      </H2>
      <SecondaryButton href="/contact">Contact Me</SecondaryButton>
    </Flex>
  );
}
