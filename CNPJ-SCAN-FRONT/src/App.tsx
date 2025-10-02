import { Box, Button, Heading, VStack } from '@chakra-ui/react'
import React from 'react';
import Header from './components/ui/header';
import Footer from './components/ui/footer'; 

function App() {
  return (
     <VStack w="100%" minHeight="100vh" justifyContent="space-between">
      
     
      <Header title="CNPJ Scan" />
        
      <Box flex="1" p={8}>
   
      </Box>

      <Footer 
        title="CNPJ Scan" 
        copyrightText="Grupo 3 NEXT"
      />
    </VStack>
  )
}

export default App;