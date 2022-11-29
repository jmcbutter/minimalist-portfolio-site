import {
  Button as ChakraButton,
  Text as ChakraText,
  Link as ChakraLink,
} from "@chakra-ui/react";

import { Link as ReactLink } from "react-router-dom";

export default function Button(props) {
  const {
    hoverBg,
    hoverColor,
    disabledBg,
    disabledColor,
    children,
    to,
    href,
    type,
    ...restProps
  } = props;

  const hoverStyle = {
    textDecoration: "none",
    bg: hoverBg,
    color: hoverColor,
  };

  const disabledStyle = {
    bg: disabledBg,
    color: disabledColor,
  };

  return (
    <Link type={type} to={to} href={href}>
      <ChakraButton
        {...restProps}
        p="0"
        borderRadius="0"
        textTransform="uppercase"
        _hover={hoverStyle}
        _disabled={disabledStyle}
        sx={{
          "&:hover *": {
            color: hoverColor,
          },
        }}
      >
        <ButtonText>{children}</ButtonText>
      </ChakraButton>
    </Link>
  );
}

function Link({ type, children, ...restProps }) {
  return type === "external" ? (
    <ChakraLink {...restProps}>{children}</ChakraLink>
  ) : (
    <ReactLink {...restProps}>{children}</ReactLink>
  );
}

const ButtonText = ({ children, ...restProps }) => (
  <ChakraText
    {...restProps}
    letterSpacing="2px"
    fontSize={12}
    fontWeight={"normal"}
    flexGrow={1}
    px={8}
    py={4}
    textAlign="center"
  >
    {children}
  </ChakraText>
);
