import fs from 'fs';
import path from 'path';
import prismaClient from "../../prisma";

class ServicoAtualizarFaq {
    async executar({ id_faq, id_sistema, id_modulo, id_submodulo, id_aula, nome_faq, link, observacao, order }) {
        try {
            const faqAtual = await prismaClient.faq.findUnique({
                where: {
                    id_faq: Number(id_faq),
                },
            });

            if (!faqAtual) {
                throw new Error(`FAQ com ID ${id_faq} não encontrado`);
            }

            const dirPath = path.resolve(__dirname, '../../media/faq');
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, { recursive: true });
            }

            const filePath = path.join(dirPath, `${id_faq}.html`);

            if (link) {
                fs.writeFileSync(filePath, link, 'utf-8');
            }

            const faqAtualizado = await prismaClient.faq.update({
                where: {
                    id_faq: Number(id_faq),
                },
                data: {
                    id_sistema: Number(id_sistema),
                    id_modulo: Number(id_modulo),
                    id_submodulo: Number(id_submodulo),
                    id_aula: Number(id_aula),
                    nome_faq: nome_faq,
                    link: filePath, 
                    observacao: observacao,
                    order: Number(order),
                },
            });

            return faqAtualizado;
        } catch (error) {
            console.error(error);
            throw new Error('Erro no serviço de atualizar FAQ');
        }
    }
}

export { ServicoAtualizarFaq };
