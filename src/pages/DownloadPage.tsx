import { VStack, Flex, Heading, Box, Text, Center } from "@chakra-ui/react";
import Home from "../components/ui/casa";
import DynamicTable from "../components/ui/tablefinal";
import Header from '../components/ui/header';
import Footer from '../components/ui/footer';
import DownloadCSV from "../components/ui/download";


function Download() {
  return (
    <VStack w="100%" minH="100vh" align="center">
      <Header title="CNPJ Scan" />
      <Box p="20px" w="100%" textAlign="center">
        <Heading size="3xl" spaceY={-5}>
          Converta PDF para EXCEL
        </Heading>
        <Text mb="40px" fontSize="md" color="white">
          Powered by Cesar School
        </Text>
        <Center>
          <DynamicTable />
        </Center>

        <Flex align="top-center" justify="center" gap={7} mt={2}>
          <Home />
          <DownloadCSV />
        </Flex>
      </Box>
      <Footer 
        title="Página 3" 
        copyrightText="Grupo 3 NEXT"
	  	/>
    </VStack>
  );
}

export default Download;