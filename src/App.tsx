import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { AppRouter } from './routes';
import './App.css';

const theme = extendTheme({
  fonts: {
    body: 'Manrope, sans-serif',
    heading: 'Lexend, sans-serif',
  },
  colors: {
    brand: {
      500: '#026496',
    },
    blue: {
      500: '#15ABFF',
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppRouter />
    </ChakraProvider>
  );
}

export default App;
