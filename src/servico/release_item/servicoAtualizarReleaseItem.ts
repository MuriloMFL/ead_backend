import prismaClient from "../../prisma";
import fs from 'fs'
import path from "path";

class ServicoAtualizarReleaseItem {
    async executar({
        id_item_release, nome_release, numero_release, id_release, id_sistema, id_modulo, id_submodulo,correcao, alteracao, imagem, observacao
    }){
        try {
            const ReleaseItemAtual = await prismaClient.release_item.findUnique({
                where: {
                    id_item_release: Number(id_item_release)
                },
            })
            if (!ReleaseItemAtual){
                throw new Error(`Erro Com ID ${id_item_release} não encontrado`);
            }
            const dirPath = path.resolve(__dirname, '../../media/releaseItem');
            if (!fs.existsSync(dirPath)){
                fs.mkdirSync(dirPath, { recursive: true });
            }

            const filePath = path.join(dirPath, `${id_item_release}.html`);

            if(observacao){
                fs.writeFileSync(filePath, observacao, 'utf-8')
            }

            const releaseItem  = await prismaClient.release_item.update({
                where: {
                    id_item_release: Number(id_item_release)
                }, data: {
                    nome_release ,
                    numero_release,
                    id_release,
                    id_sistema   : Number(id_sistema),
                    id_modulo    : Number(id_modulo),
                    id_submodulo : Number(id_submodulo),
                    correcao     : Boolean(correcao),
                    alteracao    : Boolean(alteracao),
                    imagem,
                    observacao,                
                }
            })
            return releaseItem  
        } catch (error) {
            console.error(error)
        }

    }
}

export {ServicoAtualizarReleaseItem}