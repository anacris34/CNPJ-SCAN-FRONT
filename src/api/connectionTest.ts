// src/api/connectionTest.ts (Ajustado para enviar o OBJETO File)

const API_BASE_PATH: string = import.meta.env.VITE_API_BASE_PATH || '/api';
const UPLOAD_ENDPOINT = `${API_BASE_PATH}/upload_filename/`; 

/**
 * Envia o objeto File para o backend usando FormData.
 * @param file O objeto File real selecionado pelo usuário.
 * @returns Um objeto com o status da requisição e o nome do arquivo retornado.
 */
export async function uploadFileToBackend(file: File): Promise<{ success: boolean; message: string; data?: any }> {
 
    console.log(`Tentando UPLOAD POST para: ${UPLOAD_ENDPOINT} com arquivo: ${file.name}`);

    // Cria o objeto FormData
    const formData = new FormData();
    // ⚠️ 'file' aqui deve CORRESPONDER ao nome do parâmetro no FastAPI (file: UploadFile = File(...))
    formData.append('file', file); 

    try {
        const response = await fetch(UPLOAD_ENDPOINT, {
            method: 'POST',
            // O Content-Type é automaticamente definido como multipart/form-data
            body: formData 
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Erro do Backend: ${response.status} - ${errorText.substring(0, 50)}...`);
        }

        const data = await response.json(); 

        return {
            success: true,
            // Assume que o backend retorna um JSON com o campo 'filename'
            message: `Upload OK! Backend retornou o nome: ${data.filename}`, 
            data: data
        };
        
    } catch (error) {
        let message = 'Falha de conexão ou rede.';
        if (error instanceof Error) {
            message = `Erro na Conexão: ${error.message}`;
        }

        return {
            success: false,
            message: message,
        };
    }
}