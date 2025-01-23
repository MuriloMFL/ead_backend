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
exports.ControleListarFranquia = void 0;
const servicoListarFranquia_1 = require("../../servico/franquia/servicoListarFranquia");
class ControleListarFranquia {
    handle(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { status, nome, id_franquia } = req.query;
            const filtros = {
                status: status === 'true' ? true : status === 'false' ? false : undefined,
                nome: nome ? String(nome) : undefined,
                id_franquia: id_franquia === '1' ? undefined : Number(id_franquia)
            };
            const servicoListarFranquia = new servicoListarFranquia_1.ServicoListarFranquia();
            try {
                const Franquia = yield servicoListarFranquia.executar(filtros);
                return res.json(Franquia);
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.ControleListarFranquia = ControleListarFranquia;
