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
      base: "max(30ch, 75%)",
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
    <H1 mb={8}>Hey, I’m Jordan, and I build websites.</H1>
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
