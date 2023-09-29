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
    <Link href={'../'}><Img src='/logo.png' /></Link>
    <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
      >
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
              <Stack align={'center'}>
                  <Heading fontSize={'4xl'}>Log in or Sign up</Heading>
                  <Text fontSize={'lg'} color={'gray.600'}>
                      Join millions of others in sharing succesful moves on  <Text color={'grey'}>HelpMeOut</Text>
                  </Text>
              </Stack>
              <Box
                  bg={useColorModeValue('white', 'gray.700')}
                  p={8}
              >
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
                              Sign in
                          </Button>
                      </Stack>
                  </Stack>
              </Box>
          </Stack>
      </Flex></>
  );
}
