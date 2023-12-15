import ApiService from '../apiService'

import erroValidacao from '../exception/erroValidacao'

class UsuarioService extends ApiService {

    constructor(){
        super('/api/usuarios')
    }

    autenticar(credenciais){
        return this.post('/autenticar', credenciais)
    }

    obterSaldoPorUsuario(id){
        return this.get(`/${id}/saldo`);
    }

    salvar(usuario){
        console.log(usuario.nome);
        return this.post('', usuario);
        
    }

    obterNomeDoUsuario(id){
        return this.get(`/${id}/nome`);
    }

    validar(usuario){
        const erros = []

        if(!usuario.nome){
            erros.push('Nome é obrigatório.')
        }

        if(!usuario.email){
            erros.push('Email é obrigatório.')
        }else if( !usuario.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/) ){
            erros.push('Informe um email válido.')
        }

        if(!usuario.senha || !usuario.senhaRepeticao){
            erros.push('Digite a senha 2x.')
        }else if( usuario.senha !== usuario.senhaRepeticao ){
            erros.push('As senhas não batem.')
        }        

        if(erros && erros.length > 0){
            throw new erroValidacao(erros);
        }
    }

}

export default UsuarioService;