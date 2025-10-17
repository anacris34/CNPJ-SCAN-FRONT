/**
 * DataTable Component - Dynamic Table with API Integration
 * Path: C:\Users\Pedro\Documents\vscode\NeXT\Projeto_CS\CNPJ-SCAN-FRONT\src\components\ui\DataTable.tsx
 * 
 * Componente de tabela dinâmica que se conecta com FastAPI
 */

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
  /** Callback executado quando os dados são carregados */
  onDataLoaded?: (data: DataRow[]) => void;
  /** Filtros personalizados para enviar na requisição */
  filters?: Record<string, any>;
  /** Título da tabela */
  title?: string;
  /** Mostrar botão de download CSV */
  showDownloadButton?: boolean;
  /** Altura mínima da tabela */
  minHeight?: string;
}

function DataTable({
  onDataLoaded,
  filters = {},
  title = 'Dados Extraídos',
  showDownloadButton = true,
  minHeight = '400px',
}: DataTableProps) {
  const [data, setData] = useState<DataRow[]>([]);
  const [columns, setColumns] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [downloadingCSV, setDownloadingCSV] = useState(false);

  /**
   * Função para buscar dados da API
   */
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

  // Carregar dados ao montar o componente
  useEffect(() => {
    loadData();
  }, []);

  // Recarregar dados se os filtros mudarem
  useEffect(() => {
    if (Object.keys(filters).length > 0) {
      loadData();
    }
  }, [JSON.stringify(filters)]);

  /**
   * Renderização: Loading State
   */
  if (loading) {
    return (
      <Box minH={minHeight}>
        <Flex justify="center" align="center" h="100%" direction="column" gap={4}>
          <Spinner size="xl" color="blue.500" />
          <Text color="gray.600" fontSize="sm">
            Carregando dados do servidor...
          </Text>
        </Flex>
      </Box>
    );
  }

  /**
   * Renderização: Error State
   */
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
          <Text color="red.600" fontWeight="semibold" textAlign="center">
            {error}
          </Text>
          <Button colorScheme="red" variant="outline" onClick={loadData} size="sm">
            Tentar Novamente
          </Button>
        </Flex>
      </Box>
    );
  }

  /**
   * Renderização: Empty State
   */
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
          <Button colorScheme="blue" variant="ghost" onClick={loadData} size="sm">
            Recarregar
          </Button>
        </Flex>
      </Box>
    );
  }

  /**
   * Renderização: Tabela com Dados
   */
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

      {/* Tabela */}
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

        {/* Footer com contador */}
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