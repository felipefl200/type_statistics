import fetchData from "./fetchData.js";
import normalizarTransacao from "./normalizarTransacao.js";

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json?"
  );
  if (!data) return;
  const transacoes = data.map(normalizarTransacao);
  preencheTabela(transacoes);
}

function preencherEstatisticas(transacoes: Transacao[]): void {}

function preencheTabela(transacoes: Transacao[]): void {
  const tabela = document.querySelector("#transacoes tbody");
  if (!tabela) return;
  transacoes.forEach((item) => {
    tabela.innerHTML += `
    <tr>
    <td>${item.nome}</td>
    <td>${item.email}</td>
    <td>R$ ${item.moeda}</td>
    <td>${item.pagamento}</td>
    <td>${item.status}</td>
    </tr>
    `;
  });
}

handleData();
