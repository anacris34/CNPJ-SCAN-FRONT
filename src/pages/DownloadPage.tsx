import { VStack, Flex, Heading, Box } from "@chakra-ui/react";
import Home from "./components/ui/menu";
import TabelaDinamica from "./components/ui/TABELA";
import DownloadCSV from "./components/ui/Download";

function App() {
  return (
    <VStack w="100%" minHeight="100vh" align="center">
      <Box flexGrow={8} p={8} w="100%" textAlign="center">
        <Heading size="3xl" mb={8}>
          Converta PDF para EXCEL.
        </Heading>
        <TabelaDinamica />
        {/* Botões lado a lado */}
        <Flex align="center" justify="center" gap={10} mt={4}>
          <Home />
          <DownloadCSV />
        </Flex>
      </Box>
    </VStack>
  );
}

export default App;
