import prismaClient from "../../prisma";

interface ProvaProps {
    id_sistema     : number,
    id_submodulo   : number,
    id_modulo      : number,
    nome_prova     : string
    cliente        : boolean  
}

class ServicoCriarProva {
    async executar({id_sistema, id_submodulo, id_modulo, nome_prova, cliente}: ProvaProps){
        try {
            const prova = await prismaClient.prova.create({
                data:{
                    id_sistema, id_submodulo, id_modulo, nome_prova, cliente
                }
            })
            return prova
        } catch (error) {
            throw new Error('Erro no servico de criar prova')
        }
    }
}

export {ServicoCriarProva}