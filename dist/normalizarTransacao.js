import currencyToNumber from "./currencyToNumber.js";
import { stringToDate } from "./stringToDate.js";
export default function normalizarTransacao(transacao) {
    return {
        nome: transacao.Nome,
        id: Number(transacao.ID),
        data: stringToDate(transacao.Data),
        status: transacao.Status,
        email: transacao.Email,
        moeda: transacao["Valor (R$)"],
        valor: currencyToNumber(transacao["Valor (R$)"]),
        pagamento: transacao["Forma de Pagamento"],
        novo: Boolean(transacao["Cliente Novo"]),
    };
}
//# sourceMappingURL=normalizarTransacao.js.map