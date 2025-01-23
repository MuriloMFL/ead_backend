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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicoAtualizarUsuario = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
class ServicoAtualizarUsuario {
    executar(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id_usuario, nome_usuario, email, login, senha, id_franquia, tipo_usuario }) {
            const dadosAtualizacao = {
                nome_usuario,
                email,
                login,
                id_franquia: Number(id_franquia),
                tipo_usuario
            };
            if (senha) {
                const passwordHash = yield (0, bcryptjs_1.hash)(senha, 8);
                dadosAtualizacao.senha = passwordHash;
            }
            const usuario = yield prisma_1.default.usuario.update({
                data: dadosAtualizacao,
                where: {
                    id_usuario: Number(id_usuario)
                }
            });
            return usuario;
        });
    }
}
exports.ServicoAtualizarUsuario = ServicoAtualizarUsuario;
