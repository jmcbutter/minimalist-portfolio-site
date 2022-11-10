import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import './theme/styles.css';
import NavBar from './organisms/NavBar';
import Footer from './organisms/Footer';
import Homepage from './pages/Homepage';

var contentWidth = 'clamp(311px, 90%, 1110px)'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar w={contentWidth} />
      <Homepage w={contentWidth} />
      <Footer w={contentWidth} />
    </ChakraProvider>
  );
}

export default App;
