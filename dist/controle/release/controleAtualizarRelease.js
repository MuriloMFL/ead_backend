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
exports.ControleAtualizarRelease = void 0;
const servicoAtualizarRelease_1 = require("../../servico/release/servicoAtualizarRelease");
class ControleAtualizarRelease {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_release, numero_release, versao_gestores, versao_sincdata, versao_gestorpdv, versao_balcao, finalizado } = req.body;
            const servicoAtualizarRelease = new servicoAtualizarRelease_1.ServicoAtualizarRelease();
            const release = yield servicoAtualizarRelease.executar({
                id_release,
                numero_release,
                versao_gestores,
                versao_sincdata,
                versao_gestorpdv,
                versao_balcao,
                finalizado: finalizado ? finalizado === 'true' : true ? finalizado === 'false' : false
            });
            return res.json(release);
        });
    }
}
exports.ControleAtualizarRelease = ControleAtualizarRelease;
