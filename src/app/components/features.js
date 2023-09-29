'use client'

import { Stack, Box, Heading, Text, Img } from '@chakra-ui/react';
import React from 'react';
const Features = () => {
    return (
        <>
            {/** heading */}
            <Box p={'50px'}>
                <Heading textAlign={'center'} color={'#141414'}>
                    Features
                </Heading>
                <Text color={'grey'} textAlign={'center'} pt={'10px'}>
                    Key Highlights of Our Extension
                </Text>
            </Box>

            {/** content */}
            <Stack
                direction={['column', 'column', 'row', 'row']}
                pr={'50px'}
                pl={'50px'}
            >
                <Box><Img src="/Check.png" /></Box>
                <Box><Img src="/features.png" /></Box>
            </Stack>
        </>
    );
}

export default Features;