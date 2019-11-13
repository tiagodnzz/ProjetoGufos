//arquivo de configuracao de rotas
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

//importar paginas

import Categoria from './pages/Categoria'; //importando a pagina categoria
import Eventos from './pages/Eventos'; //importando a pagina categoria
import Login from './pages/Login'; //importando a pagina login
import Usuarios from './pages/Usuarios'; //importando a pagina Usuarios
import NotFound from './pages/NotFound'; //importando a pagina nao encontrada

const Rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />{/* Caminho da home */}
                <Route path="/Categoria" component={Categoria} /> {/* Caminha da categoria */}
                <Route path="/Eventos" component={Eventos} /> {/* Caminha da Evento */}
                <Route path="/Login" component={Login} /> {/* Caminha da Login */}
                <Route path="/Usuarios" component={Usuarios} /> {/* Caminha da Usuarios */}
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)


ReactDOM.render(Rotas, document.getElementById('root'));
serviceWorker.unregister();
