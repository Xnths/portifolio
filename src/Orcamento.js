import React, {Component} from "react";

class Orcamento extends Component {
    render () {
        return (
            <div>
                <h2 className="h2__titulo">Orçamento</h2>
                <form>
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" name="nome"/><br/>
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email"/><br/>
                    <label for="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="telefone"/><br/>
                    <label for="objetivo">Mensagem</label>
                    <textarea rows="20"/>
                </form>
            </div>
        )
    }
}

export default Orcamento;