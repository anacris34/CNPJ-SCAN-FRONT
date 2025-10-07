import { Box, Heading, VStack, Center, Text } from '@chakra-ui/react';
import React from 'react';
import Header from './components/ui/header';
import Footer from './components/ui/footer';
import MeuBotao from './components/ui/button';

function App() {
    return (
        <VStack w="100%" minHeight="100vh" spacing={0} align="stretch"> 
        
            {/* Header */}
            <Header title="CNPJ Scan" />
            
            {/* 2. Conteúdo Principal: Ocupa o espaço restante e centraliza horizontalmente e verticalmente. */}
            <Center 
                flexGrow={1} 
                p={8} 
            >
                {/* 3. Box de Conteúdo: Centralizada pela 'Center' acima. Limita a largura do conteúdo. */}
                <Box 
                    w={{ base: "90%", md: "60%" }}
                    textAlign="center"
                >
                    <Heading size="3xl" mb={2}> 
                        Converta PDF para EXCEL.
                    </Heading>
                    
                    <Text 
                        fontSize="lg"
                        color="white"
                        mb={8}
                    >
                        Powered by Cesar School
                    </Text>
                
                    <MeuBotao
                        texto="Selecionar Arquivo PDF"
                        onClick={() => console.log("Arquivos selecionados!")}
                        size="lg"
                    />
                </Box>
            </Center>
            
            {/* 4. Footer */}
            <Footer 
                title="CNPJ Scan" 
                copyrightText="Grupo 3 NEXT"
            />
        </VStack>
    )
}

export default App;