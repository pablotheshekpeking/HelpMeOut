'use client'

import React from "react";
import { Stack, Box, Text, Heading, Button } from '@chakra-ui/react';
const Create = () => {
    return ( 
        <Stack bg={'rgba(231, 231, 237, 0.20)'} mt={'50px'} mb={'50px'}>
            <Box textAlign={'center'} m={'auto'} pt={'50px'} pb={'50px'}>
                <Text fontWeight={'bold'} color={'#141414'}>To ensure the availability and privacy of your video, we recommend saving it to your account.</Text>
                <Button bg={'#120B48'} p={'20px'} mt={'20px'} mb={'20px'} color={'white'}>
                    Send
                </Button>
                <Text color={'#7E7E7E'}>Don’t have an account? <span style={{color: '#120B48',}}>Create account</span></Text> 
            </Box>
        </Stack>
     );
}
 
export default Create;