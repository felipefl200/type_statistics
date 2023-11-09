import fetchData from "./fetchData.js";
fetchData("https://api.origamid.dev/json/transacoes.json");
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json");
    if (data) {
        data.forEach((item) => {
            console.log(item);
        });
    }
}
//# sourceMappingURL=script.js.map