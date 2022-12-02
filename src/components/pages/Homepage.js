import { Box } from "@chakra-ui/react";
import "../theme/styles.css";
import HomepageHero from "../organisms/HomepageHero";
import CallToAction from "../organisms/CallToAction";
import MediaCard from "../organisms/MediaCard";
import aboutInfo from "../../content/aboutInfo";

export default function Homepage(props) {
  return (
    <Box {...props} mx="auto" pos="relative">
      <HomepageHero mb={24} />
      <MediaCard
        id="about"
        mediaObject={aboutInfo}
        cardDirection="ltr"
        mb={28}
      />
      <CallToAction mb={{ base: 20, md: 32, lg: 40 }} />
    </Box>
  );
}
