'use client'
import { Stack, Box, Img, Text, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <Stack direction={'row'} pr={'50px'} pl={'50px'} pt={'20px'} pb={'20px'} m={'auto'} borderBottom={'2px solid'} borderColor={'#dddddd'}>
            {/** logo */}
            <Box w={'25%'}>
                <Link href={'./'}><Img src="/logo.png" /></Link>
            </Box>

            {/** nav items */}
            <Box m={'auto'} w={'50%'}>
                <Stack direction={'row'} m={'auto'}>
                    <Box w={'25%'} m={'auto'}>
                        <Text color={'#100A42'}>Features</Text>
                    </Box>
                    <Box w={'25%'} m={'auto'}>
                        <Text color={'#100A42'}>How It Works</Text>
                    </Box>
                </Stack>
            </Box>

            {/** login link */}
            <Box m={'auto'} w={'25%'}>
                <Link href={'./auth'}><Heading size='xs' color={'#100A42'} textAlign={'center'} float={'right'}>Get Started</Heading></Link>
            </Box>
        </Stack>
    );
}

export default Navbar;