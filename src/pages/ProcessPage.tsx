import { Box, Heading, Flex, VStack } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/ui/header';
import Footer from '../components/ui/footer';
import SelectBox from '@/components/ui/selectbox';
import Tabela from '@/components/ui/tabela';

function Process() {
  return (
    <VStack w="100%" minH="100vh" align="center" gap="10px">
      <Header title="CNPJ Scan" />
        
        {/* 2. Conteúdo Principal: Deve ter flexGrow={1} para ocupar o espaço restante. */}
        <Box 
        flexGrow={1} 
        p={8} 
        w="100%"
        textAlign="center" 
        >
        <Heading size="3xl" mb={8}>
          Estamos Trabalhando...
        </Heading>

        <Flex
        align='center'
        justify='center'
        >
        <Tabela/>
        </Flex>

        <Flex
        align='center'
        justify='center'
        >
        <SelectBox/>
        </Flex>

        </Box>
    
        {/* 3. Footer: Deve ser o ÚLTIMO elemento e tem o 'mt="auto"' interno. */}
        <Footer 
        title="Pagina 2" 
        copyrightText="Grupo 3 NEXT"
        />
      </VStack>
  )
}

export default Process;