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
exports.ControleTrocarStatusFranquia = void 0;
const servicoTrocarStatusFranquia_1 = require("../../servico/franquia/servicoTrocarStatusFranquia");
class ControleTrocarStatusFranquia {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_franquia } = req.body;
            const servicoTrocarStatusFranquia = new servicoTrocarStatusFranquia_1.ServicoTrocarStatusFranquia();
            try {
                const trocarStatusFranquia = yield servicoTrocarStatusFranquia.executar({ id_franquia });
                return res.json(trocarStatusFranquia);
            }
            catch (error) {
                return res.json("Erro ao tentar Trocar Status Franquia");
            }
        });
    }
}
exports.ControleTrocarStatusFranquia = ControleTrocarStatusFranquia;
