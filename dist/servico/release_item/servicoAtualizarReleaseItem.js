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
exports.ServicoAtualizarReleaseItem = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class ServicoAtualizarReleaseItem {
    executar(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id_item_release, nome_release, numero_release, id_release, id_sistema, id_modulo, id_submodulo, correcao, alteracao, imagem, observacao }) {
            try {
                const ReleaseItemAtual = yield prisma_1.default.release_item.findUnique({
                    where: {
                        id_item_release: Number(id_item_release)
                    },
                });
                if (!ReleaseItemAtual) {
                    throw new Error(`Erro Com ID ${id_item_release} não encontrado`);
                }
                const dirPath = path_1.default.resolve(__dirname, '../../media/releaseItem');
                if (!fs_1.default.existsSync(dirPath)) {
                    fs_1.default.mkdirSync(dirPath, { recursive: true });
                }
                const filePath = path_1.default.join(dirPath, `${id_item_release}.html`);
                if (observacao) {
                    fs_1.default.writeFileSync(filePath, observacao, 'utf-8');
                }
                const releaseItem = yield prisma_1.default.release_item.update({
                    where: {
                        id_item_release: Number(id_item_release)
                    }, data: {
                        nome_release,
                        numero_release,
                        id_release,
                        id_sistema: Number(id_sistema),
                        id_modulo: Number(id_modulo),
                        id_submodulo: Number(id_submodulo),
                        correcao: Boolean(correcao),
                        alteracao: Boolean(alteracao),
                        imagem,
                        observacao,
                    }
                });
                return releaseItem;
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
exports.ServicoAtualizarReleaseItem = ServicoAtualizarReleaseItem;
