import React from 'react';
import '../assets/css/cabecalho.css';

function Cabecalho() {
    return (
        <header className="cabecalhoPrincipal">
        <div className="container">
          <img src={require("../assets/img/icon-login.png")}/>

          <nav className="cabecalhoPrincipal-nav">
            <a className="" href="">Home</a>
            <a className="" href="">Eventos</a>
            <a className="" href="">Contato</a>
            <a className="" className="cabecalhoPrincipal-nav-login" href="login.html">Login</a>
          </nav>
        </div>
      </header>
    );
}

export default Cabecalho;