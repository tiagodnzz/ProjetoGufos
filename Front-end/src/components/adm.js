import React from 'react';
import '../assets/css/cabecalho.css';

function Adm() {
    return (
        <header className="cabecalhoPrincipal">
        <div className="container">
          <img src={require("../assets/img/icon-login.png")}/>

          <nav className="cabecalhoPrincipal-nav">
            <a className="" className="" href="">Administrador</a>
          </nav>
        </div>
      </header>
    );
}

export default Adm;