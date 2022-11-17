import { Box, Icon } from "@chakra-ui/react"
import Button from "./Button"
import downArrows from "../_images/icons/downArrows"

const PrimaryButton = (props) => {
  const style = {
    w: '200px',
    h: '48px',
    bg: 'dark-blue',
    color: 'very-light-gray',
    iconColor: 'slightly-desaturated-cyan',
    hoverBg: 'slightly-desaturated-cyan',
    hoverColor: 'very-light-gray',
    disabledBg: 'light-gray',
    scrollBehavior: 'smooth',
  }

  return (
    <Button
      {...props}
      w={style.w} 
      h={style.h}
      bg={style.bg} 
      hoverBg={style.hoverBg} 
      disabledBg={style.disabledBg}
      color={style.color} 
      hoverColor={style.hoverColor}
      leftIcon={<DownArrows color={style.iconColor}/>}
    >
      { props.children }
    </Button>
  )
}

const DownArrows = (props) => (
  <Box
    {...props} 
    bg='rgba(0,0,0,0.1)'
    display='flex' 
    alignItems='center' 
    justifyContent='center' 
    h='48px' 
    w='48px'
  >
    <Icon viewBox={downArrows.viewBox}>{downArrows.path}</Icon>
  </Box>
)

export default PrimaryButton;