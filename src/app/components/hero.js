'use client'
import { Stack, Box, Text, Button, Heading } from "@chakra-ui/react";
import React from 'react';
const Hero = () => {
    return ( 
        <Stack className="hero"
        minH={'100vh'}
        direction={'row'}
        >
            {/** text side */}
            <Box>
                <Stack direction={'column'}>
                    <Box><Heading>Show them</Heading></Box>
                    <Box><Heading>Don't just tell them</Heading></Box>
                </Stack>
                
                
            </Box>

            {/**image side */}
            <Box></Box>
        </Stack>
     );
}
 
export default Hero;