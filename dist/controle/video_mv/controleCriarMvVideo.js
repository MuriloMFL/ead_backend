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
exports.ControleCriarMvVideo = void 0;
const servicoCriarMvVideo_1 = require("../../servico/video_mv/servicoCriarMvVideo");
class ControleCriarMvVideo {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_sistema, id_submodulo, id_modulo, id_aula, id_usuario, id_franquia, id_video } = req.body;
            const servicoCriarMvVideo = new servicoCriarMvVideo_1.ServicoCriarMVVideo();
            const video_mv = yield servicoCriarMvVideo.executar({
                id_sistema, id_submodulo, id_modulo, id_aula, id_usuario, id_franquia, id_video
            });
            return res.json(video_mv);
        });
    }
}
exports.ControleCriarMvVideo = ControleCriarMvVideo;
