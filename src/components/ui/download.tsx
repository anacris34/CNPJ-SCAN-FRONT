import { Button, DownloadTrigger } from "@chakra-ui/react"

const data = "1,2"

const DownloadCSV = () => {
  return (
    <DownloadTrigger
      data={data}
      fileName="Dados.csv"
      mimeType="text/csv"
      asChild
    >
      <Button variant="outline">Download CSV</Button>
    </DownloadTrigger>
  )
}
export default DownloadCSV;