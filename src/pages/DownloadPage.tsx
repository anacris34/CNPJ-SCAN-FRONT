import { VStack, Flex, Heading, Box } from "@chakra-ui/react";
import Home from "../components/ui/casa";
import Tabela from "../components/ui/tabela";
import DownloadCSV from "../components/ui/download";


function Download() {
return (
    <VStack w="100%" h="100%" align="center" justify="center" gap="10px">
      <Header title="CNPJ Scan" />
      <Box p="20px" w="100%" textAlign="center">
        <Heading size="3xl" spaceY={-5}>
          Converta PDF para EXCEL
        </Heading>
        <Text mb="50px" fontSize="md" color="white">
          Powered by Cesar School
        </Text>

        <Center mb="20px">
          <TabelaDinamica />
        </Center>

        <Flex align="top-center" justify="center" gap={7} mt={2}>
          <Home />
          <DownloadCSV />
        </Flex>
      </Box>
      <Footer title="CNPJ Scan" copyrightText="Grupo 3 NEXT" />
    </VStack>
  );
}

export default Download;