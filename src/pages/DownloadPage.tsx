import { VStack, Flex, Heading, Box } from "@chakra-ui/react";
import Home from "../components/ui/casa";
import Tabela from "../components/ui/tabela";
import DownloadCSV from "../components/ui/download";

function Download() {
  return (
    <VStack w="100%" minHeight="100vh" align="center">
      <Box flexGrow={8} p={8} w="100%" textAlign="center">
        <Heading size="3xl" mb={8}>
          Converta PDF para EXCEL.
        </Heading>
        <Tabela />
        <Flex align="center" justify="center" gap={10} mt={4}>
          <Home />
          <DownloadCSV />
        </Flex>
      </Box>
	  </VStack>
  );
}

export default Download;
