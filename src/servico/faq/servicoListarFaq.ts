import prismaClient from "../../prisma";
import { Prisma } from "@prisma/client";

class ServicoListarFaqs {
    async executar (filtros: {id_sistema,id_submodulo, id_modulo, nome_faq, status}){

        const dados = {
            nome_faq:  filtros.nome_faq
                          ? { contains: filtros.nome_faq, mode: Prisma.QueryMode.insensitive }
                          : undefined,
            status:       filtros.status,
            id_sistema:   filtros.id_sistema,
            id_modulo:    filtros.id_modulo,
            id_submodulo: filtros.id_submodulo 
        }

        try {
            const buscafaq = await prismaClient.faq.findMany({
                where: dados,
                include: {
                    sistema:{
                        select: {
                            nome_sistema: true
                        }
                    },
                    modulo: {
                        select: {
                            nome_modulo: true
                        }
                    },
                    submodulo: {
                        select: {
                            nome_submodulo: true
                        }
                    }

                }
            })
            return buscafaq.map((faq)=> ({
                id_faq  :     faq.id_faq,
                nome_faq:     faq.nome_faq,
                status:       faq.status,
                id_sistema:   faq.id_sistema,
                nome_sistema: faq.sistema?.nome_sistema,
                id_modulo:    faq.id_modulo,
                nome_modulo:  faq.modulo?.nome_modulo,
                id_submodulo: faq.id_submodulo,
                nome_submodulo: faq.submodulo?.nome_submodulo
            }))
        } catch (error) {
            throw new Error('Erro no servico de listar faq')
        }
    }
}

export {ServicoListarFaqs}