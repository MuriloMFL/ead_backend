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
exports.ServicoAtualizarSubModulo = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ServicoAtualizarSubModulo {
    executar(dados) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const submodulo = yield prisma_1.default.subModulo.update({
                    where: {
                        id_submodulo: Number(dados.id_submodulo)
                    }, data: {
                        nome_submodulo: dados.nome_submodulo,
                        id_modulo: Number(dados.id_modulo),
                        id_sistema: Number(dados.id_sistema)
                    }
                });
                return submodulo;
            }
            catch (_a) {
                throw new Error('Erro no serviço do submodulo');
            }
        });
    }
}
exports.ServicoAtualizarSubModulo = ServicoAtualizarSubModulo;
