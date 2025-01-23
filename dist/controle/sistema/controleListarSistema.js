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
exports.ControleListarSistema = void 0;
const servicoListarSistema_1 = require("../../servico/sistema/servicoListarSistema");
class ControleListarSistema {
    handle(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome_sistema, status } = req.query;
            const Status = status === 'true' ? true : status === 'false' ? false : undefined;
            const filtros = {
                status: Status,
                nome_sistema: nome_sistema ? String(nome_sistema) : undefined,
            };
            const servicolistarsistema = new servicoListarSistema_1.ServicoListarSistema();
            try {
                const sistema = yield servicolistarsistema.executar(filtros);
                return res.json(sistema);
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.ControleListarSistema = ControleListarSistema;
