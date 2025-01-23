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
exports.ControleDetalharAula = void 0;
const servicoDetalharAula_1 = require("../../servico/aula/servicoDetalharAula");
class ControleDetalharAula {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_aula } = req.params;
            const servicodetalharaula = new servicoDetalharAula_1.ServicoDetalharAula();
            const aula = yield servicodetalharaula.executar(Number(id_aula));
            return res.json(aula);
        });
    }
}
exports.ControleDetalharAula = ControleDetalharAula;
