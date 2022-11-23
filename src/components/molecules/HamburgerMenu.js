import { Box } from "@chakra-ui/react";

import NavLinkStack from "./NavLinkStack";

export default function HamburgerMenu({ isOpen }) {
  return isOpen ? <Menu /> : null;
}

const Menu = () => (
  <Box
    px={16}
    py={10}
    w="fit-content"
    pos="absolute"
    right="0"
    zIndex="dropdown"
    display={{ md: "none" }}
    bg="grayish-dark-blue"
    color="white"
    textAlign="center"
  >
    <NavLinkStack
      linkHoverBg="inherit"
      linkHoverColor="slightly-desaturated-cyan"
      linkActiveColor="slightly-desaturated-cyan"
    />
  </Box>
);
