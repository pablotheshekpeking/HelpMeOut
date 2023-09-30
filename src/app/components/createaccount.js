'use client'

import React from "react";
import { Stack, Box, Text, Heading, Button } from '@chakra-ui/react';
const Create = () => {
    return ( 
        <Stack bg={'#E7E7ED'} opacity={'20%'} mt={'60px'} mb={'60px'}>
            <Box textAlign={'center'} m={'auto'}>
                <Text fontWeight={'bold'} color={'#141414'}>To ensure the availability and privacy of your video, we recommend saving it to your account.</Text>
                <Button bg={'#120B48'} p={'20px'} mt={'50px'} mb={'50px'}>
                    Send
                </Button>
                <Text color={'#7E7E7E'}>Don’t have an account? <Text bg={'#120B48'}>Create account</Text></Text> 
            </Box>
        </Stack>
     );
}
 
export default Create;