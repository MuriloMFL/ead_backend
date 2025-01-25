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
exports.ControleListarModulo = void 0;
const servicoListarModulo_1 = require("../../servico/modulo/servicoListarModulo");
class ControleListarModulo {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome_modulo, status, id_sistema, id_modulo } = req.query;
            const statusFilter = status === 'true' ? true : status === 'false' ? false : undefined;
            const filtros = {
                nome_modulo: nome_modulo ? String(nome_modulo) : undefined,
                status: statusFilter,
                id_sistema: id_sistema ? Number(id_sistema) : undefined,
                id_modulo: id_modulo ? Number(id_modulo) : undefined,
            };
            const servicoListarModulo = new servicoListarModulo_1.ServicoListarModulo();
            try {
                const modulos = yield servicoListarModulo.executar(filtros);
                return res.status(200).json(modulos);
            }
            catch (error) {
                console.error("Erro ao listar módulos:", error);
                return res.status(500).json({ error: "Erro interno no servidor." });
            }
        });
    }
}
exports.ControleListarModulo = ControleListarModulo;
