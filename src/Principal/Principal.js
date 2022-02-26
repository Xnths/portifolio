import React, { Component } from "react";
import "./Principal.css";

import lojaVirtual from "./loja-virtual.png";
import projetosWeb from "./projetos-web.png";
import catalogosVirtual from "./catalogos-virtuais.png";
import reformulacaoSites from "./reformulacao-de-sites.png";
import jonathas from "./jonathas.jpg";
import lucas from "./lucas.png";

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
                        <div className="desenvolvemos__container--card">
                            <h3 className="desenvolvemos__titulo">Loja Virtual</h3>
                            <img className="desenvolvemos__img white__img" src={lojaVirtual}/>
                            <p className="desenvolvemos__direitos"><a className="desenvolvemos__direitos--link" href="https://www.flaticon.com/free-icons/shop" title="shop icons">by Freepik</a></p>
                        </div>
                        <div className="desenvolvemos__container--card">
                            <h3 className="desenvolvemos__titulo">Projetos Web</h3>
                            <img className="desenvolvemos__img white__img" src={projetosWeb}/>
                            <p className="desenvolvemos__direitos"><a className="desenvolvemos__direitos--link" href="https://www.flaticon.com/free-icons/done" title="done icons">by Freepik</a></p>
                        </div>
                        <div className="desenvolvemos__container--card">
                            <h3 className="desenvolvemos__titulo">Catálogos Virtuais</h3>
                            <img className="desenvolvemos__img white__img" src={catalogosVirtual}/>
                            <p className="desenvolvemos__direitos"><a className="desenvolvemos__direitos--link" href="https://www.flaticon.com/free-icons/product" title="product icons">by Eucalyp</a></p>
                        </div>
                        <div className="desenvolvemos__container--card">
                            <h3 className="desenvolvemos__titulo">Reformulação de Sites</h3>
                            <img className="desenvolvemos__img white__img" src={reformulacaoSites}/>
                            <p className="desenvolvemos__direitos"><a className="desenvolvemos__direitos--link" href="https://www.flaticon.com/free-icons/it" title="it icons">by Vectors Tank</a></p>
                        </div>
                    </div>
                </section>

                <section class="about">
                    <h2 className="about__tituto titulo">Sobre Nós</h2>

                    <div className="about__container">
                        <div className="about__container--card">
                            <img className="about__img" src={jonathas}/>
                            <div className="about__informacao">
                                <h3 className="about__nome">Jonathas</h3>
                                <p className="about__descricao">Desenvolvedor Front-End calouro em Ciência da Computação pelo Instituto de Matemática e Estatística da Universidade de São Paulo (IME-USP).</p>
                            </div>
                        </div>
                        <div className="about__container--card">
                            <img className="about__img" src={lucas}/>
                            <div className="about__informacao">
                                <h3 className="about__nome">Lucas</h3>
                                <p className="about__descricao">Criador de conteúdos, gestor de mídias sociais e consultor de Designing.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Principal;