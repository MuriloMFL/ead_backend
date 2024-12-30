import { ServicoAtualizarSubModulo } from "../../servico/submodulo/servicoAtualizarSubModulo";
import { Response, Request } from "express";

class ControleAtualizarSubModulo {
    async handle (req: Request, res: Response){
        const dados: {id_submodulo, nome_submodulo, id_sistema, id_modulo} = req.body;

        const servicoatualizarsubmodulo = new ServicoAtualizarSubModulo();

        try {
            const submodulo = await servicoatualizarsubmodulo.executar(dados);
            return res.json(submodulo)
        }catch {
            throw new Error('Erro no controle do submodulo')
        }

    }
}

export {ControleAtualizarSubModulo}