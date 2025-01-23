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
exports.ServicoCriarUsuario = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
class ServicoCriarUsuario {
    executar(_a) {
        return __awaiter(this, arguments, void 0, function* ({ nome_usuario, email, login, senha, id_franquia, tipo_usuario, status }) {
            const verificaUsuarioExiste = yield prisma_1.default.usuario.findFirst({
                where: {
                    OR: [
                        { login: login },
                        { email: email }
                    ]
                },
            });
            if (verificaUsuarioExiste) {
                throw new Error('Login ou email já existe');
            }
            const passwordHash = yield (0, bcryptjs_1.hash)(senha, 8);
            const usuario = yield prisma_1.default.usuario.create({
                data: {
                    nome_usuario: nome_usuario,
                    email: email,
                    login: login,
                    senha: passwordHash,
                    id_franquia: Number(id_franquia),
                    tipo_usuario: tipo_usuario,
                    status: status
                },
                select: {
                    nome_usuario: true,
                    email: true,
                    login: true,
                    id_franquia: true,
                    tipo_usuario: true
                }
            });
            return usuario;
        });
    }
}
exports.ServicoCriarUsuario = ServicoCriarUsuario;
