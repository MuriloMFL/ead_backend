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
exports.ControleCriarSistema = void 0;
const servicoCriarSistema_1 = require("../../servico/sistema/servicoCriarSistema");
class ControleCriarSistema {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome_sistema, } = req.body;
            const servicoCriarSistema = new servicoCriarSistema_1.ServicoCriarSistema();
            const sistema = yield servicoCriarSistema.executar({
                nome_sistema,
            });
            return res.json({ sistema });
        });
    }
}
exports.ControleCriarSistema = ControleCriarSistema;
