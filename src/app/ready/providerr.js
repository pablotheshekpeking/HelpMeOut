'use client'
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export function Providersr({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        
        <Navbar />


        <Footer />

      </ChakraProvider>
    </CacheProvider>
  );
}
