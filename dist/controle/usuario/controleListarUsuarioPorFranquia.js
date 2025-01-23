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
exports.ControleListarUsuarioPorFranquia = void 0;
const servicoListarUsuarioPorFranquia_1 = require("../../servico/usuario/servicoListarUsuarioPorFranquia");
class ControleListarUsuarioPorFranquia {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_franquia, status, nome_usuario } = req.query;
            const filtros = {
                id_franquia: Number(id_franquia) === 1 ? undefined : Number(id_franquia),
                status: status === 'true' ? true : status === 'false' ? false : undefined,
                nome_usuario: nome_usuario
            };
            const servicoListarUsuarioPorFranquia = new servicoListarUsuarioPorFranquia_1.ServicoListarUsuarioPorFranquia();
            const usuarios = yield servicoListarUsuarioPorFranquia.executar(filtros);
            return res.json(usuarios);
        });
    }
}
exports.ControleListarUsuarioPorFranquia = ControleListarUsuarioPorFranquia;
