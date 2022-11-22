import { 
  Button as ChakraButton, 
  Text as ChakraText, 
} from "@chakra-ui/react"

import {Link} from 'react-router-dom'

export default function Button(props) {
  const {
    hoverBg, 
    hoverColor, 
    disabledBg, 
    disabledColor, 
    children, 
    to,
    ...restProps} = props

  const hoverStyle = {
    textDecoration: 'none',
    bg: hoverBg,
    color: hoverColor,
  }

  const disabledStyle = {
    bg: disabledBg,
    color: disabledColor,
  }

  return (
    <Link to={to}>
      <ChakraButton
        {...restProps}
        p='0'
        borderRadius='0' 
        textTransform='uppercase'
        _hover={hoverStyle}
        _disabled={disabledStyle}
        sx={{
          '&:hover *': {
            color: hoverColor,
          }
        }}
      >
        <ButtonText>{children}</ButtonText>
      </ChakraButton>
    </Link>
  )
}

const ButtonText = ({children, ...restProps}) => (
  <ChakraText
    {...restProps} 
    letterSpacing="2px"  
    fontSize={12} fontWeight={'normal'} 
    flexGrow={1}
    px={8} py={4}
    textAlign='center'
  >
    { children }
  </ChakraText>
)