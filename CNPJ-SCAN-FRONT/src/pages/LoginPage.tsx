import { Box, Flex, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/ui/header';
import Footer from '../components/ui/footer';
import Login from '../components/ui/Login';


function LoginPage() {
  return (
	// 1. Contêiner Principal: Deve ser um Flexbox (VStack/Flex) com altura total.
	<VStack w="100%" minHeight="100vh" align="center"> 
	  
	  {/* Header */}
	  <Header title="CNPJ Scan" />
		
	  {/* 2. Conteúdo Principal: Deve ter flexGrow={1} para ocupar o espaço restante. */}
	  	<Box 
		flexGrow={8} 
		p={8} 
		w="100%"
		textAlign="center" 
	  	>
		<Heading size="3xl" mb={8}>
			Login
		</Heading>

		<Flex
		align='center'
		justify='center'
		>
			</Login>
		</Flex>

	  	</Box>
	  	<Footer 
		title="CNPJ Scan" 
		copyrightText="Grupo 3 NEXT"
	  	/>
	</VStack>
  )
}

export default LoginPage;