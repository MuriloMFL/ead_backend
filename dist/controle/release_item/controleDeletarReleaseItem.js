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
exports.ControleDeletarReleaseItem = void 0;
const servicoDeletarReleaseItem_1 = require("../../servico/release_item/servicoDeletarReleaseItem");
class ControleDeletarReleaseItem {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_item_release } = req.params;
            const servicoDeletarReleaseItem = new servicoDeletarReleaseItem_1.ServicoDeletarReleaseItem();
            const deletarItemRelease = yield servicoDeletarReleaseItem.executar({ id_item_release });
            return res.json(deletarItemRelease);
        });
    }
}
exports.ControleDeletarReleaseItem = ControleDeletarReleaseItem;
