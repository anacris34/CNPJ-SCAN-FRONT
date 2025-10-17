export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}
export interface DataRow {
  [key: string]: any;
}
/**
 * Configuração base da API
 */
const getApiConfig = () => {
  const apiBasePath = import.meta.env.VITE_API_BASE_PATH;
  const extractEndpoint = import.meta.env.VITE_EXTRACT_ENDPOINT;
  const csvEndpoint = import.meta.env.VITE_CSV_ENDPOINT;

  if (!apiBasePath) {
    throw new Error("Variável de ambiente VITE_API_BASE_PATH não definida.");
  }

  return {
    apiBasePath: apiBasePath.replace(/\/$/, ""),
    extractEndpoint: extractEndpoint || "/extract_data",
    csvEndpoint: csvEndpoint || "/download_csv/",
  };
};
/**
 * Busca dados do backend via POST
 * Endpoint: /extract_data */
export async function fetchExtractedData(
  filters: Record<string, any> = {},
  timeout: number = 60000
): Promise<DataRow[]> {
  const { apiBasePath, extractEndpoint } = getApiConfig();
  const url = `${apiBasePath}${extractEndpoint}`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filters),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      throw new Error(
        `Erro ao buscar dados (${response.status}): ${response.statusText}. ${errorText}`
      );
    }

    const result = await response.json();

    // Normalizar resposta: pode vir como array direto ou objeto com propriedade 'data'
    const validData = Array.isArray(result) ? result : result?.data || [];

    return validData;
  } catch (error: any) {
    clearTimeout(timeoutId);

    if (error.name === "AbortError") {
      throw new Error(`Tempo limite de ${timeout / 1000}s excedido. Tente novamente.`);
    }

    throw new Error(error.message || "Erro desconhecido ao buscar dados");
  }
}