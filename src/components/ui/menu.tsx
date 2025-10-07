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