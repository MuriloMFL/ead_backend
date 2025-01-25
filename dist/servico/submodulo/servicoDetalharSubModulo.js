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
exports.ServicoDetalharSubModulo = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ServicoDetalharSubModulo {
    executar(id_submodulo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const submodulo = yield prisma_1.default.subModulo.findFirst({
                    where: {
                        id_submodulo: Number(id_submodulo),
                    }, select: {
                        id_submodulo: true,
                        nome_submodulo: true,
                        id_modulo: true,
                        modulo: {
                            select: {
                                nome_modulo: true
                            }
                        },
                        id_sistema: true,
                        sistema: {
                            select: {
                                nome_sistema: true
                            }
                        }
                    }
                });
                return submodulo;
            }
            catch (erro) {
                throw new Error('Erro no serviço de detalhar submodulo');
            }
        });
    }
}
exports.ServicoDetalharSubModulo = ServicoDetalharSubModulo;
