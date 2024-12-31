import prisma from '../../prisma';
import { hash } from 'bcryptjs';

class ServicoAtualizarUsuario {
    async executar ({id_usuario, nome_usuario, email, login, senha, id_franquia, tipo_usuario}){

        const passwordHash = await hash(senha, 8);

        const usuario = await prisma.usuario.update({
            data: {
                nome_usuario: nome_usuario,
                email: email,
                login: login,
                senha: passwordHash,
                id_franquia: Number(id_franquia),
                tipo_usuario: tipo_usuario
            }, where:{
                id_usuario : Number(id_usuario)
            }
        });

        return usuario;

    }
}

export {ServicoAtualizarUsuario};