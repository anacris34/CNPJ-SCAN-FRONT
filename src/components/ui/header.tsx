// src/components/ui/header.tsx (Com Chakra UI)

import React, { FC } from "react";
import { Flex, Image, Heading } from "@chakra-ui/react"; // 🚨 Importe os componentes Chakra
import MenuHeader from "./historia";

interface HeaderProps {
  title: string;
  // ... outras props
}

// Criando um Header com o Flex do Chakra
const Header: FC<HeaderProps> = ({ title }) => {
  return (
    // Use Flex para o contêiner principal
    <Flex
      as="header"
      align="center"
      justify="space-between" // separa esquerda e direita
      p={5}
      w="100%"
    >
      {/* Lado esquerdo: logo + título */}
      <Flex align="center">
        <Image
          src={logoImage}
          alt={`${title} logo`}
          h="90px"
          mr={4}
          borderRadius="xl"
        />
        <Heading as="h1" size="3xl" fontFamily="Rag 123">
          {title}
        </Heading>
      </Flex>

      {/* Lado direito: botões */}
      <Flex>
        <MenuHeader />
      </Flex>
    </Flex>
  );
};

export default Header;
