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
exports.ServicoListaSubModulo = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const client_1 = require("@prisma/client");
class ServicoListaSubModulo {
    executar(filtros) {
        return __awaiter(this, void 0, void 0, function* () {
            const filtro = {
                nome_submodulo: filtros.nome_submodulo
                    ? { contains: filtros.nome_submodulo, mode: client_1.Prisma.QueryMode.insensitive }
                    : undefined,
                status: filtros.status,
                id_sistema: filtros.id_sistema,
                id_modulo: filtros.id_modulo,
                id_submodulo: filtros.id_submodulo
            };
            try {
                const Buscasubmodulo = yield prisma_1.default.subModulo.findMany({
                    where: filtro,
                    include: {
                        sistema: {
                            select: { nome_sistema: true },
                        },
                        modulo: {
                            select: { nome_modulo: true }
                        }
                    }
                });
                return Buscasubmodulo.map((subModulo) => {
                    var _a, _b;
                    return ({
                        id_submodulo: subModulo.id_submodulo,
                        nome_submodulo: subModulo.nome_submodulo,
                        id_modulo: subModulo.id_modulo,
                        nome_modulo: (_a = subModulo.modulo) === null || _a === void 0 ? void 0 : _a.nome_modulo,
                        id_sistema: subModulo.id_sistema,
                        nome_sistema: ((_b = subModulo.sistema) === null || _b === void 0 ? void 0 : _b.nome_sistema) || null,
                        status: subModulo.status,
                    });
                });
            }
            catch (erro) {
                throw new Error('Erro no serviço de Listar SubModulo');
            }
        });
    }
}
exports.ServicoListaSubModulo = ServicoListaSubModulo;
