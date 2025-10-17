import { Button } from "@chakra-ui/react";
import { IoMdDownload } from "react-icons/io";
import { fetchCSV } from "../../api/download_csv";

function DownloadCSV() {
  const handleDownload = async () => {
    try {
      const blob = await fetchCSV();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "dados_tabela.csv";
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Erro ao baixar o arquivo:", error);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      bg= "white"
      color= "#036DC5"
      _hover={{ bg: "#bed8f1ff" }}
      size="lg"
      rounded="md"
      boxShadow="md"
    >
      <IoMdDownload />
      Download
    </Button>
  );
}

export default DownloadCSV;
