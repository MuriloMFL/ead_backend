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
exports.ControleListarAula = void 0;
const servicoListarAula_1 = require("../../servico/aula/servicoListarAula");
class ControleListarAula {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_sistema, id_modulo, id_submodulo, nome_aula, status } = req.query;
            const filtros = {
                id_sistema: Number(id_sistema),
                id_modulo: Number(id_modulo),
                id_submodulo: Number(id_submodulo),
                nome_aula: nome_aula,
                status: status === 'true' ? true : status === 'false' ? false : undefined
            };
            const servicolistaraula = new servicoListarAula_1.ServicoListarAula();
            const aula = yield servicolistaraula.executar(filtros);
            return res.json(aula);
        });
    }
}
exports.ControleListarAula = ControleListarAula;
