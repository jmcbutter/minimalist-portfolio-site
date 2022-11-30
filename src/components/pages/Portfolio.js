import { Box } from "@chakra-ui/react";
import "../theme/styles.css";
import MediaCard from "../organisms/MediaCard";
import projectArray from "../../content/projectArray";

export default function Portfolio(props) {
  return (
    <Box {...props} mx="auto" pos="relative">
      {projectArray.map((proj, i) => (
        <MediaCard
          mediaObject={proj}
          cardDirection={i % 2 === 0 ? "rtl" : "ltr"}
          mb={20}
          key={proj.name}
        />
      ))}
    </Box>
  );
}
