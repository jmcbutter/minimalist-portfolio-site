import { 
  Box,
  Text,
  Image,
  Icon,
  Flex
} from '@chakra-ui/react';
import '../theme/styles.css';
import projectArray from '../_content/projectArray';
import { useParams } from 'react-router-dom';
import { useBreakpointValue } from '@chakra-ui/react';
import {H1, H2} from '../atoms/Headings';
import SecondaryButton from '../molecules/SecondaryButton';
import arrowLeft from '../_images/icons/arrowLeft';
import arrowRight from '../_images/icons/arrowRight';
import CallToAction from '../organisms/CallToAction';


export default function Detail(props) {
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
      
      <Box display={{lg: 'flex'}} gap={32}>
        <Box mb={20} display={{md: 'flex'}}>
          <Box flex={1}>
            <H1 mb={6}>
              {toTitleCase(project.name)}
            </H1>
            <Text mb={6} display={{md: 'none', lg:'block'}}>{project.content}</Text>
            <Text color='slightly-desaturated-cyan'>
              {project.tags}
            </Text>
            <Text mb={6} color='slightly-desaturated-cyan' fontSize={16}>{project.tech}
            </Text>
            <SecondaryButton as='a' href={project.liveURL}>
              View Website
            </SecondaryButton>
          </Box>
          <Text display={{base: 'none', md: 'block', lg:'none'}} flex={1}>
            {project.content}
          </Text>
        </Box>

        <Box mb={16} maxW={{md: '55%'}}>
          <H1 mb={8}>Project Background</H1>
          <Text mb={10}>{project.background}</Text>
          <H1 mb={10}>Static Previews</H1>
          <HeroImage image={project.detailImages.previewTop} />
          <HeroImage image={project.detailImages.previewBottom} />
        </Box>
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
            <H2 as='h2'>
              {toTitleCase(previousProject.name)}
            </H2>
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
            <H2 as='h2'>
              {toTitleCase(nextProject.name)}
            </H2>
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
      lg: `${img.large} 1110w, ${img.large2x} 2220w`,
    }
  )
}

function toTitleCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}