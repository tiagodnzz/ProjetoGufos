
import React, { Component } from 'react';//importando objeto React
import '../App.css'; // importante css 
import Rodape from '../components/Rodape';
import Cabecalho from '../components/Cabecalho';
import Adm from '../components/adm';

// import '../assets/css/.css';

class Usuarios extends Component {
    render() {
        return (
            <div classNameName="App">
                <Adm/>

                <section className="conteudoPrincipal-cadastro">
                    <h1 className="conteudoPrincipal-cadastro-titulo">Usuários</h1>
                    <div className="container" id="conteudoPrincipal-lista">
                        <table id="tabela-lista">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                    <th>Permissão</th>
                                    <th>UF</th>
                                    <th>Ação</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Usuário A</td>
                                    <td>a@a.a</td>
                                    <td>ADMINISTRADOR</td>
                                    <td>SP</td>
                                    <td>Editar/Excluir</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Usuário B</td>
                                    <td>b@b.b</td>
                                    <td>COMUM</td>
                                    <td>SP</td>
                                    <td>Editar/Excluir</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Usuário C</td>
                                    <td>c@c.c</td>
                                    <td>ADMINISTRADOR</td>
                                    <td>SP</td>
                                    <td>Editar/Excluir</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Usuário D</td>
                                    <td>d@d.d</td>
                                    <td>ADMINISTRADOR</td>
                                    <td>SP</td>
                                    <td>Editar/Excluir</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="paginacao">
                            <a href="#">&laquo;</a>
                            <a href="#">1</a>
                            <a className="active" href="#">2</a>
                            <a href="#">3</a>
                            <a href="#">4</a>
                            <a href="#">5</a>
                            <a href="#">6</a>
                            <a href="#">&raquo;</a>
                        </div>
                    </div>

                    <div className="container" id="conteudoPrincipal-cadastro">
                        <h2 className="conteudoPrincipal-cadastro-titulo">Cadastrar Usuário</h2>
                        <div className="container">
                            <input type="text" placeholder="nome do usuário" />
                            <input type="text" placeholder="e-mail" />
                            <select>
                                <option value="0" disabled>Permissão</option>
                                <option value="ADMINISTRADOR">ADMINISTRADOR</option>
                                <option value="COMUM">COMUM</option>
                            </select>
                            <input type="text" placeholder="data de nascimento" />
                            <input type="text" placeholder="logradouro" />
                            <input type="text" placeholder="cidade" />
                            <input type="text" placeholder="estado" />
                        </div>
                        <button className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro">
                            Cadastrar
          </button>
                    </div>
                </section>

                <Rodape />
            </div>
        );
    }
}

export default Usuarios; //por padrao recebe o return e envia para o navegador