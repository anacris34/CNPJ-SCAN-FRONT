// src/components/ui/header.tsx (Chakra UI v3.2)
import React, { FC } from "react";
import { Flex, Image, Heading, Button } from "@chakra-ui/react";
import logoImage from "../../assets/logo.png";


const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      p={5}
      w="100%"
    >
      {/* Lado esquerdo: logo + título */}
      <Flex align="center" gap={4}>
        <Image
          src={logoImage}
          alt={`${title} logo`}
          h="90px"
          borderRadius="xl"
        />
        <Heading as="h1" size="3xl" fontFamily="Rag 123">
          {title}
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Header;