'use client'

import { Stack, Box, Text, Heading, Img } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import React from 'react';
const Ready = () => {
    return ( 
        <Stack
        direction={['column', 'column', 'row', 'row']}
        minH={'100vh'}
        pl={'50px'}
        pr={'50px'}
        >
            <Box>
                <Heading color={'#141414'} mb={'50px'}>Your video is ready!</Heading>

                <Text fontSize={'11px'}>Name </Text>
                <Text color={'#413C6D'}>Untitled_Video_20232509 </Text> <EditIcon color={'#413C6D'} />
            </Box>
            <Box></Box>
        </Stack>
     );
}
 
export default Ready;