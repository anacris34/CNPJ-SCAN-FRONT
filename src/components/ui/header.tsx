// src/components/ui/header.tsx (Com Chakra UI)

import React, { FC } from "react";
import { Flex, Image, Heading } from "@chakra-ui/react"; // 🚨 Importe os componentes Chakra
import logoImage from '../../assets/logo.png'; 


interface HeaderProps {
  title: string;
  // ... outras props
}

// Criando um Header com o Flex do Chakra
const Header: FC<HeaderProps> = ({ title }) => {
  return (
    // Use Flex para o contêiner principal
    <Flex
      as="header" // Trata o Flex como um <header> semântico
      align="center" // Alinha verticalmente no centro
      justify="flex-start" // ⬅️ Move o conteúdo para o canto esquerdo
      w="100%" // Ocupa toda a largura do pai
    >
      <Image
        src={logoImage}
        alt={`${title} logo`}
        h="90px"                  // Altura da imagem
        mr={4}                    // Margin Right de 4 (espaço entre logo e texto)
        borderRadius="xl"
        opacity={0.8}  
       />
      <Heading as="h1" size="3xl" fontFamily="Rag 123">
        {title}
      </Heading>
    </Flex>
  );
};

export default Header;
