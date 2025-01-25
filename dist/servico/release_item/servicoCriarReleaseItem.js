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
exports.ServicoCriarReleaseItem = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class ServicoCriarReleaseItem {
    executar(_a) {
        return __awaiter(this, arguments, void 0, function* ({ nome_release, numero_release, id_release, id_sistema, id_modulo, id_submodulo, correcao, alteracao, imagem, observacao }) {
            try {
                const releaseItem = yield prisma_1.default.release_item.create({
                    data: {
                        nome_release: nome_release,
                        numero_release: Number(numero_release),
                        id_release: Number(id_release),
                        id_sistema: Number(id_sistema),
                        id_modulo: Number(id_modulo),
                        id_submodulo: Number(id_submodulo),
                        correcao: correcao,
                        alteracao: alteracao,
                        imagem: imagem,
                        observacao: '',
                    }
                });
                const dirPath = path_1.default.resolve(__dirname, '../../media/releaseItem');
                if (!fs_1.default.existsSync(dirPath)) {
                    fs_1.default.mkdirSync(dirPath, { recursive: true });
                }
                const filePath = path_1.default.join(dirPath, `${releaseItem.id_item_release}.html`);
                fs_1.default.writeFileSync(filePath, observacao, 'utf-8');
                const updatedItem = yield prisma_1.default.release_item.update({
                    where: { id_item_release: releaseItem.id_item_release },
                    data: { observacao: filePath },
                });
                return updatedItem;
            }
            catch (error) {
                console.error(error);
                throw new Error('Erro no serviço de Criar ReleaseItem');
            }
        });
    }
}
exports.ServicoCriarReleaseItem = ServicoCriarReleaseItem;
