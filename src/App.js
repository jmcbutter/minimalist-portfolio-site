import { Routes, Route } from "react-router-dom";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import theme from "./components/theme/index";
import "./components/theme/styles.css";
import NavBar from "./components/organisms/NavBar";
import Footer from "./components/organisms/Footer";
import Homepage from "./components/pages/Homepage";
import Portfolio from "./components/pages/Portfolio";
import Detail from "./components/pages/Detail";
import Contact from "./components/pages/Contact";
import ScrollToTop from "./ScrollToTop";

var contentWidth = "clamp(311px, 90%, 1110px)";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex flexDirection="column" minH="100vh">
        <ScrollToTop />
        <NavBar w={contentWidth} />
        <Routes>
          <Route index element={<Homepage w={contentWidth} flex={1} />} />
          <Route
            path="/portfolio"
            element={<Portfolio w={contentWidth} flex={1} />}
          />
          <Route
            path="/contact"
            element={<Contact w={contentWidth} flex={1} />}
          />
          <Route
            path="/project/:projectName"
            element={<Detail w={contentWidth} flex={1} />}
          />
        </Routes>
        <Footer w={contentWidth} justifySelf="flex-end" />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
