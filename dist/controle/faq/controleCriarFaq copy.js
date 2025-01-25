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
exports.ControleCriarFaq = void 0;
const servicoCriarFaq_1 = require("../../servico/faq/servicoCriarFaq");
class ControleCriarFaq {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_sistema, id_modulo, id_submodulo, id_aula, nome_faq, link, observacao, order } = req.body;
            const servicocriarfaq = new servicoCriarFaq_1.ServicoCriarFaq();
            const faq = yield servicocriarfaq.executar({
                id_sistema: id_sistema,
                id_modulo: id_modulo,
                id_submodulo: id_submodulo,
                id_aula: id_aula,
                nome_faq: nome_faq,
                link: link,
                observacao: observacao,
                order: order
            });
            return res.json(faq);
        });
    }
}
exports.ControleCriarFaq = ControleCriarFaq;
