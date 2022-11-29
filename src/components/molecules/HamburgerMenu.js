import { Box } from "@chakra-ui/react";

import NavLinkStack from "./NavLinkStack";

export default function HamburgerMenu({ isOpen, onClick }) {
  return isOpen ? <Menu onClick={onClick} /> : null;
}

const Menu = ({ onClick }) => (
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
      onClick={onClick}
    />
  </Box>
);
