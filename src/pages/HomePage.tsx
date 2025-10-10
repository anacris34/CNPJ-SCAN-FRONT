import { Box, Center, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/ui/header';
import Footer from '../components/ui/footer';
import MeuBotao from '../components/ui/button';
import Txtespec from '../components/ui/text_descriptions';


function HomePage() {
  return (
	// 1. Contêiner Principal: Deve ser um Flexbox (VStack/Flex) com altura total.
	<VStack w="100%" minH="100vh"  align="center"gap={10}>
		<Header title="CNPJ Scan" />

		<Box w="100%" textAlign="center">
		<Heading size="3xl" mb ="20px">
			Converta PDF para EXCEL.
		</Heading>
			<Center mb="90px">
				<MeuBotao/>
			</Center>
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