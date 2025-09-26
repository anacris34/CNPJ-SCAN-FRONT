import { Button, Heading, VStack } from '@chakra-ui/react'

function App() {
  return (
    <VStack spacing={4} mt={10}>
      <Heading color="teal.500">Hello Chakra UI 🚀</Heading>
      <Button colorScheme="teal">Clique aqui</Button>
    </VStack>
  )
}

export default App