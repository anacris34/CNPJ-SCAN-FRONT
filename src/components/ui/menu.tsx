import { Button, Menu, Portal, CheckboxGroup } from "@chakra-ui/react" // Trocamos useCheckboxGroup por um componente para mais controle
import { useState } from "react" // Precisamos do useState para controlar os valores

const allValues = ["name", "dataabertura", "cep"] // Valores de todas as opções
const items = [
  { title: "Nome", value: "name" },
  { title: "Data de Abertura", value: "dataabertura" },
  { title: "CEP", value: "cep" },
]

const MenuCustom = () => {
  // Usamos useState para controlar diretamente os valores selecionados
  const [values, setValues] = useState(allValues) // Começa com todos selecionados

  const handleToggleAll = () => {
    // Se todos já estão marcados, desmarca todos. Senão, marca todos.
    if (values.length === allValues.length) {
      setValues([])
    } else {
      setValues(allValues)
    }
  }

  return (
    // O CheckboxGroup nos dá o controle que precisamos
    <CheckboxGroup value={values} onChange={setValues}>
      <Menu.Root closeOnSelect ={false}>
        <Menu.Trigger asChild>
          <Button variant="solid" size="xl" rounded="full" w="700px" h="70px">
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.ItemGroup>
                <Menu.ItemGroupLabel>Opções</Menu.ItemGroupLabel>
                {/* Item "Todos" com lógica customizada */}
                <Menu.CheckboxItem
                  value="todos" // Valor simbólico
                  checked={values.length === allValues.length}
                  onCheckedChange={handleToggleAll}
                >
                  Todos
                  <Menu.ItemIndicator />
                </Menu.CheckboxItem>

                {/* Itens normais */}
                {items.map(({ title, value }) => (
                  <Menu.CheckboxItem key={value} value={value}>
                    {title}
                    <Menu.ItemIndicator />
                  </Menu.CheckboxItem>
                ))}
              </Menu.ItemGroup>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </CheckboxGroup>
  )
}

export default MenuCustom