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
exports.ControleListarRelease = void 0;
const servicoListarRelease_1 = require("../../servico/release/servicoListarRelease");
class ControleListarRelease {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_release, status, numero_release, finalizado } = req.query;
            const filtros = {
                id_release: id_release ? Number(id_release) : undefined,
                status: status === 'true' ? true : status === 'false' ? false : undefined,
                numero_release: numero_release ? Number(numero_release) : undefined,
                finalizado: finalizado === 'true' ? true : finalizado === 'false' ? false : undefined,
            };
            const servicolistarrelease = new servicoListarRelease_1.ServicoListarRelease();
            const release = yield servicolistarrelease.executar({ filtros });
            return res.json(release);
        });
    }
}
exports.ControleListarRelease = ControleListarRelease;
