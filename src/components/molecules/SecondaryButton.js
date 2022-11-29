import Button from "../atoms/Button";

const SecondaryButton = ({ children, to, href, type, ...restProps }) => (
  <Button
    {...restProps}
    to={to}
    href={href}
    bg="inherit"
    border={"1px solid currentColor"}
    color="grayish-dark-blue"
    hoverBg="grayish-dark-blue"
    hoverColor="very-light-gray"
    disabledColor="light-gray"
    type={type}
  >
    {children}
  </Button>
);

export default SecondaryButton;
