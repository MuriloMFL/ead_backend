import prismaClient from "../../prisma";

class ServicoCriarMvRelease {
    async executar({id_release, id_usuario}){

        const VerificaSeExiste = await prismaClient.mv_Release.findFirst({
            where :{
                id_release : Number(id_release),
                id_usuario : Number(id_usuario),
            }
        })
        
        if(!VerificaSeExiste){
            try {
                const mvRelease = await prismaClient.mv_Release.create({
                    data:{
                        id_release : Number(id_release),
                        id_usuario : Number(id_usuario),
                        data_visto : new Date()
                    }
                })
                return mvRelease
            } catch (error) {
                throw new Error('Erro no servico de criar mv Release')
            }
        }
    }
}

export {ServicoCriarMvRelease}