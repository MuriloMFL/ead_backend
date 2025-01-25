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
exports.ServicoContarProvas = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ServicoContarProvas {
    executar(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id_usuario }) {
            const QtdProvas = yield prisma_1.default.mv_Prova.count({
                where: {
                    id_usuario: Number(id_usuario)
                }
            });
            const Notas = yield prisma_1.default.mv_Prova.findMany({
                where: {
                    id_usuario: Number(id_usuario)
                }, select: {
                    nota: true
                }
            });
            const somaNotas = Notas.reduce((total, item) => total + (item.nota || 0), 0);
            const media = QtdProvas > 0 ? somaNotas / QtdProvas : 0;
            return media;
        });
    }
}
exports.ServicoContarProvas = ServicoContarProvas;
