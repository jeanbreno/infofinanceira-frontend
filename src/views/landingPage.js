import React from 'react'
import { withRouter } from 'react-router-dom'

import TradingViewWidget from '../components/tradingViewWidget'

class LandingPage extends React.Component {

    goToHomePage = () => {
        this.props.history.push("/home")
    }

    render(){
        return (
            <div className="container text-center" >
                <h2>InfoFinanceira</h2>
                Controle suas finanças pelo InfoFinanceira. < br/>< br/>
                <a href='https://infinanceira.blogspot.com/' target='_blank' rel='noopener noreferrer'>Acesse nosso site para mais notícias.</a> < br/>< br/>

                <div className="offset-md-4 col-md-4">
                    <button style={{ width: '100%' }} 
                            name='acessar'
                            onClick={this.goToHomePage} 
                            className="btn btn-success">
                        <i className="pi pi-sign-in"></i> Acessar
                    </button>
                    
                </div>
                <br/>
                <div style={{ height: "550px", width: 'auto' }}>
                    <TradingViewWidget></TradingViewWidget>
                </div>
            </div>
        )
    }

}

export default withRouter(LandingPage)