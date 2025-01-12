import fs from 'fs';
import path from 'path';
import prismaClient from "../../prisma";

class ServicoDetalharFaq {
    async executar(id_faq) {
        try {
            const faq = await prismaClient.faq.findFirst({
                where: {
                    id_faq: Number(id_faq),
                },
            });

            if (!faq) {
                throw new Error(`FAQ com ID ${id_faq} não encontrado`);
            }

            const filePath = faq.link;
            let htmlContent = null;

            if (filePath && fs.existsSync(filePath)) {
                htmlContent = fs.readFileSync(filePath, 'utf-8');
            } else {
                console.warn(`Arquivo HTML não encontrado para o FAQ com ID ${id_faq} no caminho: ${filePath}`);
            }

            return {
                ...faq,
                link: htmlContent, // Retorna o conteúdo HTML no campo `link`
            };
        } catch (error) {
            console.error("Erro ao detalhar FAQ:", error);
            throw new Error('Erro no serviço de detalhar FAQ');
        }
    }
}

export { ServicoDetalharFaq };
