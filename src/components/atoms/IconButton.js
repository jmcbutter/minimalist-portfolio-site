import { IconButton as ChakraIconButton } from "@chakra-ui/react";
import Icon from './Icon'

export default function IconButton({iconObject, boxSize, ...restProps}) {
  const {name, href} = iconObject

  return (
    <ChakraIconButton
      {...restProps}
      as='a'
      key={name}
      href={href}
      bg='inherit'
      borderRadius={0}
      _hover={{
        bg: 'inherit',
        color: 'slightly-desaturated-cyan'
      }}
      icon={(<Icon boxSize={boxSize} iconObject={iconObject} />)}
    />
  )
}