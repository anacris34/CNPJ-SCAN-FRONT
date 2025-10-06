import {
  Combobox,
  Portal,
  Stack,
  useFilter,
  useListCollection,
} from "@chakra-ui/react"


const SelectBox = () => {
  const { contains } = useFilter({ sensitivity: "base" })

  const { collection, filter } = useListCollection({
    initialItems: campos,
    filter: contains,
  })

  return (
    <Combobox.Root
      collection={collection}
      onInputValueChange={(e) => filter(e.inputValue)}
      width="320px"
	
    >
      <Combobox.Label>Selecione os dados que deseja converter :</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input placeholder="Selecione" />
        <Combobox.IndicatorGroup>
          <Combobox.ClearTrigger />
          <Combobox.Trigger />
        </Combobox.IndicatorGroup>
      </Combobox.Control>
      <Portal>
        <Combobox.Positioner>
          <Combobox.Content color='black'>
            <Combobox.Empty>No items found</Combobox.Empty>
            {collection.items.map((item) => (
              <Combobox.Item item={item} key={item.value}>
                {item.label}
                <Combobox.ItemIndicator />
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  )
}

const campos = [
  { label: "Nome", value: "nome" },
  { label: "CNPJ", value: "cnpj" },
  { label: "CEP", value: "cep" },
  { label: "Logradouro", value: "logradouro" },
  { label: "Numero", value: "numero" },
  { label: "Complemento", value: "complemento" },
  { label: "Bairro", value: "bairro" },
  { label: "Municipio", value: "municipio" },
  { label: "UF", value: "uf" },
  { label: "Telefone", value: "telefone" },
  { label: "Situação", value: "situacao" },
]
export default SelectBox;