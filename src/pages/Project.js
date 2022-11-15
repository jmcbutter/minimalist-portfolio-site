import { 
  Box,
  Text,
  Image,
  Divider,
  Icon,
  Flex
} from '@chakra-ui/react';
import '../theme/styles.css';
import projectArray from '../_content/projectArray';
import { useParams } from 'react-router-dom';
import { useBreakpointValue } from '@chakra-ui/react';
import {PrimaryHeading, SecondaryHeading} from '../atoms/PrimaryHeading';
import { SecondaryButton } from '../atoms/Buttons';
import arrowLeft from '../_images/icons/arrowLeft';
import arrowRight from '../_images/icons/arrowRight';
import CallToAction from '../organisms/CallToAction';


export default function Project(props) {
  let { projectName } = useParams();
  let project = projectArray.find(proj => proj.name === projectName)
  let projectIndex = projectArray.indexOf(project);
  let previousProjectIndex = projectIndex - 1;
  let nextProjectIndex = projectIndex + 1;
  let previousProject = previousProjectIndex > 0 
                        ? projectArray[previousProjectIndex]
                        : projectArray[projectArray.length - 1];
  let nextProject = nextProjectIndex === projectArray.length 
                    ? projectArray[0] 
                    : projectArray[nextProjectIndex]
  console.log(project);
  console.log(nextProject);
  console.log(previousProject);
  return (
    <Box w={props.w} m="auto" pos='relative'>
      <HeroImage image={project.detailImages.hero} mb={16}/>
      <Box mb={20}>
        <PrimaryHeading mb={6}>
          {toTitleCase(project.name)}
        </PrimaryHeading>
        <Text mb={6}>{project.content}</Text>
        <Text>{project.tags}</Text>
        <Text mb={6}>{project.tech}</Text>
        <SecondaryButton as='a' href={project.liveURL}>
          View Website
        </SecondaryButton>
      </Box>

      <Box mb={16} >
        <PrimaryHeading mb={8}>Project Background</PrimaryHeading>
        <Text mb={10}>{project.background}</Text>
        <PrimaryHeading mb={10}>Static Previews</PrimaryHeading>
        <HeroImage image={project.detailImages.previewTop} />
        <HeroImage image={project.detailImages.previewBottom} />
      </Box>

      <Flex borderTop={'1px solid black'} borderBottom={'1px solid black'}
        mb={{base: 16, md: 20, lg: 28}}
      >
        <Flex 
          flexGrow={1}
          flexDir={{base: 'column', md: 'row'}} 
          alignItems={{md: 'center'}}
          textAlign={'left'}
          gap={{base: 4, md: 8}}
          py={6}
          as='a'
          maxW={'50%'}
          href={previousProject.buttonHref}
        >
          <Icon boxSize='1.5em' viewBox={arrowLeft.viewBox}>
            {arrowLeft.path}
          </Icon>
          <Box>
            <SecondaryHeading as='h2'>
              {toTitleCase(previousProject.name)}
            </SecondaryHeading>
            <Text opacity='50%'>Previous Project</Text>
          </Box>
        </Flex>

        <Flex 
          flexGrow={1} 
          borderLeft={'1px solid black'} 
          flexDir={{base: 'column', md: 'row-reverse'}} 
          alignItems={{base: 'flex-end', md: 'center'}}
          textAlign={'right'}
          gap={{base: 4, md: 8}}
          py={6}
          maxW={'50%'}
          as='a'
          href={nextProject.buttonHref}
        >
          <Icon boxSize='1.5em' viewBox={arrowRight.viewBox}>
            {arrowRight.path}
          </Icon>
          <Box>
            <SecondaryHeading as='h2'>
              {toTitleCase(nextProject.name)}
            </SecondaryHeading>
            <Text opacity='50%'>Next Project</Text>
          </Box>
        </Flex>
      </Flex>

      <CallToAction mb={{base: 20, md: 32, lg: 40}} />
    </Box>
  );
}

const HeroImage = ({image, ...props}) => (
  <Box {...props}>
    <picture>
      <source srcSet={ImageSrcSets(image)} />
      <Image
        srcSet={`${image.small} 311w, ${image.small2x} 622w`}
        sizes={'(max-width:622px) 311px, 622px'}
        src={image.small}
        mx="auto" mb={6}
        w='100%' 
        border={{md: '0.1px solid white'}} 
      />
    </picture>
  </Box>
)

function ImageSrcSets(img) {
  return useBreakpointValue(
    {
      base: `${img.small} 311w, ${img.small2x} 622w`,
      md: `${img.medium} 311w, ${img.medium2x} 622w`,
      lg: `${img.large} 311w, ${img.large2x} 622w`,
    }
  )
}

function toTitleCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}