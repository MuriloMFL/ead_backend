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
exports.ServicoCriarProva = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ServicoCriarProva {
    executar(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id_sistema, id_submodulo, id_modulo, nome_prova, cliente }) {
            try {
                const prova = yield prisma_1.default.prova.create({
                    data: {
                        id_sistema: Number(id_sistema),
                        id_submodulo: Number(id_submodulo),
                        id_modulo: Number(id_modulo),
                        nome_prova,
                        cliente: false
                    }
                });
                return prova;
            }
            catch (error) {
                console.error(error);
                throw new Error('Erro no servico de criar prova');
            }
        });
    }
}
exports.ServicoCriarProva = ServicoCriarProva;
