import React, { useState, useCallback } from "react";
import {Box,Button,Checkbox,VStack,Text,Menu,MenuButton,MenuList,MenuItem} from "@chakra-ui/react";

const MultiSelectWithCheckbox = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const options = ["React", "Vue", "Angular", "Svelte", "Next.js"];

  const handleToggle = useCallback((option: string) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  }, []);

  const label =
    selected.length > 0
      ? selected.length <= 2
        ? selected.join(", ")
        : `${selected.length} selecionado(s)`
      : "Selecione";

  return (
    <Box p={8} maxW="400px" mx="auto">
      <Menu closeOnSelect={false}>
        <MenuButton as={Button} w="100%">
          {label}
        </MenuButton>

        <MenuList maxH="200px" overflowY="auto">
          {options.map((option) => (
            <MenuItem key={option} closeOnSelect={false}>
              <Checkbox
                isChecked={selected.includes(option)}
                onChange={() => handleToggle(option)}
              >
                {option}
              </Checkbox>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>

      {selected.length > 0 && (
        <VStack align="start" mt={4} spacing={1}>
          <Text fontWeight="bold">Selecionados:</Text>
          {selected.map((item) => (
            <Text key={item}>• {item}</Text>
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default Menu;
