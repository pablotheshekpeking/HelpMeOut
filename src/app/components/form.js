'use client'

import React from 'react';
import {
    Flex,
    Box,
    Img,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import Link from "next/link";

export default function Form() {
    return (
        <>
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
            >
                <Link href={'../'}><Img src='/logo.png' pl={'100px'} /></Link>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'} direction={'column'}>
                        <Heading fontSize={'4xl'}>Log in or Sign up</Heading>
                        <Text fontSize={'sm'} color={'gray.600'} textAlign={'center'}>
                            Join millions of others in sharing succesful moves on  <Text color={'grey'}>HelpMeOut.</Text>
                        </Text>
                        {/** other login */}
                        <Box border={'1px solid'} borderColor={'black'} borderRadius={'20px'} mb={'20px'} w={'100%'}>
                            <Stack direction={'row'} p={'20px'} w={'100%'}>
                                <Box><Img src='/Google.png' /></Box>
                                <Box><Text>Continue with Google</Text></Box>
                            </Stack>
                        </Box>

                        <Box border={'1px solid'} borderColor={'black'} borderRadius={'20px'} w={'100%'}>
                            <Stack direction={'row'} p={'20px'} w={'100%'}>
                                <Box><Img src='/Facebook.png' /></Box>
                                <Box><Text>Continue with Facebook</Text></Box>
                            </Stack>
                        </Box>
                    </Stack>
                    <Box
                        bg={useColorModeValue('white', 'gray.700')}
                        p={8}
                    >
                        <Img src='/or.png' w={'100%'} pt={'50px'} pb={'50px'} />
                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel>Email </FormLabel>
                                <Input type="email" placeholder='Enter your email address' />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input type="password" placeholder='Enter your password' />
                            </FormControl>
                            <Stack spacing={10}>
                                <Button
                                    bg={'#100A42'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}
                                >
                                    Sign up
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex></>
    );
}
