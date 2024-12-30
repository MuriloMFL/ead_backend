import prisma from '../../prisma';

interface SolicitacaoFranquia {
    nome:        string;
    responsavel: string;
    telefone:    string;
    status:      boolean;
}

class ServicoCriarFranquia {
    async executar ({nome,responsavel, telefone, status}: SolicitacaoFranquia){
        
        const verificaFranquiaExiste = await prisma.franquia.findFirst({
            where: {
                    nome: nome
            },
        });
        if (verificaFranquiaExiste){
            throw new Error ('Franquia já existe');  
        }

        const franquia = await prisma.franquia.create({
            data: {
                nome: nome,
                responsavel: responsavel,
                telefone: telefone,
                status: true
            },
            select: {
                nome:        true,
                responsavel: true,
                telefone:    true,
                status:      true
            }
        });
        return franquia;

    }
}

export {ServicoCriarFranquia};