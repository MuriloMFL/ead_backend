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
exports.ServicoAtualizarProva = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ServicoAtualizarProva {
    executar(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id_prova, id_sistema, id_modulo, id_submodulo, nome_prova, cliente }) {
            const prova = yield prisma_1.default.prova.update({
                where: {
                    id_prova: Number(id_prova)
                }, data: {
                    id_sistema: Number(id_sistema),
                    id_modulo: Number(id_modulo),
                    id_submodulo: Number(id_submodulo),
                    nome_prova: nome_prova,
                    cliente: Boolean(cliente)
                }
            });
            return prova;
        });
    }
}
exports.ServicoAtualizarProva = ServicoAtualizarProva;
