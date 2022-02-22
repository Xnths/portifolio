import React, { Component } from "react";
import {
    Route,
    BrowserRouter as Router,
    NavLink,
    Routes
} from "react-router-dom";

import "./Main.css";
import Principal from "../Principal/Principal";
import Orcamento from "../Orcamento";
import Portifolio from "../Portifolio";
import About from "../About";
import logo from "./logo.png"

class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <header className="cabecalho">
                        <div className="logo__container">
                            <img className="logo__img logo" src={logo} alt="Logo da empresa."/>
                        </div>
                        <nav className="cabecalho__navegacao">
                            <ul className="navegacao">
                                <li className="navegacao__item"><NavLink className="navegacao__link" to="/">Principal</NavLink></li>
                                <li className="navegacao__item"><NavLink className="navegacao__link" to="/orcamento">Orçamento</NavLink></li>
                                <li className="navegacao__item"><NavLink className="navegacao__link" to="/portifolio">Portifólio</NavLink></li>
                                <li className="navegacao__item"><NavLink className="navegacao__link" to="/about">Sobre nós</NavLink></li>
                            </ul>
                        </nav>
                    </header>
                    <div className="conteudo">
                        <Routes>
                            <Route exact path="/" element={<Principal/>}/>
                            <Route path="/orcamento" element={<Orcamento/>}/>
                            <Route path="/portifolio" element={<Portifolio/>}/>
                            <Route path="/about" element={<About/>}></Route>
                        </Routes>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Main;