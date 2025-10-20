import { Table } from "@chakra-ui/react"

const Tabela = () => {
  return (
    <Table.ScrollArea
      borderWidth="0.5px"
      borderColor="white"
      rounded="md"
      height="300px"
      width="600px"
    >
      <Table.Root size="md" stickyHeader>
        <Table.Header>
          <Table.Row bg="gray.100">
            <Table.ColumnHeader color="#036DC5">Arquivo</Table.ColumnHeader>
            <Table.ColumnHeader color="#036DC5">Tipo</Table.ColumnHeader>
            <Table.ColumnHeader color="#036DC5" textAlign="end">
              Tamanho
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body color="white">
          {items.map((item) => (
            <Table.Row key={item.id} bg="white" borderColor="white">
              <Table.Cell color="#036DC5">{item.name} </Table.Cell>
              <Table.Cell color="#036DC5">{item.category}</Table.Cell>
              <Table.Cell color="#036DC5" textAlign="end">
                {item.price}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
};

const items = [
  { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
  { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
  { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
  { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
  { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },
];

export default Tabela;