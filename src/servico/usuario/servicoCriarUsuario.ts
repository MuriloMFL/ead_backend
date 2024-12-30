import prisma from '../../prisma';
import { hash } from 'bcryptjs';

interface SolicitacaoUsuario {
    nome_usuario: string;
    email:        string;
    login:        string;
    senha:        string;
    id_franquia:  number;
    tipo_usuario: string;
    status:       boolean;
}

class ServicoCriarUsuario {
    async executar ({nome_usuario, email, login, senha, id_franquia, tipo_usuario, status}: SolicitacaoUsuario){
        
        const verificaUsuarioExiste = await prisma.usuario.findFirst({
            where: {
                OR: [
                    {login: login},
                    {email: email}
                ]   
            },
        });
        
        if (verificaUsuarioExiste){
            throw new Error ('Login ou email já existe');  
        }

        const passwordHash = await hash(senha, 8);

        const usuario = await prisma.usuario.create({
            data: {
                nome_usuario: nome_usuario,
                email: email,
                login: login,
                senha: passwordHash,
                id_franquia: id_franquia,
                tipo_usuario: tipo_usuario,
                status: status
            },
            select: {
                nome_usuario: true,
                email: true,
                login: true,
                id_franquia: true,
                tipo_usuario: true

            }
        });
        return usuario;

    }
}

export {ServicoCriarUsuario};