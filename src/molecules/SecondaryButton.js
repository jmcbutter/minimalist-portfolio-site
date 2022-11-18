import Button from "../atoms/Button"

const SecondaryButton = (props) => (
  <Button
    {...props}
    bg='inherit'
    border={'1px solid currentColor'}
    color='grayish-dark-blue'
    hoverBg='grayish-dark-blue'
    hoverColor='very-light-gray'
    disabledColor='light-gray'
  >
    { props.children }
  </Button>
)

export default SecondaryButton