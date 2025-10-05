import React from 'react';
import { Button, Center } from '@chakra-ui/react';

interface MeuBotaoProps {
  texto: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  colorScheme?: string;
  variant?: "solid" | "outline" | "ghost" | "link";
}

const MeuBotao: React.FC<MeuBotaoProps> = ({
  texto,
  onClick,
  size = "md",
  colorScheme = "blue",
  variant = "solid",
}) => {
  return (
    <Center w="100%">
      <Button
        colorScheme={colorScheme}
        size={size}
        variant={variant}
        onClick={onClick}
      >
        {texto}
      </Button>
    </Center>
  );
};

export default MeuBotao;
