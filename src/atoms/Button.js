import { 
  Button as ChakraButton, 
  Text as ChakraText, 
} from "@chakra-ui/react"

const Button = (props) => {
  const {
    hoverBg, 
    hoverColor, 
    disabledBg, 
    disabledColor, 
    children, 
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
    <ChakraButton
      {...restProps}
      as='a'
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

export default Button