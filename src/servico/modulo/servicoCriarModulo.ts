import prisma from "../../prisma";

class ServicoCriarModulo{
    async executar(nome_modulo, id_sistema){

        const verificarModulo = await prisma.modulo.findFirst({
            where: {
                nome_modulo : nome_modulo,
                id_sistema  : Number(id_sistema)
            }
        })

        if(verificarModulo) {
            throw new Error ('Modulo já existe')
        }

        try{
            const modulo = await prisma.modulo.create({
                data: {
                    nome_modulo: nome_modulo,
                    id_sistema: Number(id_sistema),
                    status: true
                }, select:{
                    id_modulo: true,
                    nome_modulo: true,
                    id_sistema: true
                }
            })
            return modulo;
        }catch {
            throw new Error ('Erro ao tentar cadastrar')
        }

    }
}

export {ServicoCriarModulo}