import { IconButton as ChakraIconButton } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import Icon from "./Icon";

export default function IconButton(props) {
  const { iconObject, boxSize, type, ...restProps } = props;
  const { name, href } = iconObject;

  return (
    <ChakraIconButton
      {...restProps}
      as={Link(type)}
      target={type === "external" ? "_blank" : ""}
      rel="noreferrer noopener"
      key={name}
      to={href}
      href={href}
      bg="inherit"
      borderRadius={0}
      _hover={{
        bg: "inherit",
        color: "slightly-desaturated-cyan",
      }}
      icon={<Icon boxSize={boxSize} iconObject={iconObject} />}
    />
  );
}

function Link(type) {
  switch (type) {
    case "external":
      return ChakraLink;
    default:
      return ReactLink;
  }
}
