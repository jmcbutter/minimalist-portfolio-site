import { 
  Link
} from '@chakra-ui/react';

import { NavLink as ReactLink } from 'react-router-dom';

export default function NavLink(props) {
  const {hoverBg, hoverColor, activeColor, children, ...restProps} = props
  
  return (
    <Link
      {...restProps}
      as={ReactLink}
      px={2}
      py={1}
      _hover={{
        textDecoration: 'none',
        bg: hoverBg,
        color: hoverColor,
      }}
      _activeLink={{color: activeColor}}
      textTransform='uppercase'
    >
      {children}
    </Link>
  )
}