import React from "react";
import { IconButton, Flex, Link } from "@chakra-ui/react";
import { IoHomeOutline } from "react-icons/io5";

const Casa: React.FC = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="100vh"
      gap={4}
    >
      <Link href="/" _hover={{ textDecoration: "none" }}>
        <IconButton
          colorPalette="white"
          aria-label="Ir para home"
          boxShadow="md"
          rounded="full"
          variant="solid"
          size="lg"
        >
          <IoHomeOutline color="#036DC5" />
        </IconButton>
      </Link>
    </Flex>
  );
};

export default Casa;
