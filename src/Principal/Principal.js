import React, { Component } from "react";
import "./Principal.css";

import lojaVirtual from "./loja-virtual.png";
import projetosWeb from "./projetos-web.png";
import catalogosVirtual from "./catalogos-virtuais.png";
import reformulacaoSites from "./reformulacao-de-sites.png";

class Principal extends Component {
    render() {
        return (
            <div>
                <section className="principal">
                    <h1 className="principal__titulo titulo">Xnths Dev</h1>
                    <h2 className="principal__titulo-secundario titulo-secundario">Desenvolvimento de sites</h2>
                    <p className="principal__descricao">Criação de Projetos Web para garantir visibilidade ao seu negócio pela criação de uma identidade visual que possibilite maior impacto de sua marca na internet.</p>
                </section>

                <section className="desenvolvemos">
                    <h2 className="desenvolvemos__titulo-principal titulo">Desenvolvemos</h2>
                    <div className="desenvolvemos__container">
                        <h3 className="desenvolvemos__titulo">Loja Virtual</h3>
                        <img className="desenvolvemos__img" src={lojaVirtual}/>
                        <p className="desenvolvemos__direitos"><a className="desenvolvemos__direitos--link" href="https://www.flaticon.com/free-icons/shop" title="shop icons">by Freepik</a></p>
                    </div>
                    <div className="desenvolvemos__container">
                        <h3 className="desenvolvemos__titulo">Projetos Web</h3>
                        <img className="desenvolvemos__img" src={projetosWeb}/>
                        <p className="desenvolvemos__direitos"><a className="desenvolvemos__direitos--link" href="https://www.flaticon.com/free-icons/done" title="done icons">by Freepik</a></p>
                    </div>
                    <div className="desenvolvemos__container">
                        <h3 className="desenvolvemos__titulo">Catálogos Virtuais</h3>
                        <img className="desenvolvemos__img" src={catalogosVirtual}/>
                        <p className="desenvolvemos__direitos"><a className="desenvolvemos__direitos--link" href="https://www.flaticon.com/free-icons/product" title="product icons">by Eucalyp</a></p>
                    </div>
                    <div className="desenvolvemos__container">
                        <h3 className="desenvolvemos__titulo">Reformulação de Sites</h3>
                        <img className="desenvolvemos__img" src={reformulacaoSites}/>
                        <p className="desenvolvemos__direitos"><a className="desenvolvemos__direitos--link" href="https://www.flaticon.com/free-icons/it" title="it icons">by Vectors Tank</a></p>
                    </div>
                </section>
            </div>
        )
    }
}

export default Principal;