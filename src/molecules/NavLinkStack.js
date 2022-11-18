import { Stack, StackDivider } from '@chakra-ui/react';
import NavLink from '../atoms/NavLink';

const links = [
  {
    name: 'Home',
    href: '/',
  }, 
  {
    name: 'Portfolio',
    href: '/portfolio',
  },
  {
    name: 'Contact Me',
    href: '/contact',
  }
]

export default function NavLinkStack(props) {
  const {linkHoverBg, linkHoverColor, ...restProps} = props;

  return (
    <Stack 
      {...restProps} 
      as={'nav'} 
      spacing={4}
      divider={props.direction === 'row' ? null : <StackDivider />}
    >
      {links.map(link => (
        <NavLink 
          href={link.href}
          key={link.name}
          hoverBg={linkHoverBg}
          hoverColor={linkHoverColor}
        >
          {link.name}
        </NavLink>
      ))}
    </Stack>
  )
}