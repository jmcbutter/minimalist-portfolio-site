import Button from "../atoms/Button";

export default function PrimaryButton(props) {
  const style = {
    w: "200px",
    h: "48px",
    bg: "dark-blue",
    color: "very-light-gray",
    hoverBg: "slightly-desaturated-cyan",
    hoverColor: "very-light-gray",
    disabledBg: "light-gray",
    scrollBehavior: "smooth",
  };

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
    >
      {props.children}
    </Button>
  );
}
