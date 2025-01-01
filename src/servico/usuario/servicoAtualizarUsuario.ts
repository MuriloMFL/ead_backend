import prisma from '../../prisma';
import { hash } from 'bcryptjs';

class ServicoAtualizarUsuario {
    async executar ({id_usuario, nome_usuario, email, login, senha, id_franquia, tipo_usuario}){

        const dadosAtualizacao: any = {
            nome_usuario,
            email,
            login,
            id_franquia: Number(id_franquia),
            tipo_usuario
        }

        if(senha) {
            const passwordHash = await hash(senha, 8);
            dadosAtualizacao.senha = passwordHash;
        }

        const usuario = await prisma.usuario.update({
            data: dadosAtualizacao,
            where:{
                id_usuario : Number(id_usuario)
            }
        });

        return usuario;

    }
}

export {ServicoAtualizarUsuario};