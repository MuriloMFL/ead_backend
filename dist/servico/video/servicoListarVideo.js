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
exports.ServicoListarVideo = void 0;
const client_1 = require("@prisma/client");
const prisma_1 = __importDefault(require("../../prisma"));
class ServicoListarVideo {
    executar(filtros) {
        return __awaiter(this, void 0, void 0, function* () {
            const dados = {
                nome_video: filtros.nome_video
                    ? { contains: filtros.nome_video, mode: client_1.Prisma.QueryMode.insensitive }
                    : undefined,
                status: filtros.status,
                id_sistema: filtros.id_sistema,
                id_modulo: filtros.id_modulo,
                id_submodulo: filtros.id_submodulo
            };
            try {
                const buscavideo = yield prisma_1.default.video.findMany({
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
                return buscavideo.map((video) => {
                    var _a, _b, _c;
                    return ({
                        id_video: video.id_video,
                        id_sistema: video.id_sistema,
                        nome_sistema: (_a = video.sistema) === null || _a === void 0 ? void 0 : _a.nome_sistema,
                        id_modulo: video.id_modulo,
                        nome_modulo: (_b = video.modulo) === null || _b === void 0 ? void 0 : _b.nome_modulo,
                        id_submodulo: video.id_submodulo,
                        nome_submodulo: (_c = video.submodulo) === null || _c === void 0 ? void 0 : _c.nome_submodulo,
                        nome_video: video.nome_video,
                        status: video.status
                    });
                });
            }
            catch (error) {
                throw new Error('Erro no serviço de listar video');
            }
        });
    }
}
exports.ServicoListarVideo = ServicoListarVideo;
