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
exports.ServicoDetalharFaq = void 0;
const fs_1 = __importDefault(require("fs"));
const prisma_1 = __importDefault(require("../../prisma"));
class ServicoDetalharFaq {
    executar(id_faq) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const faq = yield prisma_1.default.faq.findFirst({
                    where: {
                        id_faq: Number(id_faq),
                    },
                });
                if (!faq) {
                    throw new Error(`FAQ com ID ${id_faq} não encontrado`);
                }
                const filePath = faq.link;
                let htmlContent = null;
                if (filePath && fs_1.default.existsSync(filePath)) {
                    htmlContent = fs_1.default.readFileSync(filePath, 'utf-8');
                }
                else {
                    console.warn(`Arquivo HTML não encontrado para o FAQ com ID ${id_faq} no caminho: ${filePath}`);
                }
                return Object.assign(Object.assign({}, faq), { link: htmlContent });
            }
            catch (error) {
                console.error("Erro ao detalhar FAQ:", error);
                throw new Error('Erro no serviço de detalhar FAQ');
            }
        });
    }
}
exports.ServicoDetalharFaq = ServicoDetalharFaq;
