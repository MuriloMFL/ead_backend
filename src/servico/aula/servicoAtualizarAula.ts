import prismaClient from "../../prisma";

interface AulaProps {
    id_aula       : number,
    id_sistema    : number,
    id_submodulo  : number,
    id_modulo     : number,
    nome_aula     : string,
    cliente       : boolean,  
}

class ServicoAtualizarAula{
    async executar({id_aula, id_sistema, id_submodulo, id_modulo, nome_aula, cliente} : AulaProps){
        const aula = await prismaClient.aula.update({
            where:{
                id_aula: id_aula
            }, data: {
                id_aula, id_sistema, id_submodulo, id_modulo, nome_aula, cliente
            }
        })
        return aula
    }
}

export {ServicoAtualizarAula}