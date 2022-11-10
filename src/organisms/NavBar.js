import { 
  Box, 
  Flex, 
  HStack,
  useDisclosure,
  Icon,
} from '@chakra-ui/react';

import { NavLink } from '../atoms/NavLink';
import links from '../_content/links';
import logo from '../_images/icons/logo';
import HamburgerMenuButton from '../molecules/HamburgerMenuButton';
import HamburgerMenu from '../molecules/HamburgerMenu';

export default function NavBar(props) {
  const {isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box mb={10} mt={8}>
      <Flex alignItems={'center'} justifyContent={'space-between'}>
        <Icon viewBox={logo.viewBox} boxSize='3.5em'>{logo.path}</Icon>
        <HamburgerMenuButton isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
        <HorizontalLinks />
      </Flex>
      <HamburgerMenu isOpen={isOpen} />
    </Box>
  )
}

const HorizontalLinks = () => (
  <HStack as={'nav'} spacing={4} display={{base: 'none', sm: 'flex'}}>
    {links.map((link) => (
      <NavLink 
        key={link} 
        fontSize={'sm'} 
        hoverbg='grayish-dark-blue' hovercolor='very-light-gray'
      >
        {link}
      </NavLink>
    ))}
  </HStack>
)