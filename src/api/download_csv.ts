export async function fetchCSV(): Promise<Blob> {
  const apiBasePath = import.meta.env.VITE_API_BASE_PATH;
  const csvEndpoint = import.meta.env.VITE_CSV_ENDPOINT;

  if (!apiBasePath || !csvEndpoint) {
    throw new Error("Variáveis de ambiente VITE_API_BASE_PATH ou VITE_CSV_ENDPOINT não definidas.");
  }

  const url = `${apiBasePath.replace(/\/$/, "")}${csvEndpoint}`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}), // caso o backend exija um corpo JSON
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Erro ao baixar CSV (${res.status}): ${res.statusText}. ${text}`);
  }

  return await res.blob(); }