import { 
  Link
} from '@chakra-ui/react';

export default function NavLink(props) {
  const {hoverBg, hoverColor, children, ...restProps} = props
  
  return (
    <Link
      {...restProps}
      px={2}
      py={1}
      _hover={{
        textDecoration: 'none',
        bg: hoverBg,
        color: hoverColor,
      }}
      textTransform='uppercase'
    >
      {children}
    </Link>
  )
}