import React, { useState, useEffect } from 'react';
import {Table,Thead,Tbody,Tr,Th,
  Td,TableContainer,Box,Heading,
  Spinner,Alert,AlertIcon,AlertTitle,
  AlertDescription,Button,Flex, Text
} from '@chakra-ui/react';

/**
 * Props do componente DynamicTable
 * - onDataLoaded: função opcional para enviar os dados carregados
 *   ao componente pai (para exportar o CSV, por exemplo)
 */
interface DynamicTableProps {
  onDataLoaded?: (data: any[]) => void;
}

/**
 * Componente principal da tabela dinâmica:
 * - Busca dados de uma API usando fetch()
 * - Mostra status de carregamento, erro e sucesso
 * - Aceita callback onDataLoaded para sincronizar dados com o botão de download
 */
function DynamicTable({ onDataLoaded }: DynamicTableProps) {
  const [data, setData] = useState<any[]>([]);
  const [columns, setColumns] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * 🔹 NOVO: fetchData agora tem controle de timeout (1 minuto)
   * - Usa AbortController para cancelar o fetch após 60 segundos
   * - Exibe mensagem clara se o tempo limite for excedido
   */
  const fetchData = async () => {
    setLoading(true);
    setError(null);

    // 🔹 NOVO: cria um controlador para abortar a requisição se demorar demais
    const controller = new AbortController();

    // 🔹 NOVO: define o tempo máximo de espera (60.000 ms = 1 minuto)
    const timeout = setTimeout(() => {
      controller.abort(); // cancela a requisição
    }, 60000);

    try {
      const apiUrl = `${import.meta.env.VITE_API_BASE_PATH}/dados_tabela`;

      // 🔹 NOVO: passa o signal para o fetch
      const response = await fetch(apiUrl, { signal: controller.signal });

      // Se a resposta chegou antes do timeout, cancela o timer
      clearTimeout(timeout);

      if (!response.ok) throw new Error('Erro ao buscar dados do servidor');

      const result = await response.json();

      // Caso existam dados válidos
      if (Array.isArray(result) && result.length > 0) {
        const cols = Object.keys(result[0]);
        setColumns(cols);
        setData(result);
        if (onDataLoaded) onDataLoaded(result);
      } else {
        setColumns([]);
        setData([]);
        if (onDataLoaded) onDataLoaded([]);
      }

      setLoading(false);
    } catch (err: any) {
      // 🔹 NOVO: sempre cancela o timer mesmo se houver erro
      clearTimeout(timeout);
      console.error('Erro ao buscar dados:', err);

      // 🔹 NOVO: trata o erro específico de timeout
      if (err.name === 'AbortError') {
        setError('Tempo limite de 60 segundos excedido. Tente novamente.');
      } else {
        setError(err.message || 'Erro desconhecido ao buscar dados');
      }

      setLoading(false);
    }
  };

  // 🔁 Busca dados automaticamente ao montar o componente
  useEffect(() => {
    fetchData();
  }, []);

  // 🌀 Estado de carregamento
  if (loading) {
    return (
      <Flex justify="center" align="center" h="400px">
        <Spinner size="xl" color="#036DC5" thickness="4px" />
      </Flex>
    );
  }

  // ⚠️ Estado de erro
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

        <Button mt={4} bg="#036DC5" color="white" onClick={fetchData}>
          Tentar Novamente
        </Button>
      </Box>
    );
  }

  // ℹ️ Estado sem dados
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

  // 🧩 Renderização da tabela
  return (
    <Box h="100%" w="100%">
      <Heading
        mb="20px"
        fontSize="lg"
        fontWeight="bold"
        color="white"
        textAlign="center"
      >
        Os dados chegaram!
      </Heading>

      <TableContainer bg="white" borderRadius="lg" boxShadow="md">
        <Table variant="simple">
          <Thead bg="gray.100">
            <Tr>
              {columns.map((column) => (
                <Th key={column} color="#036DC5" textTransform="capitalize">
                  {column.replaceAll('_', ' ')}
                </Th>
              ))}
            </Tr>
          </Thead>

          <Tbody>
            {data.map((row, i) => (
              <Tr key={i} _hover={{ bg: 'gray.50' }}>
                {columns.map((col) => (
                  <Td key={col}>
                    {typeof row[col] === 'object'
                      ? JSON.stringify(row[col])
                      : row[col]}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Button mt={4} size="sm" rounded = "full" onClick={fetchData}
        bg="#036DC5" color="white" boxShadow = "sm">
        <Text>Recarregar Dados</Text>
      </Button>
    </Box>
  );
}

export default DynamicTable;
