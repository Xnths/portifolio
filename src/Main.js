import React, { Component } from "react";
import {
    Route,
    BrowserRouter as Router,
    NavLink,
    Routes
} from "react-router-dom";

import Principal from "./Principal";
import Orcamento from "./Orcamento";

class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h1 className="h1__titulo">Criação de Sites</h1>
                    <nav>
                        <ul>
                            <li><NavLink to="/">Principal</NavLink></li>
                            <li><NavLink to="/orcamento">Orçamento</NavLink></li>
                        </ul>
                    </nav>
                    <div className="content">
                        <Routes>
                            <Route exact path="/" element={<Principal/>}/>
                            <Route path="/orcamento" element={<Orcamento/>}/>
                        </Routes>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Main;