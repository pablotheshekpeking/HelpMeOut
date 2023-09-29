'use client'

import { Stack, Box, Text, Heading, Img, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
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
            <Box m={'auto'}>
                <Heading color={'#141414'} size={'md'} mb={'50px'}>Your video is ready!</Heading>

                <Text fontSize={'15px'}>Name </Text>
                <Text color={'#413C6D'} fontWeight={'bold'}>Untitled_Video_20232509 <EditIcon color={'#413C6D'} /> </Text>

                {/** enter email */}
                <InputGroup size='md' mb={'50px'}>
                    <Input
                        pr='4.5rem'
                        type='email'
                        placeholder='enter email of receiver'
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' bg={'#605C84'}>
                            Send
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Box>
            <Box m={'auto'}></Box>
        </Stack>
    );
}

export default Ready;