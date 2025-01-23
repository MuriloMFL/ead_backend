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
exports.ControleAtualizarFranquia = void 0;
const servicoAtualizarFranquia_1 = require("../../servico/franquia/servicoAtualizarFranquia");
class ControleAtualizarFranquia {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_franquia, nome, responsavel, telefone } = req.body;
            if (!id_franquia) {
                return res.status(400).json({ erro: "ID da franquia obrigatorio" });
            }
            try {
                const servicoAtualizarFranquia = new servicoAtualizarFranquia_1.ServicoAtualizarFranquia();
                const franquia = yield servicoAtualizarFranquia.executar(Number(id_franquia), nome, responsavel, telefone);
                return res.json(franquia);
            }
            catch (erro) {
                return res.status(500).json({ error: erro.message });
            }
        });
    }
}
exports.ControleAtualizarFranquia = ControleAtualizarFranquia;
