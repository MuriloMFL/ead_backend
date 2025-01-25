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
exports.ControleCriarMvProva = void 0;
const servicoCriarMvProva_1 = require("../../servico/prova_mv/servicoCriarMvProva");
class ControleCriarMvProva {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_sistema, id_submodulo, id_modulo, id_usuario, id_franquia, id_prova } = req.body;
            const servicoCriarMvProva = new servicoCriarMvProva_1.ServicoCriarMvProva();
            const prova_mv = yield servicoCriarMvProva.executar({
                id_sistema, id_submodulo, id_modulo, id_usuario, id_franquia, id_prova
            });
            return res.json(prova_mv);
        });
    }
}
exports.ControleCriarMvProva = ControleCriarMvProva;
