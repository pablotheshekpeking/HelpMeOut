'use client'

import { Stack, Box, Text, Heading, Img, Input, InputGroup, InputRightElement, Button, Divider } from '@chakra-ui/react';
import { EditIcon, CopyIcon } from '@chakra-ui/icons';
import React from 'react';
const Ready = () => {
    return (
        <Stack
            direction={['column', 'column', 'row', 'row']}
            minH={'100vh'}
            p={'50px'}
        >
            {/** left side */}
            <Box w={['100%', '1005', '50%', '50%']}>
                <Heading color={'#141414'} size={'lg'} mb={'20px'}>Your video is ready!</Heading>

                <Text fontSize={'15px'}>Name </Text>
                <Text color={'#413C6D'} fontWeight={'bold'} mb={'50px'}>Untitled_Video_20232509 <EditIcon color={'#413C6D'} /> </Text>

                {/** enter email */}
                <InputGroup size='md' mb={'50px'} w={'90%'}>
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
                
                {/** video url */}
                <Heading color={'#141414'} size={'sm'} mb={'10px'}>Video Url</Heading>
                <InputGroup size='md' mb={'50px'} w={'90%'}>
                    <Input
                        pr='4.5rem'
                        type='email'
                        placeholder='https://www.helpmeout/Untitled_Video_20232509'
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' border={'1px solid'} borderColor={'#605C84'} bg={'white'} color={'#605C84'}>
                            <CopyIcon color={'#605C84'} /> Copy
                        </Button>
                    </InputRightElement>
                </InputGroup>

                {/** share your video */}
                <Heading color={'#141414'} size={'sm'} mb={'10px'}>Share your video</Heading>
                <Stack direction={'row'} w={'75%'}>
                    <Box><Img src='/fbbutton.png' /></Box>
                    <Box><Img src='/whbutton.png' /></Box>
                    <Box><Img src='/telbutton.png' /></Box>
                </Stack>


            </Box>
            
            {/** right side */}
            <Box w={['100%', '1005', '50%', '50%']} borderLeft={'2px solid'} borderColor={'#BBBBBB'}>
                <Stack direction={'column'} p={'20px'}>
                    <Box mb={'50px'}><Img src='/video.png' /></Box>
                    <Box><Img src='/transcript.png' /></Box>
                </Stack>
            </Box>
        </Stack>
    );
}

export default Ready;