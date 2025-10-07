import { Table, Box } from "@chakra-ui/react"

const items = [
  { title: "Nome", value: "name" },
  { title: "Data de Abertura", value: "dataabertura" },
  { title: "CEP", value: "cep" },
]
//dados fake
const dados = [
  { name: "Empresa ABC", dataabertura: "01/01/2020", cep: "12345-678" },
  { name: "Empresa XYZ", dataabertura: "15/03/2021", cep: "98765-432" },
  { name: "Empresa 123", dataabertura: "20/07/2019", cep: "11111-222" },
  { name: "Empresa Tech", dataabertura: "10/05/2022", cep: "33333-444" },
  { name: "Empresa Digital", dataabertura: "05/08/2023", cep: "55555-666" },
]

const TabelaDinamica = ({ columnsToShow = [] }) => {
  const getColumnTitle = (value) => {
    const item = items.find(item => item.value === value)
    return item ? item.title : value
  }

  return (
    <Box bg="white" borderRadius="lg" 
      boxShadow="sm" overflow="hidden"minH="400px"
    >
      {columnsToShow.length > 0 ? (
        <Box overflowX="auto">
          <Table.Root variant="outline" size="lg" stickyHeader>
            <Table.Header bg="gray.100">
              <Table.Row>
                {columnsToShow.map((value) => (
                  <Table.ColumnHeader key={value} fontWeight="bold">
                    {getColumnTitle(value)}
                  </Table.ColumnHeader>
                ))}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {dados.map((row, index) => (
                <Table.Row 
                  key={index}
                  _hover={{ bg: "gray.50" }}
                  transition="background 0.2s"
                >
                  {columnsToShow.map((value) => (
                    <Table.Cell key={value}>
                      {row[value]}
                    </Table.Cell>
                  ))}
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>
      ) : (
        <Box p={12} textAlign="center">
          <Box fontSize="4xl" mb={3}>
          </Box>
          <Box fontSize="lg" fontWeight="semibold" color="gray.700" mb={2}>
            Nenhuma coluna selecionada
          </Box>
          <Box color="gray.500">
            Selecione as colunas no menu acima para visualizar a tabela
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default TabelaDinamica