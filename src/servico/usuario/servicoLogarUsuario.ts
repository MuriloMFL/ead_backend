import { sign } from "jsonwebtoken";
import prismaClient from "../../prisma";
import { compare } from "bcryptjs";

interface SolicitacaoLogin {
    login: string;
    senha: string;
}

class ServicoLogarUsuario {
    async executar({login, senha}: SolicitacaoLogin){
        const usuario = await prismaClient.usuario.findFirst({
            where:{
                login: login
            }
        })

        if (!usuario) {
            throw new Error('Usuario/Senha Incorretos')
        } 

        const verificaSenha = await compare(senha, usuario.senha)

        if (!verificaSenha) {
            throw new Error('Usuario/Senha Incorretos')
        }

        // Verifica se a chave JWT_SECRET está definida
        if (!process.env.JWT_SECRET) {
            throw new Error('Chave JWT_SECRET não definida nas variáveis de ambiente');
        }

        const token = sign (
        {
            name: usuario.login,
            email: usuario.email,
        },
        process.env.JWT_SECRET,
        {
            subject: usuario.id_usuario.toString(),
            expiresIn: '30d'
        }
    )
        return {
            id:           usuario.id_usuario,
            nome_usuario: usuario.nome_usuario,
            login:        usuario.login,
            email:        usuario.email,
            id_franquia:  usuario.id_franquia,
            tipo_usuario: usuario.tipo_usuario,
            token:        token
        }
    }
}

export {ServicoLogarUsuario}