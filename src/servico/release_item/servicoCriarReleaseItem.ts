import prismaClient from "../../prisma";
import fs from 'fs'
import path from 'path'

class ServicoCriarReleaseItem {
    async executar({nome_release, numero_release, id_release, id_sistema, id_modulo, id_submodulo,correcao, alteracao, imagem, observacao}){
        
        try {
            const releaseItem = await prismaClient.release_item.create({
                data: {
                    nome_release     : nome_release,
                    numero_release   : Number(numero_release),
                    id_release       : Number(id_release),
                    id_sistema       : Number(id_sistema),
                    id_modulo        : Number(id_modulo),
                    id_submodulo     : Number(id_submodulo),
                    correcao         : correcao,
                    alteracao        : alteracao,
                    imagem           : imagem,
                    observacao       : '',
                }
            });

            const dirPath = path.resolve(__dirname, '../../media/releaseItem');
            if (!fs.existsSync(dirPath)){
                fs.mkdirSync(dirPath, {recursive: true})
            }

            const filePath = path.join(dirPath, `${releaseItem.id_item_release}.html`);
            fs.writeFileSync(filePath, observacao, 'utf-8');

            const updatedItem = await prismaClient.release_item.update({
                where: {id_item_release: releaseItem.id_item_release},
                data: { observacao: filePath},
            })
            return updatedItem      
        } catch (error) {
            console.error(error)
            throw new Error('Erro no serviço de Criar ReleaseItem')
        }
    }
}

export {ServicoCriarReleaseItem}