//Bibliotecas
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from 'react-router-dom';

//Estilos
import "./Hamb.css";

const Hamb = () => {
  const [isToggled, setToggled] = useState(false);

  return (
    <div className="Conteiner__Hamb">
      <Hamburger
        color={isToggled ? "#fff" : "#000"}
        onToggle={(toggled) => {
          setToggled(toggled);
        }}
      />

      <nav className={isToggled ? "nav nav-open" : "nav"} id="nav">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/empresa'>Empresa</Link>
        </li>
        <li>
          <Link to='/produtos'>Produtos</Link>
        </li>
        <li>
          <Link to='/contato'>Contato</Link>
        </li>
      </nav>
    </div>
  );
};

export default Hamb;
