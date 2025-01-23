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
exports.ControleCriarVideo = void 0;
const servicoCriarVideo_1 = require("../../servico/video/servicoCriarVideo");
class ControleCriarVideo {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_sistema, id_modulo, id_submodulo, id_aula, nome_video, link, observacao, order } = req.body;
            const servicocriarvideo = new servicoCriarVideo_1.ServicoCriarVideo();
            const video = yield servicocriarvideo.executar({
                id_sistema,
                id_modulo,
                id_submodulo,
                id_aula,
                nome_video,
                link,
                observacao,
                order
            });
            return res.json(video);
        });
    }
}
exports.ControleCriarVideo = ControleCriarVideo;
