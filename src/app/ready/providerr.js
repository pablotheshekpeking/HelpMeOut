'use client'
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Ready from '../components/ready';

export function Providersr({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        
        <Navbar />

        <Ready />


        <Footer />

      </ChakraProvider>
    </CacheProvider>
  );
}
