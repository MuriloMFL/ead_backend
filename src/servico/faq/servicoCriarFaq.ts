import fs from 'fs';
import path from 'path';
import prismaClient from "../../prisma";

class ServicoCriarFaq {
    async executar({ id_sistema, id_modulo, id_submodulo, id_aula, nome_faq, link, observacao, order }) {
        try {
            const faq = await prismaClient.faq.create({
                data: {
                    id_sistema: Number(id_sistema),
                    id_modulo: Number(id_modulo),
                    id_submodulo: Number(id_submodulo),
                    id_aula: Number(id_aula),
                    nome_faq: nome_faq,
                    link: '', 
                    observacao: observacao,
                    order: Number(order),
                },
            });

            const dirPath = path.resolve(__dirname, '../../media/faq');
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, { recursive: true });
            }

            const filePath = path.join(dirPath, `${faq.id_faq}.html`);

            fs.writeFileSync(filePath, link, 'utf-8');

            const updatedFaq = await prismaClient.faq.update({
                where: { id_faq: faq.id_faq },
                data: { link: filePath },
            });

            return updatedFaq;
        } catch (error) {
            console.error(error);
            throw new Error('Erro no serviço de criar FAQ');
        }
    }
}

export { ServicoCriarFaq };
