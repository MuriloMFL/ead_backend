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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControleListarVideo = void 0;
const servicoListarVideo_1 = require("../../servico/video/servicoListarVideo");
class ControleListarVideo {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_sistema, id_modulo, id_submodulo, nome_video, status } = req.query;
            const filtros = {
                id_sistema: id_sistema,
                id_modulo: id_modulo,
                id_submodulo: id_submodulo,
                nome_video: nome_video,
                status: status == 'true' ? true : status == 'false' ? false : undefined
            };
            const servicolistarvideo = new servicoListarVideo_1.ServicoListarVideo();
            const video = yield servicolistarvideo.executar(filtros);
            return res.json(video);
        });
    }
}
exports.ControleListarVideo = ControleListarVideo;
