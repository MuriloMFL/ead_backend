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
exports.ServicoDetalharUsuario = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ServicoDetalharUsuario {
    executar(id_usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield prisma_1.default.usuario.findFirst({
                where: {
                    id_usuario: Number(id_usuario)
                },
                select: {
                    id_usuario: true,
                    nome_usuario: true,
                    login: true,
                    email: true,
                    id_franquia: true,
                    tipo_usuario: true
                }
            });
            return usuario;
        });
    }
}
exports.ServicoDetalharUsuario = ServicoDetalharUsuario;
