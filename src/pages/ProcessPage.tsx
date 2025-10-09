import { Box, Heading, Flex, VStack } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/ui/header';
import Footer from '../components/ui/footer';
import MeuBotao from '../components/ui/button';
import SelectBox from '@/components/ui/selectbox';
import Tabela from '@/components/ui/tabela';

function Process() {
  return (
      // 1. Contêiner Principal: Deve ser um Flexbox (VStack/Flex) com altura total.
      <VStack w="100%" h="100%" align="center" justify="center" gap="10px"> 
        
        {/* Header */}
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
        <txtespec/>
        <Footer 
        title="Pagina 2" 
        copyrightText="Grupo 3 NEXT"
        />
      </VStack>
  )
}

export default Process;