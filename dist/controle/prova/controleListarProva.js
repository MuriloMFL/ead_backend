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
exports.ControleListarProva = void 0;
const servicoListarProva_1 = require("../../servico/prova/servicoListarProva");
class ControleListarProva {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_prova, id_sistema, nome_prova, id_modulo, id_submodulo, status } = req.query;
            const filtros = {
                id_prova: id_prova,
                id_sistema: id_sistema,
                id_modulo: id_modulo,
                id_submodulo: id_submodulo,
                nome_prova: nome_prova,
                status: status == 'true' ? true : status == 'false' ? false : undefined,
            };
            console.log(id_prova, id_sistema, nome_prova, id_modulo, id_submodulo, status);
            const servicolistarprovas = new servicoListarProva_1.ServicoListarProva();
            const provas = yield servicolistarprovas.executar(filtros);
            return res.json(provas);
        });
    }
}
exports.ControleListarProva = ControleListarProva;
