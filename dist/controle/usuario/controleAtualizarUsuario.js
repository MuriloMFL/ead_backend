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
exports.ControleAtualizarUsuario = void 0;
const servicoAtualizarUsuario_1 = require("../../servico/usuario/servicoAtualizarUsuario");
class ControleAtualizarUsuario {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_usuario, nome_usuario, email, login, senha, id_franquia, tipo_usuario } = req.body;
                const servicocriarusuario = new servicoAtualizarUsuario_1.ServicoAtualizarUsuario();
                const usuario = yield servicocriarusuario.executar({
                    id_usuario,
                    nome_usuario,
                    email,
                    login,
                    senha,
                    id_franquia,
                    tipo_usuario
                });
                return res.status(201).json({ usuario });
            }
            catch (error) {
                return res.status(400).json({ error: error.message });
            }
        });
    }
}
exports.ControleAtualizarUsuario = ControleAtualizarUsuario;
