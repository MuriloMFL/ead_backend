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
exports.ControleCriarUsuario = void 0;
const servicoCriarUsuario_1 = require("../../servico/usuario/servicoCriarUsuario");
class ControleCriarUsuario {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nome_usuario, email, login, senha, id_franquia, tipo_usuario, status } = req.body;
                const servicocriarusuario = new servicoCriarUsuario_1.ServicoCriarUsuario();
                const usuario = yield servicocriarusuario.executar({
                    nome_usuario,
                    email,
                    login,
                    senha,
                    id_franquia,
                    tipo_usuario,
                    status
                });
                return res.status(201).json({ usuario });
            }
            catch (error) {
                return res.status(400).json({ error: error.message });
            }
        });
    }
}
exports.ControleCriarUsuario = ControleCriarUsuario;
