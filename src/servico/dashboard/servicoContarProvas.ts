import prismaClient from "../../prisma";

class ServicoContarProvas{
    async executar({id_usuario}){
        const QtdProvas = await prismaClient.mv_Prova.count({
            where: {
                id_usuario: Number(id_usuario)
            }
        })

        const Notas = await prismaClient.mv_Prova.findMany({
            where: {
                id_usuario: Number(id_usuario)
            }, select : {
                nota: true
            }
        })

    const somaNotas = Notas.reduce((total, item) => total + (item.nota || 0), 0);

    const media = QtdProvas > 0 ? somaNotas / QtdProvas : 0;

    return media;
    }
}

export {ServicoContarProvas}