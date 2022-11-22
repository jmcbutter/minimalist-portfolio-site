import {
  Box,
  Divider,
  Image,
  Heading,
  Text,
  Flex,
} from '@chakra-ui/react';

import SecondaryButton from '../molecules/SecondaryButton';
import { useBreakpointValue } from '@chakra-ui/react';

export default function MediaCard({ mediaObject, cardDirection, ...props}) {
  return (
    <Box {...props} 
         display={{md: 'flex'}} 
         flexDir={cardDirection === 'ltr' ? 'row' : 'row-reverse'}
         gap='4rem'
    >
      <MediaImage images={mediaObject.portfolioImages}/>
      <Divider mb={8} display={{md: 'none'}}/>
      <Flex
        w={{base: '100%', md: 'clamp(8em, 100%, 25em)'}} 
        flexDir='column' justifyContent={'center'} gap={10}
      >
        <Heading as='h2' size='2xl' letterSpacing='tight'>
          {mediaObject.title}
        </Heading>
        <Text lineHeight={7}>
          {mediaObject.content}
        </Text>
        <SecondaryButton maxW={'202px'} href={mediaObject.buttonHref}>
          {mediaObject.buttonText}
        </SecondaryButton>
      </Flex>
    </Box>
  );
}

const MediaImage = ({images}) => (
  <picture 
    style={{
      maxWidth: '50%',
      flex: '1 1 auto',
    }}
  >
    <source srcSet={ImageSrcSets(images)} />
    <Image
      src={images.small} 
      mx="auto"
      w='100%'
      h='100%'
      srcSet={`${images.small} 311w, ${images.small2x} 622w`}
      sizes={'(max-width:622px) 311px, 622px'}
      objectFit='cover'
    />
  </picture>
)

function ImageSrcSets(images) {
  return useBreakpointValue(
    {
      base: `${images.small} 311w, ${images.small2x} 622w`,
      md: `${images.medium} 281w, ${images.medium2x} 562w`,
      lg: `${images.large} 540w, ${images.large2x} 1080w`,
    }
  )
}