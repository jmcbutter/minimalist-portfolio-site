import { 
  Box,
  Text,
  Image
} from '@chakra-ui/react';
import '../theme/styles.css';
import MediaCard from '../organisms/MediaCard';
import projectArray from '../_content/projectArray';
import { useParams } from 'react-router-dom';
import { useBreakpointValue } from '@chakra-ui/react';
import PrimaryHeading from '../atoms/PrimaryHeading';
import { SecondaryButton } from '../atoms/Buttons';


export default function Project(props) {
  let { projectName } = useParams();
  let project = projectArray.find(proj => proj.name === projectName)
  console.log(project);
  return (
    <Box w={props.w} m="auto" pos='relative'>
      <HeroImage image={project.detailImages.hero} mb={16}/>
      <PrimaryHeading mb={6}>
        {project.name.charAt(0).toUpperCase() + project.name.slice(1)}
      </PrimaryHeading>
      <Text mb={6}>{project.content}</Text>
      <Text>{project.tags}</Text>
      <Text mb={6}>{project.tech}</Text>
      <SecondaryButton as='a' href={project.liveURL} mb={20}>
        View Website
      </SecondaryButton>
      <PrimaryHeading mb={8}>Project Background</PrimaryHeading>
      <Text mb={10}>{project.background}</Text>
      <PrimaryHeading mb={10}>Static Previews</PrimaryHeading>
      <HeroImage image={project.detailImages.previewTop} />
      <HeroImage image={project.detailImages.previewBottom} mb={16} />
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