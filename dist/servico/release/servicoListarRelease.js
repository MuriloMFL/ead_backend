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
exports.ServicoListarRelease = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ServicoListarRelease {
    executar(_a) {
        return __awaiter(this, arguments, void 0, function* ({ filtros }) {
            const dados = {
                id_release: filtros.release,
                numero_release: filtros.numero_release,
                status: filtros.status,
                finalizado: filtros.finalizado
            };
            const buscarelease = yield prisma_1.default.release.findMany({
                where: dados,
                orderBy: {
                    numero_release: 'desc'
                },
                include: {
                    usuario: {
                        select: { nome_usuario: true }
                    }
                }
            });
            return buscarelease.map((release) => {
                var _a;
                return ({
                    id_release: release.id_release,
                    numero_release: release.numero_release,
                    data_inclusao: release.data_inclusao
                        ? new Date(release.data_inclusao).toLocaleDateString('pt-BR')
                        : null,
                    id_usuario: release.id_usuario,
                    versao_gestores: release.versao_gestores,
                    versao_sincdata: release.versao_sincdata,
                    versao_gestorpdv: release.versao_gestorpdv,
                    versao_balcao: release.versao_balcao,
                    nome_usuario: (_a = release.usuario) === null || _a === void 0 ? void 0 : _a.nome_usuario,
                    status: release.status,
                    finalizado: release.finalizado
                });
            });
        });
    }
}
exports.ServicoListarRelease = ServicoListarRelease;
