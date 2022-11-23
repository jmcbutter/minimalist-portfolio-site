import { Box, Flex, useDisclosure } from "@chakra-ui/react";

import NavLinkStack from "../molecules/NavLinkStack";
import HamburgerMenuButton from "../molecules/HamburgerMenuButton";
import HamburgerMenu from "../molecules/HamburgerMenu";
import LogoIcon from "../atoms/LogoIcon";

export default function NavBar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box mb={10} mt={8} position="relative" w={props.w} mx="auto">
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <LogoIcon boxSize="3.5em" />
        <HamburgerMenuButton
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
        <NavLinkStack
          direction="row"
          linkHoverBg="inherit"
          linkHoverColor="slightly-desaturated-cyan"
          linkActiveColor="slightly-desaturated-cyan"
          spacing={4}
          display={{ base: "none", md: "flex" }}
        />
      </Flex>
      <HamburgerMenu isOpen={isOpen} />
    </Box>
  );
}