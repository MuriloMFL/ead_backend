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
exports.ControleListarQuestao = void 0;
const servicoListarQuestao_1 = require("../../servico/questao/servicoListarQuestao");
class ControleListarQuestao {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_questao, questoes, status, id_sistema, id_modulo, id_submodulo, id_aula, id_prova } = req.query;
            const filtros = {
                id_questao: id_questao,
                questoes: questoes,
                status: status === 'true' ? true : status === 'false' ? false : undefined,
                id_sistema: id_sistema,
                id_modulo: id_modulo,
                id_submodulo: id_submodulo,
                id_aula: id_aula ? Number(id_aula) : undefined,
                id_prova: id_prova ? Number(id_prova) : undefined
            };
            const servicolistarquestao = new servicoListarQuestao_1.ServicoListarQuestao();
            const questao = yield servicolistarquestao.executar(filtros);
            return res.json(questao);
        });
    }
}
exports.ControleListarQuestao = ControleListarQuestao;
