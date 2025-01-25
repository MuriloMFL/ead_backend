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
exports.ControleCriarProva = void 0;
const servicoCriarProva_1 = require("../../servico/prova/servicoCriarProva");
class ControleCriarProva {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_sistema, id_submodulo, id_modulo, nome_prova, cliente } = req.body;
            const servicocriarprova = new servicoCriarProva_1.ServicoCriarProva();
            const prova = yield servicocriarprova.executar({ id_sistema, id_submodulo, id_modulo, nome_prova, cliente });
            return res.json(prova);
        });
    }
}
exports.ControleCriarProva = ControleCriarProva;
