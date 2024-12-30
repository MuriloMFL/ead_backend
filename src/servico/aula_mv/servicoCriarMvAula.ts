import prismaClient from "../../prisma";

class ServicoCriarMvAula {
    async executar({id_sistema, id_submodulo, id_modulo, id_aula, id_usuario, id_franquia}){
        
        const VerificaSeExiste = await prismaClient.mv_Aula.findFirst({
            where: {
                id_sistema: Number(id_sistema),
                id_submodulo: Number(id_submodulo),
                id_modulo: Number(id_modulo),
                id_aula: Number(id_aula),
                id_usuario: Number(id_usuario),
                id_franquia: Number(id_franquia),
            },
        });
        
        if (!VerificaSeExiste) {
            const aula_mv = await prismaClient.mv_Aula.create({
                data:{
                    id_sistema    : Number(id_sistema), 
                    id_submodulo  : Number(id_submodulo),
                    id_modulo     : Number(id_modulo),
                    id_aula       : Number(id_aula),
                    id_usuario    : Number(id_usuario),
                    id_franquia   : Number(id_franquia),
                }
            })
            return aula_mv
        }
    }
}

export {ServicoCriarMvAula}