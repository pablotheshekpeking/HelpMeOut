'use client'

import { Stack, Box, Heading, Text, Img } from '@chakra-ui/react';
import React from 'react';
const Features = () => {
    return (
        <>
            {/** heading */}
            <Heading textAlign={'center'} color={'#141414'}>
                Features
            </Heading>
            <Text color={'grey'} textAlign={'center'}>
            Key Highlights of Our Extension
            </Text>

            {/** content */}
            <Stack
            direction={['column', 'column', 'row', 'row']}
            pr={'50px'}
            pl={'50px'}
            >
                <Box></Box>
                <Box><Img src="/features.png"/></Box>
            </Stack>
        </>
    );
}

export default Features;