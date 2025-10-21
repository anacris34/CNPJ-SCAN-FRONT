import {
  Badge,
  Combobox,
  Portal,
  Wrap,
  createListCollection,
} from "@chakra-ui/react"
import { useMemo, useState } from "react"

const campos = [
  {label:"Numero de inscrição", value:"numero_de_inscricao"},
  {label:"Data de Abertura", value:"data_de_abertura"},
  {label:"Nome Empresarial", value:"nome_empresarial"},
  {label:"Nome de Fantasia", value:"nome_de_fantasia"},
  {label:"Porte", value:"porte"},
  {label:"Atividade Principal", value:"atividade_principal"},
  {label:"Atividades Secundarias", value:"atividades_secundarias"},
  {label:"Natureza Juridica", value:"natureza_juridica"},
  {label:"Logradouro", value:"logradouro"},
  {label:"Numero", value:"numero"},
  {label:"Complemento", value:"complemento"},
  {label:"CEP", value:"cep"},
  {label:"Bairro", value:"bairro"},
  {label:"Municipio", value:"municipio"},
  {label:"UF", value:"uf"},
  {label:"E-mail", value:"email"},
  {label:"Telefone", value:"telefone"},
  {label:"EFR", value:"efr"},
  {label:"Situação Cadastral", value:"situacao_cadastral"},
  {label:"Data da Situação Cadastral", value:"data_situacao_cadastral"},
  {label:"Motivo da Situação Cadastral", value:"motivo_situacao_cadastral"},
  {label:"Situação Especial", value:"situacao_especial"},
  {label:"Data da Situação Especial", value:"data_situacao_especial"}

]

const SelectBox = () => {
  const [searchValue, setSearchValue] = useState("")
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])

  const filteredItems = useMemo(
    () =>
      campos.filter((item) =>
        item.label.toLowerCase().includes(searchValue.toLowerCase()),
      ),
    [searchValue],
  )

  const collection = useMemo(
    () => createListCollection({ items: filteredItems }),
    [filteredItems],
  )

  const handleValueChange = (details: Combobox.ValueChangeDetails) => {
    setSelectedSkills(details.value)
  }

  return (
    <Combobox.Root
      multiple
      closeOnSelect
      width="320px"
      value={selectedSkills}
      collection={collection}
      onValueChange={handleValueChange}
      onInputValueChange={(details) => setSearchValue(details.inputValue)}
    >
      <Wrap gap="2">
        {selectedSkills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </Wrap>

      <Combobox.Label>Selecione os dados que deseja converter :</Combobox.Label>

      <Combobox.Control>
        <Combobox.Input />
        <Combobox.IndicatorGroup>
          <Combobox.Trigger />
        </Combobox.IndicatorGroup>
      </Combobox.Control>

      <Portal>
        <Combobox.Positioner>
          <Combobox.Content color='black'>
            <Combobox.ItemGroup>
              <Combobox.ItemGroupLabel>Campos</Combobox.ItemGroupLabel>
              {filteredItems.map((item) => (
                <Combobox.Item key={item.value} item={item}>
                  {item.label}
                  <Combobox.ItemIndicator />
                </Combobox.Item>
              ))}
              <Combobox.Empty>Não Encontrado</Combobox.Empty>
            </Combobox.ItemGroup>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  )
}

export default SelectBox;
