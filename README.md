# CNPJ Scan - Frontend

![Status do Projeto](https://img.shields.io/badge/status-Em%20Desenvolvimento-yellow)
![Tecnologias](https://img.shields.io/badge/tech-React%20|%20TypeScript%20|%20Vite%20|%20Chakra%20UI-blue)

<div align="center">
  <img src="https://github.com/user-attachments/assets/7eaa9442-73cd-45f8-b601-843f0072179c">
</div>


## Colaboradores ✨
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/paulobeldel"><img src="https://avatars.githubusercontent.com/u/105087411?v=4?s=100" width="100px;" alt="Paulo Beldel Filho"/><br /><sub><b>Paulo Beldel Filho</b></sub></a><br /></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/anacris34"><img src="https://avatars.githubusercontent.com/u/213529724?v=4" width="100px;" alt="Ana Cris"/><br /><sub><b>Ana Cris</b></sub></a><br /></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/dualbuquerque"><img src="https://avatars.githubusercontent.com/u/96270653?v=4?s=100" width="100px;" alt="Carlos Eduardo"/><br /><sub><b>Carlos Eduardo</b></sub></a><br /></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/italogna"><img src="https://avatars.githubusercontent.com/u/155203334?v=4?s=100" width="100px;" alt="Italo Araujo"/><br /><sub><b>Italo Araujo</b></sub></a><br /></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/marthalacerda"><img src="https://avatars.githubusercontent.com/u/101488470?v=4s=100" width="100px;" alt="Martha Lacerda"/><br /><sub><b>Martha Lacerda</b></sub></a><br /></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/MyllenaAlmeida"><img src="https://avatars.githubusercontent.com/u/38386226?v=4?s=100" width="100px;" alt="MyllenaAlmeida"/><br /><sub><b>Myllena Almeida</b></sub></a><br /></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/pedroabn"><img src="https://avatars.githubusercontent.com/u/62610839?v=4?s=100" width="100px;" alt="Pedro Neiva"/><br /><sub><b>Pedro Neiva</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>


<p align="center">
  Desenvolvido por <b>Grupo 3 NEXT</b> com o apoio da <b>CESAR School</b>.
</p>

## 🚀 Sobre o Projeto

O **CNPJ Scan** é uma aplicação web dedicada à conversão e processamento de documentos, especializada na **extração de dados de Pessoas Jurídicas (CNPJs) a partir de arquivos PDF e sua transformação em um formato tabular (EXCEL/CSV)**.

Este repositório contém o código-fonte da interface de usuário (Frontend), uma Single Page Application (SPA) construída com **React** e **TypeScript**, focada em um fluxo de trabalho intuitivo e eficiente. O design é baseado no **Chakra UI**, garantindo componentes acessíveis e um estilo consistente.

### 🎯 Fluxo da Aplicação

O projeto é estruturado em um fluxo de trabalho em etapas, gerenciado pelo `react-router-dom`:

1.  **Upload (`/` - HomePage):** Tela principal para envio do arquivo PDF (a lógica de upload está em `src/api/upload.ts`).
2.  **Processamento (`/page2` - ProcessPage):** Onde o usuário interage, aguarda a extração e **seleciona os campos** de CNPJ que deseja incluir no arquivo final (utilizando o componente `SelectBox`).
3.  **Download (`/page3` - DownloadPage):** Exibe a pré-visualização dos dados em uma `Tabela` e permite o download final em formato CSV/EXCEL (via componente `DownloadCSV`).

## ⚙️ Tecnologias Principais

| Categoria | Tecnologia | Uso no Projeto |
| :--- | :--- | :--- |
| **Framework/Linguagem** | [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/) | Base da aplicação e tipagem estática. |
| **Tooling/Build** | [Vite](https://vitejs.dev/) | Bundler moderno e rápido. |
| **UI/Estilização** | [Chakra UI](https://chakra-ui.com/) | Biblioteca de componentes para design responsivo e `color-mode`. |
| **Roteamento** | [React Router DOM v6](https://reactrouter.com/) | Navegação entre as telas do fluxo. |
| **Acesso API** | Proxy no `vite.config.js` | Redireciona requisições (`/api`) para o Backend em `http://localhost:8000`. |


## ⚠️ Pré-requisitos

Para rodar este projeto localmente, você precisa ter:

* **Node.js** (versão LTS recomendada).
* Um gerenciador de pacotes: **npm** ou **yarn**.
* **Backend CNPJ Scan:** O serviço de API deve estar rodando e acessível na porta `8000` (`http://localhost:8000`).

## 🔨 Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    cd cnpj-scan-frontend 
    ```

2.  **Instale as dependências:**
    ```bash
    npm install 
    ```

3.  **Variáveis de Ambiente:**
    Verifique o arquivo `.env` para a configuração da API (`VITE_API_BASE_PATH=http://localhost:8000`).

4.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    O frontend estará disponível em `http://localhost:5173` (ou outra porta indicada pelo Vite).

## 🤝 Contribuição

Contribuições são bem-vindas! Se você tiver sugestões ou quiser relatar bugs, sinta-se à vontade para:

1.  Fazer um fork do projeto.
2.  Criar uma branch para sua modificação.
3.  Abrir um **Pull Request (PR)**.


---

<p align="center">Aguardamos seu feedback e contribuições!</p>
