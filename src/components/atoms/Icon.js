import { Icon as ChakraIcon } from "@chakra-ui/react";

export default function Icon({iconObject, ...restProps}) {
  const {viewBox, path} = iconObject

  return (
      <ChakraIcon 
        {...restProps}
        viewBox={viewBox}
      >
        {path}
      </ChakraIcon>
  )
}