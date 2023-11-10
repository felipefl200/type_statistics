import countBy from "./countBy.js";
function filterValue(transacao) {
    return transacao.valor !== null;
}
export default class Estatisticas {
    transacoes;
    total;
    pagamento;
    status;
    constructor(transacoes) {
        this.transacoes = transacoes;
        this.pagamento = this.setPagamento();
        this.status = this.setStatus();
        this.transacoes = transacoes;
        this.total = this.setTotal();
    }
    setTotal() {
        return this.transacoes.filter(filterValue).reduce((acc, item) => {
            return acc + item.valor;
        }, 0);
    }
    setStatus() {
        return countBy(this.transacoes.map(({ pagamento }) => pagamento));
    }
    setPagamento() {
        return countBy(this.transacoes.map(({ status }) => status));
    }
}
//# sourceMappingURL=Estatisticas.js.map