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
exports.ControleLogarUsuario = void 0;
const servicoLogarUsuario_1 = require("../../servico/usuario/servicoLogarUsuario");
class ControleLogarUsuario {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { login, senha } = req.body;
            const servicoLogarUsuario = new servicoLogarUsuario_1.ServicoLogarUsuario();
            const logar = yield servicoLogarUsuario.executar({
                login,
                senha
            });
            return res.json(logar);
        });
    }
}
exports.ControleLogarUsuario = ControleLogarUsuario;
