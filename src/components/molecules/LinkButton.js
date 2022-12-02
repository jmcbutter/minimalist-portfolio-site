import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

export default function LinkButton({ to, href, type, button }) {
  return (
    <Link type={type} to={to} href={href}>
      {button}
    </Link>
  );
}

function Link({ type, children, ...restProps }) {
  switch (type) {
    case "external":
      return <ChakraLink {...restProps}>{children}</ChakraLink>;
    default:
      return <ReactLink {...restProps}>{children}</ReactLink>;
  }
}
