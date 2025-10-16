import React, { useState, useEffect } from 'react';
import {
  Table,
  Box,
  Spinner,
  Button,
  Flex,
  Text,
  For
} from '@chakra-ui/react';

interface DynamicTableProps {
  onDataLoaded?: (data: any[]) => void;
}

function DynamicTable({ onDataLoaded }: DynamicTableProps) {
  const [data, setData] = useState<any[]>([]);
  const [columns, setColumns] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 60000);

    try {
      const apiUrl = `${import.meta.env.VITE_API_BASE_PATH}/dados_tabela`;
      const response = await fetch(apiUrl, { signal: controller.signal });
      clearTimeout(timeout);

      if (!response.ok) throw new Error('Erro ao buscar dados do servidor');
      const result = await response.json();

      // ✅ Garante que o formato de retorno seja sempre array
      const validData = Array.isArray(result)
        ? result
        : result?.data || [];

      if (validData.length > 0) {
        const cols = Object.keys(validData[0]);
        setColumns(cols);
        setData(validData);
        if (onDataLoaded) onDataLoaded(validData);
      } else {
        setColumns([]);
        setData([]);
        if (onDataLoaded) onDataLoaded([]);
      }

      setLoading(false);
    } catch (err: any) {
      clearTimeout(timeout);
      console.error('Erro ao buscar dados:', err);
      if (err.name === 'AbortError') {
        setError('Tempo limite de 60 segundos excedido. Tente novamente.');
      } else {
        setError(err.message || 'Erro desconhecido ao buscar dados');
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <Flex justify="center" align="center" h="400px">
        <Spinner size="xl" color="#036DC5" borderWidth="4px" />
      </Flex>
    );
  }

  if (error) {
    return (
      <Box p={6} color="red.500" textAlign="center">
        {error}
      </Box>
    );
  }

  if (data.length === 0) {
    return (
      <Box p={6} color="gray.600" textAlign="center">
        Nenhum dado disponível
      </Box>
    );
  }

  return (
    <Box h="100%" w="100%">
      <Text mb="20px" fontSize="lg" fontWeight="bold" color="white" textAlign="center">
        Os dados chegaram!
      </Text>

      <Box bg="white" borderRadius="lg" boxShadow="md" overflowX="auto">
        <Table.Root>
          <Table.Header bg="gray.100">
            <Table.Row>
              <For each={columns}>
                {(column) => (
                  <Table.ColumnHeader
                    key={column}
                    color="#036DC5"
                    textTransform="capitalize"
                  >
                    {column.replaceAll('_', ' ')}
                  </Table.ColumnHeader>
                )}
              </For>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <For each={data}>
              {(row, i) => (
                <Table.Row key={i} _hover={{ bg: 'gray.50' }}>
                  <For each={columns}>
                    {(col) => (
                      <Table.Cell key={col}>
                        {typeof row[col] === 'object'
                          ? JSON.stringify(row[col])
                          : row[col]}
                      </Table.Cell>
                    )}
                  </For>
                </Table.Row>
              )}
            </For>
          </Table.Body>
        </Table.Root>
      </Box>

      <Button
        variant="ghost"
        size="sm"
        rounded="full"
        onClick={fetchData}
        bg="#036DC5"
        color="white"
        boxShadow="sm"
      >
        <Text>Recarregar Dados</Text>
      </Button>
    </Box>
  );
}

export default DynamicTable;
