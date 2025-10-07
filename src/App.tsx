import { Box, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import Header from './components/ui/header';
import Footer from './components/ui/footer';
import MeuBotao from './components/ui/button';
import MenuCustom from './components/ui/menu';
import TabelaDinamica from './components/ui/table';

function App() {
  return (
    // 1. Contêiner Principal: Deve ser um Flexbox (VStack/Flex) com altura total.
    <VStack w="100%" minHeight="100vh" spacing={0} align="stretch"> 
      
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
            Converta PDF para EXCEL.
        </Heading>
    
        <MeuBotao
          texto="Selecionar Arquivo PDF"
          onClick={() => console.log("Arquivos selecionados!")}
          size="lg"
        />
        <MenuCustom/>
        <TabelaDinamica/>
      </Box>

      {/* 3. Footer: Deve ser o ÚLTIMO elemento e tem o 'mt="auto"' interno. */}
      <Footer 
        title="CNPJ Scan" 
        copyrightText="Grupo 3 NEXT"
      />
    </VStack>
  )
}

export default App;