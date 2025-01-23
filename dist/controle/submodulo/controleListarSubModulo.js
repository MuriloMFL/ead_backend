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
exports.ControleListarSubModulo = void 0;
const servicoListarSubModulo_1 = require("../../servico/submodulo/servicoListarSubModulo");
class ControleListarSubModulo {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_submodulo, nome_submodulo, id_sistema, id_modulo, status } = req.query;
            const filtros = {
                nome_submodulo: nome_submodulo,
                id_submodulo: id_submodulo ? Number(id_submodulo) : undefined,
                id_modulo: id_modulo ? Number(id_modulo) : undefined,
                status: status === 'true' ? true : status === 'false' ? false : undefined,
                id_sistema: id_sistema ? Number(id_sistema) : undefined,
            };
            const servicolistarsubmodulo = yield new servicoListarSubModulo_1.ServicoListaSubModulo();
            const submodulo = yield servicolistarsubmodulo.executar(filtros);
            return res.json(submodulo);
        });
    }
}
exports.ControleListarSubModulo = ControleListarSubModulo;
