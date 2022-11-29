import { Text } from "@chakra-ui/react";

export function P1(props) {
  return (
    <Text {...props} fontSize="1rem" lineHeight={1.875}>
      {props.children}
    </Text>
  );
}

export function P2(props) {
  return (
    <Text {...props} fontSize="0.94rem" lineHeight={2}>
      {props.children}
    </Text>
  );
}
