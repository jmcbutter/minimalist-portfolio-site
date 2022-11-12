import { 
  Box,
  Divider,
} from '@chakra-ui/react';
import '../theme/styles.css';
import Hero from '../organisms/Hero';
import AboutMe from '../organisms/AboutMe';
import CallToAction from '../organisms/CallToAction';


export default function Portfolio(props) {
  return (
    <Box w={props.w} m="auto" pos='relative'>
      <Hero mb={24} />
      <AboutMe />
      <Divider mb={28} />
      <CallToAction mb={{base: 20, md: 32, lg: 40}}/>
    </Box>
  );
}