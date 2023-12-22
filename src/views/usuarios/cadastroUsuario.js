import React from 'react'

import { withRouter } from 'react-router-dom'
import Card from '../../components/card'
import FormGroup from '../../components/formGroup'

import UsuarioService from '../../app/service/usuarioService'
import * as messages from '../../components/toastr'
import localStorageService from '../../app/service/localStorageService'

class CadastroUsuario extends React.Component{

    state = {
        id: null,
        nome : '',
        email: '', 
        senha: '',
        senhaRepeticao : '',
        atualizando: false,
        usuario: []
    }

    constructor(){
        super();
        this.service = new UsuarioService();
    }

    componentDidMount(){
        const params = this.props.match.params
        if(params.id){
            this.service
                .obterPorId(params.id)
                .then(response => {
                    this.setState( {...response.data, atualizando: true} )
                })
                .catch(erros => {
                    messages.mensagemErro(erros.response.data)
                })
        }

    }

    cadastrar = () => {
        const {nome, email, senha, senhaRepeticao } = this.state        
        const usuario = {nome,  email, senha, senhaRepeticao }

        try{
            this.service.validar(usuario);
        }catch(erro){
            const msgs = erro.mensagens;
            msgs.forEach(msg => messages.mensagemErro(msg));
            return false;
        }

        this.service.salvar(usuario)
            .then( response => {
                this.props.history.push('/login')
                messages.mensagemSucesso('Usuário cadastrado com sucesso!')
            }).catch(error => {
                messages.mensagemErro(error.response.data)
            })
    }

    atualizar = () => {
        const usuarioLogado = localStorageService.obterItem('_usuario_logado')
        const {nome, email, senha, senhaRepeticao } = this.state        
        const usuario = {nome,  email, senha, senhaRepeticao, id:usuarioLogado.id }
        
        try{
            this.service.validar(usuario)
        }catch(erro){
            const mensagens = erro.mensagens;
            mensagens.forEach(msg => messages.mensagemErro(msg));
            return false;
        } 

        this.service
            .atualizar(usuario)
            .then(response => {
                this.props.history.push('/home')
                messages.mensagemSucesso('Usuário atualizado com sucesso!')
            }).catch(error => {
                messages.mensagemErro(error.response.data)
            })
    }

    cancelar = () => {
        this.props.history.push('/home')
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({ [name] : value })
    }

    render(){
        return (
            <Card title={ this.state.atualizando ? 'Editar Perfil'  : 'Cadastro de Usuário' }>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label="Nome: *" htmlFor="inputNome">
                                <input id="inputNome" type="text" 
                                       className="form-control"
                                       name="nome"
                                       value={this.state.nome}
                                       onChange={this.handleChange} />
                            </FormGroup>
                            {this.state.atualizando ?
                                (
                                    <FormGroup label="Email: *" htmlFor="inputEmail">
                                        <input id="inputEmail" type="email" 
                                            className="form-control"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.handleChange} 
                                            disabled/>
                                    </FormGroup>
                                ) : (
                                    <FormGroup label="Email: *" htmlFor="inputEmail">
                                        <input id="inputEmail" type="email" 
                                            className="form-control"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.handleChange} />
                                    </FormGroup>
                                )
                            } {this.state.atualizando ?
                                (
                                    <FormGroup label="Senha: *" htmlFor="inputSenha">
                                        <input type="password" 
                                                id="inputSenha"
                                                className="form-control"
                                                name="senha"
                                                onChange={this.handleChange} />
                                    </FormGroup>
                                ) : (
                                    <FormGroup label="Senha: *" htmlFor="inputSenha">
                                        <input type="password" 
                                                id="inputSenha"
                                                className="form-control"
                                                name="senha"
                                                value={this.state.senha}
                                                onChange={this.handleChange} />
                                    </FormGroup>
                                )
                            }
                            <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
                                <input type="password" 
                                       id="inputRepitaSenha"
                                       className="form-control"
                                       name="senhaRepeticao"
                                       value={this.state.senhaRepeticao}
                                       onChange={this.handleChange} />
                            </FormGroup>
                            <div className='row'>
                                <div className='col-md-6'>
                                    {this.state.atualizando ? 
                                        (
                                            <button onClick={this.atualizar} 
                                                className="btn btn-success">
                                                <i className="pi pi-refresh"></i> Atualizar
                                            </button>
                                        ) : (
                                            <button onClick={this.cadastrar} type="button" name='btnSalvar' className="btn btn-success">
                                                <i className="pi pi-save"></i> Salvar
                                            </button>
                                        )
                                    }
                                    <button onClick={this.cancelar} type="button" className="btn btn-danger">
                                        <i className="pi pi-times"></i> Cancelar
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(CadastroUsuario)