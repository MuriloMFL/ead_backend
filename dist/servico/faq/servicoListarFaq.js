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
exports.ServicoListarFaqs = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const client_1 = require("@prisma/client");
class ServicoListarFaqs {
    executar(filtros) {
        return __awaiter(this, void 0, void 0, function* () {
            const dados = {
                nome_faq: filtros.nome_faq
                    ? { contains: filtros.nome_faq, mode: client_1.Prisma.QueryMode.insensitive }
                    : undefined,
                status: filtros.status,
                id_sistema: filtros.id_sistema,
                id_modulo: filtros.id_modulo,
                id_submodulo: filtros.id_submodulo
            };
            try {
                const buscafaq = yield prisma_1.default.faq.findMany({
                    where: dados,
                    include: {
                        sistema: {
                            select: {
                                nome_sistema: true
                            }
                        },
                        modulo: {
                            select: {
                                nome_modulo: true
                            }
                        },
                        submodulo: {
                            select: {
                                nome_submodulo: true
                            }
                        }
                    }
                });
                return buscafaq.map((faq) => {
                    var _a, _b, _c;
                    return ({
                        id_faq: faq.id_faq,
                        nome_faq: faq.nome_faq,
                        status: faq.status,
                        id_sistema: faq.id_sistema,
                        nome_sistema: (_a = faq.sistema) === null || _a === void 0 ? void 0 : _a.nome_sistema,
                        id_modulo: faq.id_modulo,
                        nome_modulo: (_b = faq.modulo) === null || _b === void 0 ? void 0 : _b.nome_modulo,
                        id_submodulo: faq.id_submodulo,
                        nome_submodulo: (_c = faq.submodulo) === null || _c === void 0 ? void 0 : _c.nome_submodulo
                    });
                });
            }
            catch (error) {
                throw new Error('Erro no servico de listar faq');
            }
        });
    }
}
exports.ServicoListarFaqs = ServicoListarFaqs;
