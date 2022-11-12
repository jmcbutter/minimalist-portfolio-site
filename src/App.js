import {BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import './theme/styles.css';
import NavBar from './organisms/NavBar';
import Footer from './organisms/Footer';
import Homepage from './pages/Homepage';
import Portfolio from './pages/Portfolio';

var contentWidth = 'clamp(311px, 90%, 1110px)'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar w={contentWidth} />
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage w={contentWidth} />} />
          <Route path="/portfolio" element={<Portfolio w={contentWidth} />} />
          <Route path="/contact" element={<NavBar />} />
        </Routes>
      </BrowserRouter>
      <Footer w={contentWidth} />
    </ChakraProvider>
  );
}

export default App;
