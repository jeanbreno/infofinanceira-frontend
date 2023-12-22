import React from 'react'
import { withRouter } from 'react-router-dom'

import Card from '../../components/card'
import UsuarioService from '../../app/service/usuarioService'
import { AuthContext } from '../../main/provedorAutenticacao'
import localStorageService from '../../app/service/localStorageService'
import UsuarioTable from './usuarioTable'

class Perfil extends React.Component {

    state = {
        id: '',
        nome: '',
        email: '',
        senha: '',
        perfil: []
    }

    constructor(){
        super();
        this.usuarioService = new UsuarioService();
    }

    componentDidMount(){
        const usuarioLogado = localStorageService.obterItem('_usuario_logado');

        const filtro = {
            id: usuarioLogado.id,
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha
        }
        
        this.usuarioService
            .consultar(filtro)
            .then( resposta => {
                const responseObj = resposta.data;
                this.setState({ perfil: responseObj })              
            }).catch( error => {
                console.log(error)
            })
    }

    editar = (id) => {
        this.props.history.push(`/cadastroUsuario/${id}`)
    }
    
    render(){
        return (
            <Card title="Perfil do usuário">
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-component"> 
                            <UsuarioTable perfil={this.state.perfil} 
                                          editAction={this.editar}
                            />
                        </div>
                    </div>
                </div>   
                <br/ >          
            </Card>

        )
    }
}

Perfil.contextType = AuthContext;

export default withRouter(Perfil);