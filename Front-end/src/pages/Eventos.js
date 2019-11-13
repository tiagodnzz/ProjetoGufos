
import React, { Component } from 'react';//importando objeto React
import '../App.css'; // importante css 
import Rodape from '../components/Rodape';
import Cabecalho from '../components/Cabecalho';

class Evento extends Component {
    render() {
        return (
            <div>
                <Cabecalho/>

                <section className="conteudoPrincipal-cadastro">
                    <h1 className="conteudoPrincipal-cadastro-titulo">Eventos</h1>
                    <div className="container" id="conteudoPrincipal-lista">
                        <table id="tabela-lista">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Evento</th>
                                    <th>Data</th>
                                    <th>Acesso Livre</th>
                                    <th>Tipo do Evento</th>
                                </tr>
                            </thead>

                            <tbody id="tabela-lista-corpo"></tbody>
                        </table>
                    </div>

                    <div className="container" id="conteudoPrincipal-cadastro">
                        <h2 className="conteudoPrincipal-cadastro-titulo">Cadastrar Evento</h2>
                        <div className="container">
                            <input
                                type="text"
                                id="evento__titulo"
                                placeholder="título do evento"/>
                            <input type="text" id="evento__data" placeholder="dd/MM/yyyy" />
                            <select id="option__acessolivre">
                                <option value="1">Livre</option>
                                <option value="0">Restrito</option>
                            </select>
                            <select id="option__tipoevento">
                                <option value="0" disabled>Tipo do Evento</option>
                            </select>
                            <textarea
                                rows="3"
                                cols="50"
                                placeholder="descrição do evento"
                                id="evento__descricao"
                            ></textarea>
                        </div>
                        <button
                            className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                            onclick="cadastrarEvento()"
                        >
                            Cadastrar
          </button>
                    </div>
                </section>

                <Rodape />
            </div>
        );
    }
}

export default Evento; //por padrao recebe o return e envia para o navegador