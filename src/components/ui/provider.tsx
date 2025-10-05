"use client";

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

interface ProviderProps extends ColorModeProviderProps {
  children: React.ReactNode;
}

export function Provider({ children, ...props }: ProviderProps) {
  return (
    <ChakraProvider /* theme={theme} */>
      <ColorModeProvider {...props}>{children}</ColorModeProvider>
    </ChakraProvider>
  );
}