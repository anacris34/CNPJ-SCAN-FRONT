import React from 'react';
import { Button, Center } from '@chakra-ui/react';



const MeuBotao: React.FC = () => {
  
  // Função de clique tipada (opcional, mas boa prática)
  // O evento do botão é do tipo 'React.MouseEvent<HTMLButtonElement>'
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Você pode acessar propriedades do evento se precisar, como 'event.currentTarget'
    console.log('Botão Clicado!');
  };

  return (
    <Center w='100%' h='400px'> 
    <Button
      // Props do Chakra UI
      colorScheme='white' 
      size='2xl'
      variant='solid'
      // Função de clique
      onClick={handleClick}
    >
      Selecionar Arquivo PDF
    </Button>
    </Center>
  );
};

export default MeuBotao;