import React from 'react'
import { TickerTape } from "react-ts-tradingview-widgets";

import UsuarioService from '../app/service/usuarioService'
import { AuthContext } from '../main/provedorAutenticacao'

class Home extends React.Component{

    state = {
        saldo: 0,
        nome:''
    }

    constructor(){
        super()
        this.usuarioService = new UsuarioService();
    }

    componentDidMount(){
        const usuarioLogado = this.context.usuarioAutenticado

        this.usuarioService
            .obterSaldoPorUsuario(usuarioLogado.id)
            .then( response => {
                this.setState({ saldo: response.data})
            }).catch(error => {
                console.error(error.response)
            });

        this.usuarioService
            .obterNomeDoUsuario(usuarioLogado.id)
            .then( response => {
                this.setState({ nome: response.data})
            }).catch(error => {
                console.error(error.response)
            });

    }

    render(){
        return (
            <div>
                <div>
                    <TickerTape colorTheme="dark"></TickerTape>
                </div>
                <div className="jumbotron">
                    <h1 className="display-3">Bem vindo, {this.state.nome}</h1>
                    
            
                    <p className="lead">Seu saldo para o mês atual é de R$ {this.state.saldo} </p>
                    <hr className="my-4" />
                    
                    <p className="lead">
                        <a className="btn btn-danger btn-lg" 
                        href="/cadastroLancamentos" 
                        role="button"><i className="pi pi-money-bill"></i>  
                        Cadastrar Lançamento
                        </a>
                    </p>
                </div>
            </div>
        )
    }
}

Home.contextType = AuthContext;

export default Home