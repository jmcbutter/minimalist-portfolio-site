import { Stack, StackDivider } from "@chakra-ui/react";
import NavLink from "../atoms/NavLink";

const links = [
  {
    name: "Home",
    href: "/",
    key: "home",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
    key: "portfolio",
  },
  {
    name: "Contact Me",
    href: "/contact",
    key: "contact",
  },
];

export default function NavLinkStack(props) {
  const { linkHoverBg, linkHoverColor, linkActiveColor, ...restProps } = props;

  return (
    <Stack
      {...restProps}
      as={"nav"}
      spacing={4}
      divider={props.direction === "row" ? null : <StackDivider />}
    >
      {links.map((link) => (
        <NavLink
          to={link.href}
          key={link.key}
          hoverBg={linkHoverBg}
          hoverColor={linkHoverColor}
          activeColor={linkActiveColor}
        >
          {link.name}
        </NavLink>
      ))}
    </Stack>
  );
}
