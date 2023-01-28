//Bibliotecas
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

//Estilos
import "./Hamb.css";

const Hamb = () => {
  const [isOpenNav, setOpenNav] = useState("nav");
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
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/empresa">Empresa</a>
        </li>
        <li>
          <a href="/produtos">Produtos</a>
        </li>
        <li>
          <a href="/contato">Contato</a>
        </li>
      </nav>
    </div>
  );
};

export default Hamb;
