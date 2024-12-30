import prisma from '../../prisma';

interface Sistema {
    nome_sistema: string;
}

class ServicoCriarSistema {
    async executar({nome_sistema}: Sistema){
        const verificarSistemaExiste = await prisma.sistema.findFirst({
            where:{
                nome_sistema : nome_sistema
            }
        })
        if (verificarSistemaExiste){
            throw new Error ('Sistema já existe!!')       
         }
         
        try {
             const sistema = await prisma.sistema.create({
                 data:{
                     nome_sistema:nome_sistema,
                 },select:{
                     nome_sistema: true,
                     status: true
                 }
             })
             return sistema
        }catch(Erro){
            throw new Error ('Erro ao salvar novo sistema')
        }
    }
}

export {ServicoCriarSistema}