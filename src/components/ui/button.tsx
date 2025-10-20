import React from 'react';
import { Box, Button, Center, Flex, Text, FileUpload } from '@chakra-ui/react';
import { HiUpload } from "react-icons/hi"


const MeuBotao: React.FC = () => {
  
  // Função de clique tipada (opcional, mas boa prática)
  // O evento do botão é do tipo 'React.MouseEvent<HTMLButtonElement>'
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Você pode acessar propriedades do evento se precisar, como 'event.currentTarget'
    console.log('Botão Clicado!');
  };

  return (
    <Flex
      direction='column'
      align='center'
      justify='center'
      minH='40vh'
      gap={4} 
    >
    <FileUpload.Root>
      <FileUpload.HiddenInput />
      <FileUpload.Trigger asChild>
        <Button // Props do Chakra UI
          colorScheme='gray' 
          size='2xl'
          variant='solid'
          >
          <HiUpload /> Selecionar Arquivo PDF
        </Button>
      </FileUpload.Trigger>
      <FileUpload.List />
    </FileUpload.Root>
    </Flex>
  );
};

export default MeuBotao;