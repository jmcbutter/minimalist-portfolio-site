import { Box, Divider, Text } from "@chakra-ui/react";
import "../theme/styles.css";
import projects from "../../content/projectArray";
import { useParams } from "react-router-dom";
import { H1, Image } from "../atoms";
import SecondaryButton from "../molecules/SecondaryButton";
import CallToAction from "../organisms/CallToAction";
import ProjectNavigation from "../organisms/ProjectNavigation";
import LinkButton from "../molecules/LinkButton";

export default function Detail(props) {
  const { projectName } = useParams();
  const project = projects.find((proj) => proj.name === projectName);
  const images = project.detailImages;

  return (
    <Box {...props} mx="auto" pos="relative">
      <Image image={images.hero} mb={16} />

      <Box display={{ lg: "flex" }} gap={32}>
        <Summary project={project} mb={20} />
        <Details project={project} />
      </Box>

      <ProjectNavigation project={project} projects={projects} />
      <CallToAction mb={{ base: 20, md: 32, lg: 40 }} />
    </Box>
  );
}

function Summary({ project, ...restProps }) {
  return (
    <Box {...restProps}>
      <Divider borderColor="black" opacity="0.15" mb={6} />
      <Box id="summary" mb={6} display={{ md: "flex" }}>
        <Box flex={1}>
          <H1 mb={6}>{project.title}</H1>
          <Text mb={6} display={{ md: "none", lg: "block" }}>
            {project.content}
          </Text>
          <Text color="slightly-desaturated-cyan">{project.tags}</Text>
          <Text mb={6} color="slightly-desaturated-cyan" fontSize={16}>
            {project.tech}
          </Text>
          <LinkButton
            type="external"
            display="block"
            mb={2}
            href={project.repoURL}
            button={<SecondaryButton>View Code</SecondaryButton>}
          />
          <LinkButton
            type="external"
            href={project.liveURL}
            button={<SecondaryButton>View Website</SecondaryButton>}
          />
        </Box>
        <Text display={{ base: "none", md: "block", lg: "none" }} flex={1}>
          {project.content}
        </Text>
      </Box>
      <Divider borderColor="black" opacity="0.15" />
    </Box>
  );
}

function Details({ project }) {
  const images = project.detailImages;

  return (
    <Box id="details" mb={16} maxW={{ lg: "55%" }}>
      <H1 mb={8}>Project Background</H1>
      <Box mb={10}>
        {project.background.map((p) => (
          <Text mb={4}>{p}</Text>
        ))}
      </Box>
      <H1 mb={10}>Static Previews</H1>
      <Image image={images.previewTop} mb={8} />
      <Image image={images.previewBottom} />
    </Box>
  );
}
