import { Box } from "@chakra-ui/react";

import PrimaryButton from "../molecules/PrimaryButton";
import Image from "../atoms/Image";
import { H1 } from "../atoms/Headings";
import { heroImage as img } from "../../images/homepage/homepageImages";
import LinkButton from "../molecules/LinkButton";
import DownArrowIcon from "../atoms/DownArrowIcon";

export default function HomepageHero(props) {
  return (
    <Box position="relative" {...props}>
      <Image image={img} mb={6} />
      <TextBox />
    </Box>
  );
}

const TextBox = ({ children }) => (
  <Box
    w={{
      base: "max(25ch, 75%)",
      md: "520px",
      lg: "445px",
    }}
    bg="white"
    position={{
      base: "static",
      md: "absolute",
    }}
    bottom="0"
    left="0"
    padding={{
      base: "0",
      md: "3.5rem 3.5rem 0 0em",
    }}
  >
    <H1 mb={8}>Hi, I’m Jordan. I'm a front-end developer.</H1>
    <LinkButton
      to={"#about"}
      button={
        <PrimaryButton
          leftIcon={<DownArrowIcon color={"slightly-desaturated-cyan"} />}
        >
          About Me
        </PrimaryButton>
      }
    />
  </Box>
);
