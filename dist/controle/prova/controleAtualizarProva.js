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
exports.ControleAtualizarProva = void 0;
const servicoAtualizarProva_1 = require("../../servico/prova/servicoAtualizarProva");
class ControleAtualizarProva {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_prova, id_sistema, id_modulo, id_submodulo, nome_prova, cliente } = req.body;
            const servicoatualizarprova = new servicoAtualizarProva_1.ServicoAtualizarProva();
            const prova = yield servicoatualizarprova.executar({
                id_prova, id_sistema, id_modulo, id_submodulo, nome_prova, cliente
            });
            return res.json(prova);
        });
    }
}
exports.ControleAtualizarProva = ControleAtualizarProva;
