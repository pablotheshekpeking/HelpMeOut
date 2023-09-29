'use client'
import { Stack, Box, Img, Text, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <Stack direction={'row'} p={'20px'} m={'auto'}>
            {/** logo */}
            <Box w={'25%'}>
                <Link href={'./'}><Img src="/logo.png" /></Link>
            </Box>

            {/** nav items list */}
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