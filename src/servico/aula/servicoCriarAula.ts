import prismaClient from "../../prisma";
interface AulaProps {
    id_sistema    : number,
    id_submodulo  : number,
    id_modulo     : number,
    nome_aula     : string,
    cliente       : boolean,  
}
class ServicoCriarAula {
    async executar({
        id_sistema, id_submodulo, id_modulo, nome_aula, cliente
    }: AulaProps){
        try {
            const aula = await prismaClient.aula.create({
                data: {
                    id_sistema,
                    id_submodulo,
                    id_modulo,
                    nome_aula,
                    cliente
                }
            })

            return aula;
        } catch (error) {
            throw new Error('Erro no servico de criar aula')
        }
    }
}

export {ServicoCriarAula}