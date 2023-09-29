'use client'

import { Stack, Box, Heading, Img, Text } from '@chakra-ui/react';
import React from 'react';

const HowItWorks = () => {
    return (
        <>
        {/** heading */}
            <Box p={'50px'}>
                <Heading color={'#141414'} textAlign={'center'}>How It Works</Heading>
            </Box>

        {/** content */}
            <Stack 
            direction={['column', 'column', 'row', 'row']}
            pr={'50px'}
            pl={'50px'}
            pb={'50px'}
            >
                <Box className='part1'>
                <Img src='Icon1.png' m={'auto'} />
                    <Stack direction={'column'}>
                        <Box>
                            <Heading color={'#100A42'}>Record Screen</Heading>
                            <Text color={'grey'}>Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.</Text>
                        </Box>
                        <Box><Img src='hiwimg.png' /></Box>
                    </Stack>
                </Box>
                <Box></Box>
                <Box></Box>
            </Stack>
        </>
    );
}

export default HowItWorks;