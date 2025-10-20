import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Flex,
  Spinner,
  Text,
  Table,
} from '@chakra-ui/react';
import {
  fetchExtractedData,
  type DataRow,
} from '../../api/post_csv';

interface DataTableProps {
  onDataLoaded?: (data: DataRow[]) => void;
  filters?: Record<string, any>;
  title?: string;
  minHeight?: string;
}

function DataTable({
  onDataLoaded,
  filters = {},
  title = 'Dados Extraídos',
  minHeight = '400px',
}: DataTableProps) {
  const [data, setData] = useState<DataRow[]>([]);
  const [columns, setColumns] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchExtractedData(filters);

      if (result.length > 0) {
        const cols = Object.keys(result[0]);
        setColumns(cols);
        setData(result);
        setLastUpdate(new Date());

        // Callback para componente pai
        if (onDataLoaded) {
          onDataLoaded(result);
        }
      } else {
        setColumns([]);
        setData([]);
        if (onDataLoaded) {
          onDataLoaded([]);
        }
      }
    } catch (err: any) {
      console.error('Erro ao carregar dados:', err);
      setError(err.message || 'Erro ao carregar dados');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (Object.keys(filters).length > 0) {
      loadData();
    }
  }, [JSON.stringify(filters)]);


  if (loading) {
    return (
      <Box minH={minHeight}>
        <Flex justify="center" align="center" h="100%" direction="column" gap={4}>
          <Spinner size="xl" color="blue.500" />
          <Text color="white" fontSize="sm">
            Carregando dados do servidor...
          </Text>
        </Flex>
      </Box>
    );
  }

  if (error) {
    return (
      <Box minH={minHeight}>
        <Flex
          justify="center"
          align="center"
          h="100%"
          direction="column"
          gap={4}
          bg="red.50"
          borderRadius="lg"
          p={8}
        >
          <Text color="gray.300" fontWeight="semibold" textAlign="center">
            {error}
          </Text>
          <Button variant="outline" onClick={loadData} size="sm">
            Tentar Novamente
          </Button>
        </Flex>
      </Box>
    );
  }

  if (data.length === 0) {
    return (
      <Box minH={minHeight}>
        <Flex
          justify="center"
          align="center"
          direction="column"
          bg="gray.50"
          borderRadius="lg"
        >
          <Text fontSize="4xl">📭</Text>
          <Text color="gray.600" fontWeight="semibold">
            Nenhum dado disponível
          </Text>
          <Button boxAlign="center" colorScheme="blue" variant="ghost" onClick={loadData} size="sm">
            Recarregar
          </Button>
        </Flex>
      </Box>
    );
  }

  return (
    <Box w="100%" h="100%">
      {/* Header da Tabela */}
      <Flex
        bg="gray.50"
        px={6}
        py={4}
        borderRadius="lg"
        mb={4}
        justify="space-between"
        align="center"
        flexWrap="wrap"
        gap={4}
      >
        <Flex align="center" gap={3}>
          <Box>
            <Text fontWeight="bold" color="gray.700" fontSize="lg">
              {title}
            </Text>
            {lastUpdate && (
              <Text fontSize="xs" color="gray.500">
                Atualizado às {lastUpdate.toLocaleTimeString('pt-BR')}
              </Text>
            )}
          </Box>
        </Flex>

        <Flex gap={2}>
          <Button
            size="sm"
            colorScheme="blue"
            variant="outline"
            onClick={loadData}
          >        
            Recarregar
          </Button>
        </Flex>
      </Flex>

      <Box
        bg="white"
        borderRadius="lg"
        overflow="hidden"
        border="1px"
        borderColor="gray.200"
      >
        <Box overflowX="auto">
          <Table.Root size="sm" variant="line">
            <Table.Header>
              <Table.Row bg="blue.50">
                {columns.map((column) => (
                  <Table.ColumnHeader
                    key={column}
                    color="blue.700"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    {column.replaceAll('_', ' ')}
                  </Table.ColumnHeader>
                ))}
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {data.map((row, i) => (
                <Table.Row
                  key={i}
                  _hover={{ bg: 'blue.50' }}
                >
                  {columns.map((col) => (
                    <Table.Cell key={col}>
                      {typeof row[col] === 'object'
                        ? JSON.stringify(row[col])
                        : String(row[col] ?? '')}
                    </Table.Cell>
                  ))}
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>

        <Flex
          justify="space-between"
          align="center"
          bg="gray.50"
          borderColor="gray.200"
        >
          <Text fontSize="sm" color="gray.600">
            Total de registros: <strong>{data.length}</strong>
          </Text>

          <Text fontSize="xs" color="gray.500">
            {columns.length} colunas
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default DataTable;