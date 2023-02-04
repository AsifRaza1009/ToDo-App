"use client"
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'

import { Box } from "@chakra-ui/react";
import ToDo from "./ToDo";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <Box bg= "ThreeDShadow" minH="100vh" minW="100wh"
  textAlign='center' display='flex' flexDirection='column' alignItems='center' justifyContent='center' > 
    <ToDo />  
    </Box>
    
  )
}

