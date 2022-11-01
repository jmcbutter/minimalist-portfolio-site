import logo from './logo.svg';
import './App.css';
import { ChakraProvider, Box } from '@chakra-ui/react'
import theme from './theme';
import './theme/styles.css';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg='slightly-desaturated-cyan'>
        <div>This is a test</div>
      </Box>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
