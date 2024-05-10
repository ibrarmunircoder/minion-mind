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
    clay: {
      50: '#DEE1E64D',
      500: '#232C3C',
    },
    orangeTag: {
      100: '#FFF3F0',
      800: '#F9623E',
    },
    purpleTag: {
      100: '#F5F1FE',
      800: '#6D31ED',
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
