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
exports.ServicoTrocarStatusVideo = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ServicoTrocarStatusVideo {
    executar(id_video) {
        return __awaiter(this, void 0, void 0, function* () {
            const verificaStatus = yield prisma_1.default.video.findFirst({
                where: {
                    id_video: id_video,
                }, select: {
                    status: true
                }
            });
            try {
                if (verificaStatus.status) {
                    const video = yield prisma_1.default.video.update({
                        where: {
                            id_video: id_video
                        }, data: {
                            status: false,
                            data_inativo: new Date()
                        }
                    });
                    return video;
                }
                else {
                    const video = yield prisma_1.default.video.update({
                        where: {
                            id_video: id_video
                        }, data: {
                            status: true
                        }
                    });
                    return video;
                }
            }
            catch (error) {
                throw new Error('Erro no servico de trocar status video');
            }
        });
    }
}
exports.ServicoTrocarStatusVideo = ServicoTrocarStatusVideo;
