'use client'

import { Stack, Box, Img, Text } from '@chakra-ui/react';
import React from 'react';
const Footer = () => {
    return (
        <Stack direction={'row'} bg={'#120B48'}>
            <Box w={'40%'}>
                <Img src='footerLogo.png' m={'auto'} />
            </Box>
            <Box w={'60%'} color={'white'}>
                <Stack direction={'row'}>
                    <Box className='Menu' w={'33.3%'}>
                        <Stack direction={'column'}>
                            <Box><Text>Menu</Text></Box>
                            <Box><Text>Home</Text></Box>
                            <Box><Text>Converter</Text></Box>
                            <Box><Text>How It Works</Text></Box>
                        </Stack>
                    </Box>
                    <Box className='About us' w={'33.3%'}>
                        <Stack direction={'column'}>
                            <Box><Text>About us</Text></Box>
                            <Box><Text>About</Text></Box>
                            <Box><Text>Contact us</Text></Box>
                            <Box><Text>Privacy Policy</Text></Box>
                        </Stack>
                    </Box>
                    <Box className='Screen Record' w={'33.3%'}>
                        <Stack direction={'column'}>
                            <Box><Text>Screen Record</Text></Box>
                            <Box><Text>Browser Window</Text></Box>
                            <Box><Text>Desktop</Text></Box>
                            <Box><Text>Application</Text></Box>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </Stack>
    );
}

export default Footer;