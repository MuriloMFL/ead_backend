import prismaClient from "../../prisma";

class ServicoDetalharPlanejamento {
    async executar({id_planejamento}){
        try {
            const planejamento = await prismaClient.planejamento.findFirst({
                where :{
                    id_planejamento : Number(id_planejamento)
                }
            })

            if (!planejamento){
                return { mensagem: "Planejamento não encontrado." };
            }

            return planejamento
        } catch (error) {
            throw new Error('Erro no servico de detalhar PLanejamento')
        }
    }
}

export {ServicoDetalharPlanejamento}