import { ChakraProvider, Box, defaultSystem } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Box minH="100vh">
        <Navbar />
        <Hero />
        <Features />
        <Footer />
      </Box>
    </ChakraProvider>
  )
}

export default App;
