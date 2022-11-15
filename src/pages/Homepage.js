import { 
  Box,
  Divider,
} from '@chakra-ui/react';
import '../theme/styles.css';
import Hero from '../organisms/Hero';
import CallToAction from '../organisms/CallToAction';
import MediaCard from '../organisms/MediaCard';
import aboutInfo from '../_content/aboutInfo';

export default function Homepage(props) {
  return (
    <Box w={props.w} m="auto" pos='relative'>
      <Hero mb={24} />
      <MediaCard mediaObject={aboutInfo} cardDirection='ltr'/>
      <Divider mb={28} />
      <CallToAction mb={{base: 20, md: 32, lg: 40}}/>
    </Box>
  );
}