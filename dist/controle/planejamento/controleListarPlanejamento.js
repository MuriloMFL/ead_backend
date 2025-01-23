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
exports.ControleListarPlanejamento = void 0;
const servicoListarPlanejamento_1 = require("../../servico/planejamento/servicoListarPlanejamento");
class ControleListarPlanejamento {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_planejamento, nome_planejamento, status, etapa_finalizado } = req.query;
            const filtros = {
                id_planejamento: id_planejamento ? Number(id_planejamento) : undefined,
                nome_planejamento,
                status: status === 'true' ? true : status === 'false' ? false : false,
                etapa_finalizado: etapa_finalizado === 'true' ? true : etapa_finalizado === 'false' ? false : false
            };
            const servicoListarPlanejamento = new servicoListarPlanejamento_1.ServicoListarPlanejamento();
            const planejamento = yield servicoListarPlanejamento.executar({ filtros });
            return res.json(planejamento);
        });
    }
}
exports.ControleListarPlanejamento = ControleListarPlanejamento;
