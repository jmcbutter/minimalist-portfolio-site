import {
  Box,
  Image,
  Heading,
} from '@chakra-ui/react';

import { PrimaryButton } from '../atoms/Buttons';
import { useBreakpointValue } from '@chakra-ui/react';

import imgSmall from '../_images/homepage/mobile/image-homepage-hero.jpg';
import imgSmall2x from '../_images/homepage/mobile/image-homepage-hero@2x.jpg';
import imgMedium from '../_images/homepage/tablet/image-homepage-hero.jpg';
import imgMedium2x from '../_images/homepage/tablet/image-homepage-hero@2x.jpg';
import imgLarge from '../_images/homepage/desktop/image-homepage-hero.jpg';
import imgLarge2x from '../_images/homepage/desktop/image-homepage-hero@2x.jpg';


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
      srcSet={`${imgSmall} 311w, ${imgSmall2x} 622w`}
      sizes={'(max-width:622px) 311px, 622px'}
      src={imgSmall}
      mx="auto" mb={6}
      w='100%' 
      border='0.1px solid white' 
    />
  </picture>
)

function ImageSrcSets() {
  return useBreakpointValue(
    {
      base: `${imgSmall} 311w, ${imgSmall2x} 622w`,
      md: `${imgMedium} 311w, ${imgMedium2x} 622w`,
      lg: `${imgLarge} 311w, ${imgLarge2x} 622w`,
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
    <PrimaryButton>About Me</PrimaryButton>
  </Box>
)
