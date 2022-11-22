import Button from "../atoms/Button"

const SecondaryButton = ({children, href, ...restProps}) => (
  <Button
    {...restProps}
    to={href}
    bg='inherit'
    border={'1px solid currentColor'}
    color='grayish-dark-blue'
    hoverBg='grayish-dark-blue'
    hoverColor='very-light-gray'
    disabledColor='light-gray'
  >
    { children }
  </Button>
)

export default SecondaryButton