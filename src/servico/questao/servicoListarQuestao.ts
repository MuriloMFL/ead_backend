import prismaClient from "../../prisma";
import { Prisma } from "@prisma/client";

class ServicoListarQuestao {
    async executar (filtros){
        const dados = {
            id_questao   : filtros.id_questao, 
            status       : filtros.status, 
            questao      : filtros.questoes ? {contains: filtros.questoes, mode: Prisma.QueryMode.insensitive} : undefined,
            id_sistema   : filtros.id_sistema, 
            id_modulo    : filtros.id_modulo, 
            id_submodulo : filtros.id_submodulo,
            id_prova     : filtros.id_prova, 
            id_aula      : filtros.id_aula,
        }
        
        const buscaquestao = await prismaClient.questao.findMany({
            where: dados,
            include: {
                sistema: {
                    select: {
                        nome_sistema: true
                    }
                },
                modulo :{
                    select:{
                        nome_modulo: true
                    }
                },
                submodulo:{
                    select: {
                        nome_submodulo: true
                    }
                }
            }
        })

    return buscaquestao.map((questao)=> ({ 
        id_questao     : questao.id_questao, 
        status         : questao.status, 
        questoes       : questao.questao,
        id_sistema     : questao.id_sistema, 
        nome_sistema   : questao.sistema?.nome_sistema,
        id_modulo      : questao.id_modulo, 
        nome_modulo    : questao.modulo?.nome_modulo,
        id_submodulo   : questao.id_submodulo,
        nome_submodulo : questao.submodulo?.nome_submodulo,
        id_prova       : questao.id_prova
    }))
    }
}

export {ServicoListarQuestao}