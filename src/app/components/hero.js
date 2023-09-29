'use client'
import { Stack, Box, Text, Button, Heading } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import React from 'react';
const Hero = () => {
    return (
        <Stack className="hero"
            minH={'100vh'}
            direction={'row'}
        >
            {/** text side */}
            <Box m={'auto'}>
                <Stack>
                    <Box>
                        <Stack direction={'column'} className='heading'>
                            <Box><Heading color={'#100A42'}>Show Them</Heading></Box>
                            <Box><Heading color={'#100A42'}>Don't Just Tell Them</Heading></Box>
                        </Stack>
                    </Box>
                    <Box>
                        <Text color={'black'} opacity={'75%'}>Help your friends and loved ones by creating and sending videos on how to get things done on a website.</Text>
                    </Box>
                    <Box>
                        <Button colorScheme='#100A42' size='lg' bg={'#100A42'}>
                            Install HelpMeOut <ArrowForwardIcon />
                        </Button>
                    </Box>
                </Stack>
            </Box>

            {/**image side */}
            <Box m={'auto'}>
            </Box>
        </Stack>
    );
}

export default Hero;