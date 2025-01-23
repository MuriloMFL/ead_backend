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
exports.ServicoLogarUsuario = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
class ServicoLogarUsuario {
    executar(_a) {
        return __awaiter(this, arguments, void 0, function* ({ login, senha }) {
            const usuario = yield prisma_1.default.usuario.findFirst({
                where: {
                    login: login
                }
            });
            if (!usuario) {
                throw new Error('Usuario/Senha Incorretos');
            }
            const verificaSenha = yield (0, bcryptjs_1.compare)(senha, usuario.senha);
            if (!verificaSenha) {
                throw new Error('Usuario/Senha Incorretos');
            }
            // Verifica se a chave JWT_SECRET está definida
            if (!process.env.JWT_SECRET) {
                throw new Error('Chave JWT_SECRET não definida nas variáveis de ambiente');
            }
            const token = (0, jsonwebtoken_1.sign)({
                name: usuario.login,
                email: usuario.email,
            }, process.env.JWT_SECRET, {
                subject: usuario.id_usuario.toString(),
                expiresIn: '30d'
            });
            return {
                id: usuario.id_usuario,
                nome_usuario: usuario.nome_usuario,
                login: usuario.login,
                email: usuario.email,
                id_franquia: usuario.id_franquia,
                tipo_usuario: usuario.tipo_usuario,
                token: token
            };
        });
    }
}
exports.ServicoLogarUsuario = ServicoLogarUsuario;
