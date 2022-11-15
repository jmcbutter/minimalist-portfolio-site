import { Box, Button, Text, Icon } from "@chakra-ui/react"
import downArrows from "../_images/icons/downArrows"

const PrimaryButton = (props) => (
  <StandardButton
    {...props}
    leftIcon={<DownArrows />}
    w='200px'
    h='48px'
    bg='dark-blue' hoverbg='slightly-desaturated-cyan' disabledbg='light-gray'
    color='slightly-desaturated-cyan' hovercolor='very-light-gray'
    href={'#'}
  >
    <ButtonText color='very-light-gray' p={0}>{ props.children }</ButtonText>
  </StandardButton>
)

const StandardButton = (props) => (
  <Button
    {...props}
    borderRadius={0}
    p={0}
    _hover={{
      textDecoration: 'none',
      bg: props.hoverbg,
      color: props.hovercolor,
    }}
    _disabled={{
      bg: props.disabledbg,
      color: props.disabledcolor,
    }}
    textTransform='uppercase'
  >
    {props.children}
  </Button>
)

const DownArrows = () => (
  <Box bg='rgba(0,0,0,0.1)' 
       display='flex' alignItems='center' justifyContent='center' 
       h='48px' w='48px'
  >
    <Icon viewBox={downArrows.viewBox}>{downArrows.path}</Icon>
  </Box>
)

const ButtonText = (props) => (
  <Text
    {...props} 
    letterSpacing="2px"  
    fontSize={12} fontWeight={'normal'} 
    flexGrow={1}
    textAlign='center'
  >
    { props.children }
  </Text>
)

const SecondaryButton = (props) => (
  <StandardButton
    {...props}
    bg='inherit'
    border={'1px solid currentColor'}
    color='grayish-dark-blue'
    hoverbg='grayish-dark-blue'
    hovercolor='very-light-gray'
    disabledcolor='light-gray'
  >
    <ButtonText px={8} py={4}>{ props.children }</ButtonText>
  </StandardButton>
)

export { PrimaryButton, SecondaryButton }