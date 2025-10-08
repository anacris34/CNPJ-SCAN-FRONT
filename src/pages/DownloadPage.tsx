import { VStack, Flex, Heading, Box } from "@chakra-ui/react";
import Home from "../components/ui/casa";
import Tabela from "../components/ui/tabela";
import DownloadCSV from "../components/ui/download";


function Download() {
  return (
    <VStack w="100%" minHeight="100vh" align="center" gap={10}>
      <Header title="CNPJ Scan" />
      <Box p={10} w="100%" textAlign="center" marginEnd={5}>
        <Heading size="3xl">Converta PDF para EXCEL</Heading>
        <Text mb="50px" fontSize="md" color="white">
          Powerd by Cesar School.
        </Text>
        <Text mb="5px" fontSize="lg" fontWeight="bold" color="white">
          Os dados foram convertidos
        </Text>
        <Center>
          <TabelaDinamica />
        </Center>

        <Flex align="top-center" justify="center" gap={7} mt={2}>
          <Home />
          <DownloadCSV />
        </Flex>
      </Box>
	  	<Footer 
        title="CNPJ Scan" 
        copyrightText="Grupo 3 NEXT"	/>      
    </VStack>
  );
}

export default Download;
