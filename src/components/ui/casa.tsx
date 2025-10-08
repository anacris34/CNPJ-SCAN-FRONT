import React from "react";
import { IconButton, Flex, Link } from "@chakra-ui/react";
import { IoHomeOutline } from "react-icons/io5";

const Home: React.FC = () => {
  return (
    <Link href="/" _hover={{ textDecoration: "none" }}>
      <IconButton
        aria-label="Ir para home"
        boxShadow="md"
        rounded="full"
        variant="solid"
        size="lg"
      >
        <IoHomeOutline color="#036DC5" />
      </IconButton>
    </Link>
  );
};

export default Home;