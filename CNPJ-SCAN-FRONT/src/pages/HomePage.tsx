import { Box, Flex, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/ui/header';
import Footer from '../components/ui/footer';
import MeuBotao from '../components/ui/button';
import Txtespec from '../components/ui/text_descriptions';


function HomePage() {
return (
// 1. Contêiner Principal: Deve ser um Flexbox (VStack/Flex) com altura total.
<VStack w="100%" h="100%" align="center" justify="center" gap="10px">  
 {/* Header */}
<Header title="CNPJ Scan" />

{/* 2. Conteúdo Principal: Deve ter flexGrow={1} para ocupar o espaço restante. */}
<Box 
 flexGrow={8} 
 p={8} 
 w="100%"
textAlign="center" 
 >
 <Heading size="3xl" mb={1}>
 Converta PDF para EXCEL.
</Heading>
        
        {/* INSERÇÃO DO TEXTO "Powered by CESAR School" */}
        <Box 
            fontSize="lg" 
            color="white" 
            mb={8} // Adiciona margem abaixo para separar do próximo elemento (Flex/MeuBotao)
            
        >
            Powered by CESAR School
        </Box>

<Flex
align='center'
 justify='center'
 >
 <MeuBotao/>
 </Flex>
 <Txtespec/>
</Box>

 {/* 3. Footer: Deve ser o ÚLTIMO elemento e tem o 'mt="auto"' interno. */}
<Footer 
 title="CNPJ Scan" 
 copyrightText="Grupo 3 NEXT"
/>
 </VStack>
 )
}

export default HomePage;