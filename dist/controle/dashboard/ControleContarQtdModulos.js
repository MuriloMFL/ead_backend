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
exports.ControleContarQtdModulo = void 0;
const ServicoContarQtdModulos_1 = require("../../servico/dashboard/ServicoContarQtdModulos");
class ControleContarQtdModulo {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { status } = req.query;
            const contarModulo = new ServicoContarQtdModulos_1.ServicoContarQtdModulos();
            const Modulos = yield contarModulo.executar({ status });
            return res.json(Modulos);
        });
    }
}
exports.ControleContarQtdModulo = ControleContarQtdModulo;
