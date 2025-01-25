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
exports.ControleCriarRelease = void 0;
const servicoCriarRelease_1 = require("../../servico/release/servicoCriarRelease");
class ControleCriarRelease {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { numero_release, versao_gestores, versao_sincdata, versao_gestorpdv, versao_balcao, id_usuario, finalizado } = req.body;
            const servicocriarrelease = new servicoCriarRelease_1.ServicoCriarRelease();
            const release = yield servicocriarrelease.executar({
                numero_release,
                versao_gestores,
                versao_sincdata,
                versao_gestorpdv,
                versao_balcao,
                id_usuario,
                finalizado: finalizado ? finalizado === 'true' : true ? finalizado === 'false' : false
            });
            return res.json(release);
        });
    }
}
exports.ControleCriarRelease = ControleCriarRelease;
