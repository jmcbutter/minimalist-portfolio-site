import Button from "../atoms/Button"
import DownArrowIcon from "../atoms/DownArrowIcon"

export default function PrimaryButton(props) {
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
      leftIcon={<DownArrowIcon color={style.iconColor}/>}
    >
      { props.children }
    </Button>
  )
}