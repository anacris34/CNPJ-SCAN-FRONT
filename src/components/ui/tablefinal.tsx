import React, { useState, useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Heading,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  Flex,
  Text
} from '@chakra-ui/react';

function DynamicTable() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para buscar dados do backend
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Substitua pela URL do seu backend
      const response = await fetch('urlbackend');
      
      if (!response.ok) {
        throw new Error('Erro ao buscar dados');
      }
      
      const result = await response.json();
      
      // Se houver dados, extrair as colunas dinamicamente
      if (result.length > 0) {
        // Pegar as chaves do primeiro objeto como colunas
        const cols = Object.keys(result[0]);
        setColumns(cols);
        setData(result);
      }
      
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Buscar dados ao montar o componente
  useEffect(() => {
    fetchData();
  }, []);

  // Estado de carregamento
  if (loading) {
    return (
      <Flex justify="center" align="center" h="400px">
        <Spinner size="xl" color="blue.500" thickness="4px" />
      </Flex>
    );
  }

  // Estado de erro
  if (error) {
    return (
      <Box p={6}>
        <Alert status="error" borderRadius="md">
          <AlertIcon />
          <Box>
            <AlertTitle>Erro ao carregar dados</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Box>
        </Alert>
        <Button mt={4} colorScheme="white" onClick={fetchData}>
          Tentar Novamente
        </Button>
      </Box>
    );
  }

  // Estado sem dados
  if (data.length === 0) {
    return (
      <Box p={6}>
        <Alert status="info" borderRadius="md">
          <AlertIcon />
          <AlertDescription>Nenhum dado disponível</AlertDescription>
        </Alert>
      </Box>
    );
  }

  return (
    <Box h="100%" w="100%">
      <Heading mb="20px"
          fontSize="lg"
          fontWeight="bold"
          color="white"
          alignContent="center">
        Os dados chegaram!
      </Heading>
      
      <TableContainer bg="white" borderRadius="lg" boxShadow="md">
        <Table variant="simple" colorScheme="white">
          <Thead bg="gray.100">
            <Tr>
              {columns.map((column) => (
                <Th key={column} color="#036DC5" textTransform="capitalize">
                  {column.replace('_', ' ')}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row, rowIndex) => (
              <Tr key={rowIndex} _hover={{ bg: 'gray.50' }}>
                {columns.map((column) => (
                  <Td key={column}>
                    {typeof row[column] === 'object'
                      ? JSON.stringify(row[column])
                      : row[column]}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      
      <Button mt={4} colorScheme="white" textAlign="Center" onClick={fetchData}>
        <Text color="#036DC5"> Recarregar Dados</Text>
      </Button>
    </Box>
  );
}

export default DynamicTable;