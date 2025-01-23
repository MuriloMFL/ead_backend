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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicoDetalharReleaseItem = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const fs_1 = __importDefault(require("fs"));
class ServicoDetalharReleaseItem {
    executar(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id_item_release }) {
            try {
                console.log(id_item_release);
                const releaseItem = yield prisma_1.default.release_item.findFirst({
                    where: {
                        id_item_release: Number(id_item_release)
                    }
                });
                if (!releaseItem) {
                    throw new Error(`Item da Release ${id_item_release} não Encontrado`);
                }
                const filePath = releaseItem.observacao;
                let htmlContent = null;
                if (filePath && fs_1.default.existsSync(filePath)) {
                    htmlContent = fs_1.default.readFileSync(filePath, 'utf-8');
                }
                else {
                    console.log(`Arquivo HTML não Encontrado para o ID: ${id_item_release}`);
                }
                return Object.assign(Object.assign({}, releaseItem), { observação: htmlContent });
            }
            catch (error) {
                throw new Error('Erro no serviço de detalhar ReleaseItem');
            }
        });
    }
}
exports.ServicoDetalharReleaseItem = ServicoDetalharReleaseItem;
