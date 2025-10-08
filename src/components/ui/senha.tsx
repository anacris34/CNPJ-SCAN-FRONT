//npx @chakra-ui/cli snippet add password-input
import { PasswordInput } from "@/components/ui/senha"
import { useState } from "react"

const senha = () => {
  const [value, setValue] = useState("")
  return (
    <PasswordInput value={value} onChange={(e) => setValue(e.target.value)} />
  )
}
export default senha;