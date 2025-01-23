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
exports.ControleTrocarStatusSubmodulo = void 0;
const servicoTrocarStatusSubmodulo_1 = require("../../servico/submodulo/servicoTrocarStatusSubmodulo");
class ControleTrocarStatusSubmodulo {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_submodulo = req.body;
            const servicotrocarstatussubmodulo = new servicoTrocarStatusSubmodulo_1.ServicoTrocarStatusSubModulo();
            const submodulo = yield servicotrocarstatussubmodulo.executar(id_submodulo);
            return res.json(submodulo);
        });
    }
}
exports.ControleTrocarStatusSubmodulo = ControleTrocarStatusSubmodulo;
