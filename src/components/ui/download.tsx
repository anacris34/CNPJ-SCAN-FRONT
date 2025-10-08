import { Button, DownloadTrigger, Text } from "@chakra-ui/react";

const data = "[[1,2],[1,2]]";

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
        <Text color="#036DC5" textStyle="md" fontWeight="bold">
          Download CSV
        </Text>
      </Button>
    </DownloadTrigger>
  );
};
export default DownloadCSV;
