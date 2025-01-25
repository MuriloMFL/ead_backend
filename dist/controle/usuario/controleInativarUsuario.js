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
exports.ControleInativarUsuario = void 0;
const servicoInativarUsuario_1 = require("../../servico/usuario/servicoInativarUsuario");
class ControleInativarUsuario {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_usuario } = req.body;
            console.log(id_usuario);
            const servicoInativarUsuario = new servicoInativarUsuario_1.ServicoInativarUsuario();
            try {
                const Usuario = yield servicoInativarUsuario.executar(id_usuario);
                return res.json(Usuario);
            }
            catch (error) {
                return res.json("Erro ao tentar inativar usuário");
            }
        });
    }
}
exports.ControleInativarUsuario = ControleInativarUsuario;
