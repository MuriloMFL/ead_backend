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
exports.ControleDetalharFranquia = void 0;
const servicoDetalharFranquia_1 = require("../../servico/franquia/servicoDetalharFranquia");
class ControleDetalharFranquia {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_franquia } = req.params;
            if (isNaN(Number(id_franquia))) {
                return res.status(400).json({ erro: "ID da franquia inválido." });
            }
            if (!id_franquia) {
                return res.status(400).json({ erro: "ID da franquia obrigatorio" });
            }
            try {
                const servicoDetalharfranquia = new servicoDetalharFranquia_1.ServicoDetalharFranquia();
                const franquia = yield servicoDetalharfranquia.executar(Number(id_franquia));
                if (!franquia) {
                    return res.status(404).json({ error: "Franquia não encontrada." });
                }
                return res.json(franquia);
            }
            catch (erro) {
                return res.status(500).json({ error: erro.message });
            }
        });
    }
}
exports.ControleDetalharFranquia = ControleDetalharFranquia;
