'use client'

import { Stack, Box, Text, Heading, Img, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import { EditIcon, CopyIcon } from '@chakra-ui/icons';
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
                <Heading color={'#141414'} size={'lg'} mb={'20px'}>Your video is ready!</Heading>

                <Text fontSize={'15px'}>Name </Text>
                <Text color={'#413C6D'} fontWeight={'bold'} mb={'50px'}>Untitled_Video_20232509 <EditIcon color={'#413C6D'} /> </Text>

                {/** enter email */}
                <InputGroup size='md' mb={'50px'}>
                    <Input
                        pr='4.5rem'
                        type='email'
                        placeholder='enter email of receiver'
                        w={'90%'}
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' bg={'#605C84'}>
                            Send
                        </Button>
                    </InputRightElement>
                </InputGroup>
                
                {/** video url */}
                <Heading color={'#141414'} size={'md'}>Video Url</Heading>
                <InputGroup size='md' mb={'50px'}>
                    <Input
                        pr='4.5rem'
                        type='email'
                        placeholder='https://www.helpmeout/Untitled_Video_20232509'
                        w={'90%'}
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' borderColor={'#605C84'} bg={'white'}>
                            <CopyIcon /> Copy
                        </Button>
                    </InputRightElement>
                </InputGroup>


            </Box>
            <Box></Box>
        </Stack>
    );
}

export default Ready;