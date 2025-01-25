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
exports.ControleCriarMvRelease = void 0;
const servicoCriarMvRelease_1 = require("../../servico/release_mv/servicoCriarMvRelease");
class ControleCriarMvRelease {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_release, id_usuario } = req.body;
            const servicoCriarMvRelease = new servicoCriarMvRelease_1.ServicoCriarMvRelease();
            const mvRelease = yield servicoCriarMvRelease.executar({ id_release, id_usuario });
            return res.json(mvRelease);
        });
    }
}
exports.ControleCriarMvRelease = ControleCriarMvRelease;
