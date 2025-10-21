import { Box, Heading, Spinner, Center, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import Header from '../ui/header'
import Footer from '../ui/footer'
import Txtespec from '../ui/text_descriptions' 


const MotionText = motion(Text);

function LoadingPage() {
  return (
	//  Contêiner Principal: Deve ser um Flexbox (VStack/Flex) com altura total.
	<VStack w="100%" minHeight="100vh" align="center"> 
	  
	  {/* Header */}
	  <Header title="CNPJ Scan" />
		
	  {/* Conteúdo Principal: Ocupa o espaço restante e centraliza horizontalmente e verticalmente. */}
	  <Center 
			flexGrow={1} 
			p={8}
			w="100%"
	  >
		{/* Box de Conteúdo: Centralizada pela 'Center' acima. Limita a largura do conteúdo. */}
		<Box
			w={{ base: "90%", md: "60%" }}
			textAlign="center"
		>
			<Heading
			 size="3xl"
			 mb={2}
			 whiteSpace={{ base: "normal", md: "nowrap"}}
			>
				Converta PDF para EXCEL.
			</Heading>

			<Text
				fontSize="lg"
				color="white"
				mb={8}
			>
				Powered by Cesar School
			</Text>
		</Box>
	  </Center>
	  
	  <Box 
		flexGrow={8} 
		p={8} 
		w="100%"
		textAlign="center"
		display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
		mt={-20} 
        
	  >
		{/* Spinner and MotionText */}
		<Spinner size="lg" />

		<MotionText
		 mt={4}
		 fontSize="lg"
		 initial={{ opacity: 0, y: 10 }}
		 animate={{ opacity: [0.6, 1, 0.6] }}
		 transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
		>
		 Estamos trabalhando...
		</MotionText>

		{/* Retângulo branco abaixo da mensagem de carregamento */}
		<Box
		mt={10} // margem superior para afastar da mensagem
		w={{ base: "90%", md: "60%", lg: "40%" }} // largura responsiva
		h="150px" // altura fixa, você pode ajustar
		bg="whiteAlpha.900"
		borderRadius="2xl"
		boxShadow="none"
		/>

		{/* Adicionando o componente Txtespec abaixo do retângulo branco */}
        <Box mt={8} w="100%" px={{ base: 4, md: 8 }}>
          <Txtespec /> {/* Aqui você adiciona os textos informativos */}
        </Box>
			
	  </Box>

	  {/* Footer: Deve ser o ÚLTIMO elemento e tem o 'mt="auto"' interno. */}
	  <Footer 
		title="CNPJ Scan" 
		copyrightText="Grupo 3 NEXT"
	  />
	</VStack>
  );
}

export default LoadingPage