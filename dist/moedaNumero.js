export default function moedaNumero(moeda) {
    const numero = Number(moeda.replaceAll(".", "").replace(",", "."));
    return isNaN(numero) ? null : numero;
}
//# sourceMappingURL=moedaNumero.js.map