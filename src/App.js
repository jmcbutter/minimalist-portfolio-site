import { 
  ChakraProvider, 
  Box,
  Divider,
} from '@chakra-ui/react';
import theme from './theme';
import './theme/styles.css';
import NavBar from './organisms/NavBar';
import Hero from './organisms/Hero';
import AboutMe from './organisms/AboutMe';
import CallToAction from './organisms/CallToAction';
import Footer from './organisms/Footer';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box w="clamp(311px, 90%, 1110px)" m="auto" pos='relative'>
        <NavBar />
        <Divider />
        <Hero mb={24} />
        <AboutMe />
        <Divider mb={28} />
        <CallToAction mb={{base: 20, md: 32, lg: 40}}/>
      </Box>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
