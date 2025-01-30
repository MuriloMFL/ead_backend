import prismaClient from "../../prisma";
import fs from 'fs'

class ServicoDetalharReleaseItem {
    async executar({id_item_release}){
        try {
            
            const releaseItem = await prismaClient.release_item.findFirst({
                where : {
                    id_item_release : Number(id_item_release)
                }
            })

            if (!releaseItem) {
                throw new Error(`Item da Release ${id_item_release} não Encontrado`)
            }

            const filePath = releaseItem.observacao;
            let htmlContent = null;

            if (filePath && fs.existsSync(filePath)){
                htmlContent = fs.readFileSync(filePath, 'utf-8');
            }else{
                console.log(`Arquivo HTML não Encontrado para o ID: ${id_item_release}`)
            }

            return {
                ...releaseItem,
                observação: htmlContent,
            }
  
        } catch (error) {
            throw new Error('Erro no serviço de detalhar ReleaseItem')
        }
    }
}

export {ServicoDetalharReleaseItem}