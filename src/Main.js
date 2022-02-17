import React, { Component } from "react";
import styled from "styled-components";

const Nav = styled.nav`
    color: blue;
`

class Main extends Component {
    render() {
        return (
            <div>
                <h1 className="h1__titulo">Criação de Sites</h1>
                <Nav>
                    <ul>
                        <li><a href="/">Principal</a></li>
                        <li><a href="/orcamento">Orçamento</a></li>
                    </ul>
                </Nav>
                <div className="conteudo"></div>
            </div>
        )
    }
}

export default Main;