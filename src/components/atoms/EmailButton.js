import { Button as ChakraButton, Text as ChakraText } from "@chakra-ui/react";

export default function EmailButton({ children, ...restProps }) {
  const style = {
    w: "200px",
    h: "48px",
    bg: "dark-blue",
    color: "very-light-gray",
    iconColor: "slightly-desaturated-cyan",
    hoverBg: "slightly-desaturated-cyan",
    hoverColor: "very-light-gray",
    disabledBg: "light-gray",
    scrollBehavior: "smooth",
  };

  return (
    <Button
      {...restProps}
      w={style.w}
      h={style.h}
      bg={style.bg}
      hoverBg={style.hoverBg}
      disabledBg={style.disabledBg}
      color={style.color}
      hoverColor={style.hoverColor}
    >
      {children}
    </Button>
  );
}

function Button(props) {
  const {
    hoverBg,
    hoverColor,
    disabledBg,
    disabledColor,
    children,
    to,
    href,
    type,
    ...restProps
  } = props;

  const hoverStyle = {
    textDecoration: "none",
    bg: hoverBg,
    color: hoverColor,
  };

  const disabledStyle = {
    bg: disabledBg,
    color: disabledColor,
  };

  return (
    <ChakraButton
      {...restProps}
      type={type}
      p="0"
      borderRadius="0"
      textTransform="uppercase"
      _hover={hoverStyle}
      _disabled={disabledStyle}
      sx={{
        "&:hover *": {
          color: hoverColor,
        },
      }}
    >
      <ButtonText>{children}</ButtonText>
    </ChakraButton>
  );
}

const ButtonText = ({ children, ...restProps }) => (
  <ChakraText
    {...restProps}
    letterSpacing="2px"
    fontSize={12}
    fontWeight={"normal"}
    flexGrow={1}
    px={8}
    py={4}
    textAlign="center"
  >
    {children}
  </ChakraText>
);
