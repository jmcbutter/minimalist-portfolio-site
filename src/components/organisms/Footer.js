import { Box, Flex } from "@chakra-ui/react";

import LogoIcon from "../atoms/LogoIcon";
import SocialIconStack from "../molecules/SocialIconStack";
import NavLinkStack from "../molecules/NavLinkStack";

export default function Footer(props) {
  return (
    <Box bg="grayish-dark-blue" color="white">
      <Flex
        py={{ base: 14, md: 6 }}
        direction={{ base: "column", md: "row" }}
        align="center"
        gap={10}
        w={props.w}
        mx="auto"
      >
        <LogoIcon boxSize="3.5em" />
        <NavLinkStack
          direction={{ base: "column", md: "row" }}
          textAlign="center"
          flex="1"
          linkHoverColor="slightly-desaturated-cyan"
          linkActiveColor="slightly-desaturated-cyan"
        />
        <SocialIconStack />
      </Flex>
    </Box>
  );
}
