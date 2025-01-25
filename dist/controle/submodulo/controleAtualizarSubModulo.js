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
exports.ControleAtualizarSubModulo = void 0;
const servicoAtualizarSubModulo_1 = require("../../servico/submodulo/servicoAtualizarSubModulo");
class ControleAtualizarSubModulo {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const dados = req.body;
            const servicoatualizarsubmodulo = new servicoAtualizarSubModulo_1.ServicoAtualizarSubModulo();
            try {
                const submodulo = yield servicoatualizarsubmodulo.executar(dados);
                return res.json(submodulo);
            }
            catch (_a) {
                throw new Error('Erro no controle do submodulo');
            }
        });
    }
}
exports.ControleAtualizarSubModulo = ControleAtualizarSubModulo;
