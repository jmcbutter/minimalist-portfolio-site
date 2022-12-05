import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

export default function LinkButton({ to, href, type, button, ...restProps }) {
  return (
    <Link
      type={type}
      to={to}
      href={href}
      _hover={{ textDecoration: "none" }}
      {...restProps}
    >
      {button}
    </Link>
  );
}

function Link({ type, children, ...restProps }) {
  switch (type) {
    case "external":
      return (
        <ChakraLink target="_blank" {...restProps}>
          {children}
        </ChakraLink>
      );
    default:
      return <ReactLink {...restProps}>{children}</ReactLink>;
  }
}
