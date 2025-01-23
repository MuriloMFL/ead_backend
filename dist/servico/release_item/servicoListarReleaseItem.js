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
exports.ServicoListarReleaseItem = void 0;
const client_1 = require("@prisma/client");
const prisma_1 = __importDefault(require("../../prisma"));
class ServicoListarReleaseItem {
    executar(filtros) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(filtros);
            try {
                const where = {
                    id_item_release: filtros.id_item_release ? Number(filtros.id_item_release) : undefined,
                    nome_release: filtros.nome_release ? { contains: filtros.nome_release, mode: client_1.Prisma.QueryMode.insensitive } : undefined,
                    numero_release: filtros.numero_release ? Number(filtros.numero_release) : undefined,
                    id_release: filtros.id_release ? Number(filtros.id_release) : undefined,
                    id_sistema: filtros.id_sistema ? Number(filtros.id_sistema) : undefined,
                    id_modulo: filtros.id_modulo ? Number(filtros.id_modulo) : undefined,
                    id_submodulo: filtros.id_submodulo ? Number(filtros.id_submodulo) : undefined,
                    correcao: filtros.correcao !== undefined ? Boolean(filtros.correcao) : undefined,
                    alteracao: filtros.alteracao !== undefined ? Boolean(filtros.alteracao) : undefined,
                };
                const BuscaReleaseItem = yield prisma_1.default.release_item.findMany({
                    where,
                    include: {
                        sistema: { select: { nome_sistema: true } },
                        modulo: { select: { nome_modulo: true } },
                        submodulo: { select: { nome_submodulo: true } },
                    },
                });
                return BuscaReleaseItem.map((ReleaseItem) => {
                    var _a, _b, _c;
                    return ({
                        id_item_release: ReleaseItem.id_item_release,
                        nome_release: ReleaseItem.nome_release,
                        numero_release: ReleaseItem.numero_release,
                        id_release: ReleaseItem.id_release,
                        id_sistema: ReleaseItem.id_sistema,
                        nome_sistema: (_a = ReleaseItem === null || ReleaseItem === void 0 ? void 0 : ReleaseItem.sistema) === null || _a === void 0 ? void 0 : _a.nome_sistema,
                        id_modulo: ReleaseItem.id_modulo,
                        nome_modulo: (_b = ReleaseItem === null || ReleaseItem === void 0 ? void 0 : ReleaseItem.modulo) === null || _b === void 0 ? void 0 : _b.nome_modulo,
                        id_submodulo: ReleaseItem.id_submodulo,
                        nome_submodulo: (_c = ReleaseItem === null || ReleaseItem === void 0 ? void 0 : ReleaseItem.submodulo) === null || _c === void 0 ? void 0 : _c.nome_submodulo,
                        correcao: ReleaseItem.correcao,
                        alteracao: ReleaseItem.alteracao,
                        observacao: ReleaseItem.observacao
                    });
                });
            }
            catch (error) {
                console.error('Erro no serviço de ListarItem:', error);
                throw new Error('Erro no serviço de ListarItem');
            }
        });
    }
}
exports.ServicoListarReleaseItem = ServicoListarReleaseItem;
