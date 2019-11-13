import React, { Component } from 'react';//importando objeto React
import '../App.css'; // importante css 
import Rodape from '../components/Rodape';
import Cabecalho from '../components/Cabecalho';

class Categoria extends Component {
    render() {
        return (
            <div classNameName="App">
                <Cabecalho />

                <section className="conteudoPrincipal-cadastro">
                    <h1 className="conteudoPrincipal-cadastro-titulo">Categorias</h1>
                    <div className="container" id="conteudoPrincipal-lista">
                        <table id="tabela-lista">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Título</th>
                                </tr>
                            </thead>

                            <tbody id="tabela-lista-corpo"></tbody>
                        </table>
                    </div>

                    <div className="container" id="conteudoPrincipal-cadastro">
                        <h2 className="conteudoPrincipal-cadastro-titulo">
                            Cadastrar Tipo de Evento
                            </h2>
                        <form>
                            <div className="container">
                                <input
                                    type="text"
                                    id="nome-tipo-evento"
                                    placeholder="tipo do evento"
                                />
                                <button
                                    className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                                >
                                    Cadastrar
                                </button>
                            </div>
                        </form>
                    </div>
                </section>

                <Rodape />
            </div>
        );
    }
}

export default Categoria; //por padrao recebe o return e envia para o navegador