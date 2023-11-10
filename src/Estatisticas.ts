import countBy from "./countBy.js";

type TransacaoValor = Transacao & { valor: number };
function filterValue(transacao: Transacao): transacao is TransacaoValor {
  return transacao.valor !== null;
}

export default class Estatisticas {
  private transacoes;
  public total;
  public pagamento;
  public status;
  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
    this.pagamento = this.setPagamento();
    this.status = this.setStatus();
    this.transacoes = transacoes;
    this.total = this.setTotal();
  }
  private setTotal() {
    return this.transacoes.filter(filterValue).reduce((acc, item) => {
      return acc + item.valor;
    }, 0);
  }
  private setStatus() {
    return countBy(this.transacoes.map(({ pagamento }) => pagamento));
  }
  private setPagamento() {
    return countBy(this.transacoes.map(({ status }) => status));
  }
}
