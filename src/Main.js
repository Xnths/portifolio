import React, { Component } from "react";
import {
    Route,
    BrowserRouter as Router,
    NavLink,
    Routes
} from "react-router-dom";

import Principal from "./Principal";
import Orcamento from "./Orcamento";
import Portifolio from "./Portifolio";
import About from "./About";

class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h1 className="h1__titulo">Desenvolvimento de Sites</h1>
                    <nav>
                        <ul>
                            <li><NavLink to="/">Principal</NavLink></li>
                            <li><NavLink to="/orcamento">Orçamento</NavLink></li>
                            <li><NavLink to="/portifolio">Portifólio</NavLink></li>
                            <li><NavLink to="/about">Sobre nós</NavLink></li>
                        </ul>
                    </nav>
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