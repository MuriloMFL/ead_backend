"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControleListarFaq = void 0;
const servicoListarFaq_1 = require("../../servico/faq/servicoListarFaq");
class ControleListarFaq {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_sistema, id_modulo, id_submodulo, nome_faq, status } = req.query;
            const filtros = {
                id_sistema: id_sistema,
                id_submodulo: id_submodulo,
                id_modulo: id_modulo,
                nome_faq: nome_faq,
                status: status === 'true' ? true : status === 'false' ? false : undefined
            };
            const servicolistarfaq = new servicoListarFaq_1.ServicoListarFaqs();
            const faq = yield servicolistarfaq.executar(filtros);
            return res.json(faq);
        });
    }
}
exports.ControleListarFaq = ControleListarFaq;
