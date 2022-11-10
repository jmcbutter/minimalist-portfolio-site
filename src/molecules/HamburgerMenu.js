import { 
  Box, 
  Stack,
} from '@chakra-ui/react';

import { NavLink } from '../atoms/NavLink';
import links from '../_content/links';

export default function HamburgerMenu(props) {
  return props.isOpen ? (
    <Container>
      <Links />
    </Container>
    ) : null;
}

const Container = ({children}) => (
  <Box 
    px={16}
    py={10} 
    w='fit-content'
    pos='absolute' right='0'
    zIndex='dropdown'
    display={{sm: 'none'}}
    bg='grayish-dark-blue'
    color='white'
    textAlign='center'
  >
    {children}
  </Box>
)

const Links = () => (
  <Stack as={'nav'} spacing={4}>
    {links.map((link) => (
      <Link>{link}</Link>
    ))}
  </Stack>
)

const Link = ({children}) => (
  <NavLink 
    key={children} 
    hoverbg='light-gray' hovercolor='grayish-dark-blue'
  >
    {children}
  </NavLink>
)