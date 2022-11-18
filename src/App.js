import {BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import './theme/styles.css';
import NavBar from './organisms/NavBar';
import Footer from './organisms/Footer';
import Homepage from './pages/Homepage';
import Portfolio from './pages/Portfolio';
import Detail from "./pages/Detail";
import Contact from "./pages/Contact";

var contentWidth = 'clamp(311px, 90%, 1110px)'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <NavBar w={contentWidth} />
        <Routes>
          <Route index element={<Homepage w={contentWidth} />} />
          <Route path="/portfolio" element={<Portfolio w={contentWidth} />} />
          <Route path="/contact" element={<Contact w={contentWidth} />} />
          <Route path="/project/:projectName" element={<Detail w={contentWidth} />} />
        </Routes>
        <Footer w={contentWidth} />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
