import { Button, Menu, Portal } from "@chakra-ui/react"
import { useState } from "react"
import { Text } from "@chakra-ui/react"

const allValues = ["name", "dataabertura", "cep","bairro"]
const items = [
  { title: "Nome", value: "name" },
  { title: "Data de Abertura", value: "dataabertura" },
  { title: "CEP", value: "cep" },
  { title: "Bairro", value: "bairro"},
]

const MenuCustom = () => {
  const [values, setValues] = useState(allValues)

  const handleToggleAll = () => {
    if (values.length === allValues.length) {
      setValues([])
    } else {
      setValues(allValues)
    }
  }

  const selecionade = (value: string, checked: boolean) => {
    if (checked) {
      setValues([...values, value])
    } else {
      setValues(values.filter((v) => v !== value))
    }
  }

  return (
    <Menu.Root closeOnSelect={false}>
      <Menu.Trigger asChild>
        <Button colorPalette="gray" variant="surface" size="xl" rounded="full" w="700px" h="70px">
          <Text color="blue">Dados Selecionados:</Text>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.ItemGroup>
              <Menu.ItemGroupLabel>Opções</Menu.ItemGroupLabel>
              <Menu.CheckboxItem
                value="todos"
                checked={values.length === allValues.length}
                onCheckedChange={handleToggleAll}
              >
                Selecionar todos
                <Menu.ItemIndicator />
              </Menu.CheckboxItem>

              {items.map(({ title, value }) => (
                <Menu.CheckboxItem 
                  key={value} 
                  value={value}
                  checked={values.includes(value)}
                  onCheckedChange={(checked) => selecionade(value, checked)}
                >
                  {title}
                  <Menu.ItemIndicator />
                </Menu.CheckboxItem>
              ))}
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export default MenuCustom


//----------------------------------------------

import {
  Button,
  Combobox,
  Field,
  Portal,
  Stack,
  useListCollection,
} from "@chakra-ui/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"

const formSchema = z.object({
  selectedData: z.array(z.string()).min(1, { message: "Selecione pelo menos um dado" }),
})

type FormValues = z.infer<typeof formSchema>

const allValues = ["name", "dataabertura", "cep", "bairro"]
const items = [
  { label: "Nome", value: "name" },
  { label: "Data de Abertura", value: "dataabertura" },
  { label: "CEP", value: "cep" },
  { label: "Bairro", value: "bairro" },
]

const MenuCustom = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>(allValues)

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      selectedData: allValues,
    },
  })

  const onSubmit = handleSubmit((data) => {
    console.log("Form submitted with:", data)
    alert(`Dados selecionados: ${data.selectedData.join(", ")}`)
  })

  const { collection } = useListCollection({
    items: items,
  })

  const handleValueChange = (details: Combobox.ValueChangeDetails, onChange: any) => {
    setSelectedSkills(details.value)
    onChange(details.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <Stack gap="4" align="flex-start">
        <Field.Root invalid={!!errors.selectedData} width="700px">
          <Field.Label>Dados Selecionados</Field.Label>
          <Controller
            control={control}
            name="selectedData"
            render={({ field }) => (
              <Combobox.Root
                multiple
                width="700px"
                value={selectedSkills}
                collection={collection}
                onValueChange={(details) => handleValueChange(details, field.onChange)}
              >
                <Combobox.Control>
                  <Combobox.Input placeholder="Selecione os dados" />
                  <Combobox.IndicatorGroup>
                    <Combobox.ClearTrigger />
                    <Combobox.Trigger />
                  </Combobox.IndicatorGroup>
                </Combobox.Control>
                <Portal>
                  <Combobox.Positioner>
                    <Combobox.Content>
                      <Combobox.Empty>Nenhum dado encontrado</Combobox.Empty>
                      {collection.items.map((item) => (
                        <Combobox.Item key={item.value} item={item}>
                          {item.label}
                          <Combobox.ItemIndicator />
                        </Combobox.Item>
                      ))}
                    </Combobox.Content>
                  </Combobox.Positioner>
                </Portal>
              </Combobox.Root>
            )}
          />
          <Field.ErrorText>{errors.selectedData?.message}</Field.ErrorText>
        </Field.Root>
        <Button size="sm" type="submit">
          Enviar
        </Button>
      </Stack>
    </form>
  )
}

export default MenuCustom