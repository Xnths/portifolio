import React, {Component} from "react";

class Orcamento extends Component {
    render () {
        return (
            <div>
                <h2 className="h2__titulo">Orçamento</h2>
                <form>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome"/><br/>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email"/><br/>
                    <label htmlFor="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="telefone"/><br/>
                    <label htmlFor="objetivo">Mensagem</label>
                    <textarea rows="20"/>
                </form>
            </div>
        )
    }
}

export default Orcamento;