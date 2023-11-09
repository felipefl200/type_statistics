import fetchData from "./fetchData.js";
import normalizarTransacao from "./normalizarTransacao.js";

fetchData("https://api.origamid.dev/json/transacoes.json");

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json"
  );
  if (!data) return;
  const transacoes = data.map(normalizarTransacao);
  console.log(transacoes);
}

handleData();
