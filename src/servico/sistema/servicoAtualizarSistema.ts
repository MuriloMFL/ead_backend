import prisma from "../../prisma";

interface Sistema {
    id_sistema: number,
    nome_sistema: string,
}

class ServicoAtualizarSistema {
    async executar({id_sistema, nome_sistema}: Sistema){
        
        try {
            const sistema = await prisma.sistema.update({
                data:{
                    nome_sistema: nome_sistema
                },
                where: {
                    id_sistema: Number(id_sistema)
                }
            })
            return sistema;
        }catch (erro){
            throw new Error('Erro ao atualizar Sistema');
        }

    }
}

export {ServicoAtualizarSistema}