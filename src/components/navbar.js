import React from 'react'

import NavbarItem from './navbarItem'
import { AuthConsumer } from '../main/provedorAutenticacao'

function Navbar(props){
    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <div className="container">
          <a href="/home" className="navbar-brand">InfoFinanceira</a>
          <button className="navbar-toggler" type="button" 
                  data-toggle="collapse" data-target="#navbarResponsive" 
                  aria-controls="navbarResponsive" aria-expanded="false" 
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
                <NavbarItem render={props.isUsuarioAutenticado} href="/home" label="Home" />
                <NavbarItem render={props.isUsuarioAutenticado} href="/consultaLancamentos" label="Cadastrar Lançamentos" />
                <NavbarItem render={props.isUsuarioAutenticado} href="https://infinanceira.blogspot.com/" target="_blank" label="Blog"/>
                <NavbarItem render={props.isUsuarioAutenticado} href="/perfil" label="Meu Perfil" />
                <NavbarItem render={props.isUsuarioAutenticado} onClick={props.deslogar} className="navBarSair" href="/login" label="Sair" />
            </ul>
            </div>
        </div>
      </div>
    )
}

export default () => (
  <AuthConsumer>
    {(context) => (
        <Navbar isUsuarioAutenticado={context.isAutenticado} deslogar={context.encerrarSessao} />
    )}
  </AuthConsumer>
)