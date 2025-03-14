import prismaClient from "../../prisma";

class ServicoContarSistemas {
    async executar(){
        try {
            const contSistemas = await prismaClient.sistema.count()
            return contSistemas;
        } catch (error) {
            throw new Error('Erro no serviço de contar sistemas')
        }

    }
}

export {ServicoContarSistemas}