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
exports.ServicoTrocarStatusFaq = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ServicoTrocarStatusFaq {
    executar(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id_faq }) {
            const verificarStatus = yield prisma_1.default.faq.findFirst({
                where: {
                    id_faq: Number(id_faq),
                    status: true
                }
            });
            try {
                if (verificarStatus) {
                    const faq = yield prisma_1.default.faq.update({
                        data: {
                            status: false,
                            data_inativo: new Date()
                        },
                        where: {
                            id_faq: Number(id_faq)
                        }
                    });
                    return faq;
                }
                else {
                    const faq = yield prisma_1.default.faq.update({
                        data: {
                            status: true,
                        },
                        where: {
                            id_faq: Number(id_faq)
                        }
                    });
                    return faq;
                }
            }
            catch (erro) {
                throw new Error('Erro no servico de trocar status da faq');
            }
        });
    }
}
exports.ServicoTrocarStatusFaq = ServicoTrocarStatusFaq;
