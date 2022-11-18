import {
  Box,
  Image,
  Heading,
} from '@chakra-ui/react';

import PrimaryButton from '../molecules/PrimaryButton';
import { useBreakpointValue } from '@chakra-ui/react';
import { heroImage as img } from '../_images/homepage/homepageImages';


export default function Hero(props) {
  return (
    <Box position='relative' {...props}>
      <HeroImage />
      <TextBox />
    </Box>
  );
}

const HeroImage = () => (
  <picture>
    <source srcSet={ImageSrcSets()} />
    <Image
      srcSet={`${img.small} 311w, ${img.small2x} 622w`}
      sizes={'(max-width:622px) 311px, 622px'}
      src={img.small}
      mx="auto" mb={6}
      w='100%' 
      border={{md: '0.1px solid white'}} 
    />
  </picture>
)

function ImageSrcSets() {
  return useBreakpointValue(
    {
      base: `${img.small} 311w, ${img.small2x} 622w`,
      md: `${img.medium} 311w, ${img.medium2x} 622w`,
      lg: `${img.large} 1110w, ${img.large2x} 2220w`,
    }
  )
}

const TextBox = ({ children }) => (
  <Box 
    w={{
      base: 'max(30ch, 75%)',
      md: '520px',
      lg: '445px',
    }}
    bg='white'
    position={{
      base: 'static',
      md: 'absolute',
    }}
    bottom='0'
    left='0'
    padding={{
      base: '0',
      md: '3.5rem 3.5rem 0 0em'
    }}
  >
    <Heading as='h1' size='2xl' mb={8} letterSpacing='tight'>
      Hey, I’m Jordan Butterfield and I love building beautiful websites
    </Heading>
    <PrimaryButton href={'#about'}>About Me</PrimaryButton>
  </Box>
)
