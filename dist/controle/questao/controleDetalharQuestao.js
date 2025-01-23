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
exports.ControleDetalharQuestao = void 0;
const servicoDetalharQuestao_1 = require("../../servico/questao/servicoDetalharQuestao");
class ControleDetalharQuestao {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_questao } = req.params;
            const servicodetalharquestao = new servicoDetalharQuestao_1.ServicoDetalharQuestao();
            const questao = yield servicodetalharquestao.executar(Number(id_questao));
            return res.json(questao);
        });
    }
}
exports.ControleDetalharQuestao = ControleDetalharQuestao;
