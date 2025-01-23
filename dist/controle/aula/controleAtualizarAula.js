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
exports.ControleAtualizarAula = void 0;
const servicoAtualizarAula_1 = require("../../servico/aula/servicoAtualizarAula");
class ControleAtualizarAula {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_aula, id_sistema, id_submodulo, id_modulo, nome_aula, cliente } = req.body;
            const servicoatualizaraula = new servicoAtualizarAula_1.ServicoAtualizarAula();
            const aula = yield servicoatualizaraula.executar({
                id_aula, id_sistema, id_submodulo, id_modulo, nome_aula, cliente
            });
            return res.json(aula);
        });
    }
}
exports.ControleAtualizarAula = ControleAtualizarAula;
