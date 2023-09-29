'use client'
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Features from './components/features';

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        
        <Navbar />

        <Hero />

        <Box w={'100%'} h={'50px'} bg={'#F4F6F8'}></Box>

        <Features />

      </ChakraProvider>
    </CacheProvider>
  );
}
