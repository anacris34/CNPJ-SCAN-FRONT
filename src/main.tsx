import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.js';
import theme from "./theme"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ChakraProvider value={defaultSystem} theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
