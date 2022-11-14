import {
  Box,
  Divider,
  Image,
  Heading,
  Text,
  Flex,
} from '@chakra-ui/react';

import { SecondaryButton } from '../atoms/Buttons';
import { useBreakpointValue } from '@chakra-ui/react';

import { aboutImage as img } from '../_images/homepage/homepageImages';


export default function AboutMe(props) {
  return (
    <Box id='about' {...props} display={{md: 'flex'}} gap='4rem'>
      <ProfileImage maxW={'50%'}/>
      <Divider mb={8} display={{md: 'none'}}/>
      <Flex
        w={{base: '100%', md: 'clamp(8em, 100%, 25em)'}} 
        flexDir='column' justifyContent={'center'} gap={10}
      >
        <Heading as='h2' size='2xl' letterSpacing='tight'>
          About Me
        </Heading>
        <Text lineHeight={7}>
          I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.
        </Text>
        <SecondaryButton as='a' maxW={'202px'} href="/portfolio">Go to Portfolio</SecondaryButton>
      </Flex>
    </Box>
  );
}

const ProfileImage = (props) => (
  <picture 
    style={{
      maxWidth: '50%',
      flex: '1 1 auto',
    }}
  >
    <source srcSet={ImageSrcSets()} />
    <Image
      src={img.small} 
      mx="auto"
      w='100%'
      h='100%'
      srcSet={`${img.small} 311w, ${img.small2x} 622w`}
      sizes={'(max-width:622px) 311px, 622px'}
      objectFit='cover'
    />
  </picture>
)

function ImageSrcSets() {
  return useBreakpointValue(
    {
      base: `${img.small} 311w, ${img.small2x} 622w`,
      md: `${img.medium} 281w, ${img.medium2x} 562w`,
      lg: `${img.large} 540w, ${img.large2x} 1080w`,
    }
  )
}