import { 
  Link
} from '@chakra-ui/react';

export const NavLink = (props) => (
  <Link
    {...props}
    px={2}
    py={1}
    _hover={{
      textDecoration: 'none',
      bg: props.hoverbg,
      color: props.hovercolor,
    }}
    textTransform='uppercase'
  >
    {props.children}
  </Link>
)