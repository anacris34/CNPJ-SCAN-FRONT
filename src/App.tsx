import { Box, Heading, VStack, Center, Text, Spinner, Button } from '@chakra-ui/react';
import React, { useState, useRef } from 'react';
import Header from './components/ui/header';
import Footer from './components/ui/footer';
import { HiUpload } from 'react-icons/hi';
import { uploadFileToBackend } from './api/connectionTest';

function App() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [backendMessage, setBackendMessage] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  // 📤 Envio do arquivo para o backend
  const processFileUpload = async (file: File) => {
    console.log('3. [LOG DE REDE] Iniciando upload para:', file.name);
    setIsLoading(true);
    setBackendMessage(null);
    setUploadedFileName(null);

    try {
      const result = await uploadFileToBackend(file);

      if (result.success) {
        const returnedName = result.data?.filename;
        if (returnedName) {
          setUploadedFileName(returnedName);
          setBackendMessage('Upload OK! Backend retornou o nome.');
        } else {
          setBackendMessage('Sucesso, mas o backend não retornou o nome do arquivo.');
        }
      } else {
        setBackendMessage(`Falha no upload: ${result.message}`);
      }
    } catch (error) {
      console.error('❌ Erro no upload:', error);
      setBackendMessage('Erro inesperado durante o upload.');
    } finally {
      setIsLoading(false);
    }
  };

  // 📁 Quando o arquivo é selecionado
  const handleFileSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('1. [LOG DE EVENTO] handleFileSelection foi chamado!');
    const file = event.target.files?.[0];
    if (file) {
      console.log('2. [LOG DE ARQUIVO] Arquivo detectado:', file.name);
      processFileUpload(file);
    }
    event.target.value = ''; // limpa input
  };

  // 🟡 Quando o botão é clicado
  const handleButtonClick = () => {
    console.log('0. [LOG DE CLIQUE] Botão clicado.');
    if (fileInputRef.current) {
      console.log('✅ fileInputRef encontrado. Abrindo seletor de arquivos...');
      fileInputRef.current.click();
    } else {
      console.error('❌ fileInputRef.current está nulo!');
    }
  };

  return (
    <VStack w="100%" minHeight="100vh" spacing={0} align="stretch">
      <Header title="CNPJ Scan" />

      <Center flexGrow={1} p={8}>
        <Box w={{ base: '90%', md: '60%' }} textAlign="center">
          <Heading size="3xl" mb={2}>
            Converta PDF para EXCEL.
          </Heading>
          <Text fontSize="lg" color="white" mb={8}>
            Powered by Cesar School
          </Text>

          {/* 📥 Input invisível */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelection}
            style={{ display: 'none' }}
            accept=".pdf"
          />

          {/* 🟢 Botão de seleção de arquivo */}
          <Button
            colorScheme="yellow"
            size="lg"
            onClick={handleButtonClick}
            isLoading={isLoading}
            loadingText="Enviando..."
          >
            Selecionar Arquivo PDF
          </Button>

          {/* 🧩 Mensagens */}
          <VStack mt={4} >
            {isLoading && <Spinner size="md" color="yellow.300" />}

            {uploadedFileName && !isLoading && (
              <Text color="green.400" fontWeight="bold" fontSize="lg">
                Nome Retornado: {uploadedFileName}
              </Text>
            )}

            {backendMessage && (
              <Text color={uploadedFileName ? 'green.400' : 'red.400'}>
                {backendMessage}
              </Text>
            )}
          </VStack>
        </Box>
      </Center>

      <Footer title="CNPJ Scan" copyrightText="Grupo 3 NEXT" />
    </VStack>
  );
}

export default App;
