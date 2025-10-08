import { Button, DownloadTrigger, Text } from "@chakra-ui/react";
import { IoMdDownload } from "react-icons/io";

const data = "DadosBackEnd";

const DownloadCSV = () => {
  return (
    <DownloadTrigger
      data={data}
      fileName="Dados.csv"
      mimeType="text/csv"
      asChild
    >
      <Button
        variant="solid"
        colorPalette="white"
        boxShadow="md"
        size="2xl"
        rounded="md"
      >
        <IoMdDownload color="#036DC5"/>
        <Text color="#036DC5" textStyle="md" fontWeight="bold">
          Download CSV
        </Text>
      </Button>
    </DownloadTrigger>
  );
};
export default DownloadCSV;