import { Box, Text, Icon, Flex } from "@chakra-ui/react";
import "../theme/styles.css";
import { H3 } from "../atoms";
import arrowLeft from "../../images/icons/arrowLeft";
import arrowRight from "../../images/icons/arrowRight";
import { Link } from "react-router-dom";

export default function ProjectNavigation({ projects, project }) {
  const index = projects.indexOf(project);
  const previousIndex = (index === 0 ? projects.length : index) - 1;
  const nextIndex = index === projects.length - 1 ? 0 : index + 1;
  const previous = projects[previousIndex];
  const next = projects[nextIndex];

  return (
    <Flex
      borderTop={"1px solid black"}
      borderBottom={"1px solid black"}
      mb={{ base: 16, md: 20, lg: 28 }}
    >
      <Flex
        flexGrow={1}
        flexDir={{ base: "column", md: "row" }}
        alignItems={{ md: "center" }}
        textAlign={"left"}
        gap={{ base: 4, md: 8 }}
        py={6}
        maxW={"50%"}
        as={Link}
        to={previous.buttonHref}
      >
        <Icon boxSize="1.5em" viewBox={arrowLeft.viewBox}>
          {arrowLeft.path}
        </Icon>
        <Box>
          <H3>{previous.title}</H3>
          <Text opacity="50%">Previous Project</Text>
        </Box>
      </Flex>

      <Flex
        flexGrow={1}
        borderLeft={"1px solid black"}
        flexDir={{ base: "column", md: "row-reverse" }}
        alignItems={{ base: "flex-end", md: "center" }}
        textAlign={"right"}
        gap={{ base: 4, md: 8 }}
        py={6}
        maxW={"50%"}
        as={Link}
        to={next.buttonHref}
      >
        <Icon boxSize="1.5em" viewBox={arrowRight.viewBox}>
          {arrowRight.path}
        </Icon>
        <Box>
          <H3>{next.title}</H3>
          <Text opacity="50%">Next Project</Text>
        </Box>
      </Flex>
    </Flex>
  );
}
