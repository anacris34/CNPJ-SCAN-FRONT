import { Button } from "@chakra-ui/react";
import { IoMdDownload } from "react-icons/io";

function DownloadCSV({ data }: { data: any[] }) {
  const handleDownload = () => {
    if (!data || data.length === 0) return;

    const headers = Object.keys(data[0]);
    const rows = data.map((row) =>
      headers.map((h) => JSON.stringify(row[h] ?? "")).join(",")
    );
    const csv = [headers.join(","), ...rows].join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "dados_tabela.csv";
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <Button
      onClick={handleDownload}
      leftIcon={<IoMdDownload />}
      bg="#036DC5"
      color="white"
      _hover={{ bg: "#bed8f1ff" }}
      size="lg"
      rounded="md"
      boxShadow="md"
    >
      Download
    </Button>
  );
}

export default DownloadCSV;
